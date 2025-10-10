
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { lumi } from '../lib/lumi'

// 生成会话ID
const generateSessionId = (): string => {
  return 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36)
}

// 获取或创建会话ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('visit_session_id')
  if (!sessionId) {
    sessionId = generateSessionId()
    sessionStorage.setItem('visit_session_id', sessionId)
  }
  return sessionId
}

// 获取页面标题
const getPageTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Neumorphic Blog - Home'
    case '/about':
      return 'About - Neumorphic Blog'
    default:
      if (pathname.startsWith('/post/')) {
        return document.title || 'Blog Post - Neumorphic Blog'
      }
      return 'Neumorphic Blog'
  }
}

export const useVisitTracker = () => {
  const location = useLocation()
  const visitStartTime = useRef<number>(Date.now())
  const currentVisitId = useRef<string | null>(null)

  useEffect(() => {
    const recordVisit = async () => {
      try {
        const sessionId = getSessionId()
        const visitTime = new Date().toISOString()
        const pageTitle = getPageTitle(location.pathname)

        // 创建访问记录
        const visitRecord = await lumi.entities.visit_logs.create({
          page_path: location.pathname,
          page_title: pageTitle,
          visit_time: visitTime,
          session_id: sessionId,
          user_agent: navigator.userAgent,
          referrer: document.referrer || '',
          ip_address: 'client_side', // 客户端无法获取真实IP
          duration: 0,
          creator: 'system',
          createdAt: visitTime,
          updatedAt: visitTime
        })

        currentVisitId.current = visitRecord._id
        visitStartTime.current = Date.now()

        console.log('访问记录已创建:', {
          page: location.pathname,
          title: pageTitle,
          sessionId: sessionId
        })
      } catch (error) {
        console.error('记录访问失败:', error)
      }
    }

    recordVisit()

    // 页面卸载时更新停留时间
    const updateDuration = async () => {
      if (currentVisitId.current) {
        try {
          const duration = Math.floor((Date.now() - visitStartTime.current) / 1000)
          await lumi.entities.visit_logs.update(currentVisitId.current, {
            duration: duration,
            updatedAt: new Date().toISOString()
          })
          console.log('页面停留时间已更新:', duration, '秒')
        } catch (error) {
          console.error('更新停留时间失败:', error)
        }
      }
    }

    // 监听页面卸载事件
    const handleBeforeUnload = () => {
      updateDuration()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        updateDuration()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // 清理函数
    return () => {
      updateDuration()
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [location.pathname])

  return {
    sessionId: getSessionId(),
    currentPath: location.pathname
  }
}

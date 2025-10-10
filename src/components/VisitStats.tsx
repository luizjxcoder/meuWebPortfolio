
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Users, Eye, Clock, TrendingUp, Calendar, Globe} from 'lucide-react';
import { lumi } from '../lib/lumi';
import Chart from './Chart';

interface VisitLog {
  _id: string;
  page_path: string;
  page_title: string;
  visit_time: string;
  session_id: string;
  user_agent: string;
  referrer: string;
  ip_address: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
}

const VisitStats: React.FC = () => {
  const [visitLogs, setVisitLogs] = useState<VisitLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitLogs = async () => {
      try {
        const logs = await lumi.entities.visit_logs.list();
        setVisitLogs(Array.isArray(logs) ? logs : []);
      } catch (error) {
        console.error('Erro ao buscar logs de visita:', error);
        setVisitLogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitLogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="neu-card p-8">
          <p className="text-gray-600">Carregando estatísticas...</p>
        </div>
      </div>
    );
  }

  // Calculate statistics with safe fallbacks
  const totalVisits = visitLogs.length;
  const uniqueVisitors = new Set(visitLogs.map(log => log?.session_id).filter(Boolean)).size;
  const averageDuration = totalVisits > 0 
    ? visitLogs.reduce((sum, log) => sum + (log?.duration || 0), 0) / totalVisits 
    : 0;
  
  // Page views by path with safe handling
  const pageViews = visitLogs.reduce((acc, log) => {
    const path = log?.page_path || '/';
    acc[path] = (acc[path] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topPages = Object.entries(pageViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Visits by day with safe date handling
  const visitsByDay = visitLogs.reduce((acc, log) => {
    try {
      const day = new Date(log?.visit_time || Date.now()).toLocaleDateString('pt-BR');
      acc[day] = (acc[day] || 0) + 1;
    } catch (error) {
      console.error('Erro ao processar data:', error);
    }
    return acc;
  }, {} as Record<string, number>);

  // Prepare chart data with validation
  const dailyVisitsLabels = Object.keys(visitsByDay).slice(-7);
  const dailyVisitsValues = Object.values(visitsByDay).slice(-7);

  const dailyVisitsData = dailyVisitsLabels.length > 0 ? {
    labels: dailyVisitsLabels,
    datasets: [
      {
        label: 'Visitas Diárias',
        data: dailyVisitsValues,
        borderColor: 'rgba(99, 102, 241, 0.8)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  } : null;

  const pageViewsLabels = topPages.map(([path]) => {
    switch(path) {
      case '/': return 'Início';
      case '/about': return 'Sobre';
      case '/analytics': return 'Análises';
      case '/post/1': return 'Arte do Design Neumórfico';
      case '/post/2': return 'Técnicas CSS Modernas';
      case '/post/3': return 'Psicologia das Cores';
      default: return path;
    }
  });

  const pageViewsData = topPages.length > 0 ? {
    labels: pageViewsLabels,
    datasets: [
      {
        label: 'Visualizações de Página',
        data: topPages.map(([, count]) => count),
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(168, 85, 247, 0.8)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(168, 85, 247, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }
    ]
  } : null;

  const stats = [
    {
      title: 'Total de Visitas',
      value: totalVisits.toLocaleString('pt-BR'),
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Visitantes Únicos',
      value: uniqueVisitors.toLocaleString('pt-BR'),
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Tempo Médio (seg)',
      value: Math.round(averageDuration).toLocaleString('pt-BR'),
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'Taxa de Engajamento',
      value: `${Math.round((averageDuration / 60) * 100)}%`,
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="neu-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-700">{stat.value}</p>
                </div>
                <div className={`neu-button p-3 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Chart
            type="line"
            data={dailyVisitsData}
            title="Visitas nos Últimos 7 Dias"
            description="Tendência de visitas diárias mostrando o engajamento dos usuários ao longo do tempo."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Chart
            type="bar"
            data={pageViewsData}
            title="Páginas Mais Populares"
            description="Ranking das páginas mais visitadas do blog baseado no número de visualizações."
          />
        </motion.div>
      </div>

      {/* Recent Visits Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="neu-card p-8"
      >
        <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-3" />
          Visitas Recentes
        </h3>
        
        {visitLogs.length === 0 ? (
          <div className="text-center py-8">
            <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Nenhuma visita registrada ainda.</p>
            <p className="text-gray-500 text-sm">As visitas aparecerão aqui conforme os usuários navegarem pelo site.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Página</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Horário</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Duração</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Origem</th>
                </tr>
              </thead>
              <tbody>
                {visitLogs.slice(0, 10).map((log, index) => (
                  <motion.tr
                    key={log?._id || index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">
                          {log?.page_path === '/' ? 'Início' : 
                           log?.page_path === '/about' ? 'Sobre' :
                           log?.page_path === '/analytics' ? 'Análises' :
                           log?.page_title || log?.page_path || 'Página desconhecida'}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {log?.visit_time ? new Date(log.visit_time).toLocaleString('pt-BR') : 'N/A'}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {log?.duration || 0}s
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {log?.referrer ? (() => {
                        try {
                          return new URL(log.referrer).hostname;
                        } catch {
                          return 'Origem inválida';
                        }
                      })() : 'Direto'}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default VisitStats;

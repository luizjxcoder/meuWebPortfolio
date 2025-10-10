
/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
     ],
     darkMode: 'class', // Enable dark mode using class strategy
     theme: {
          extend: {
               colors: {
                    dark: {
                         bg: '#262626',
                         card: '#262626',
                         text: {
                              primary: '#E5E7EB',
                              secondary: '#9CA3AF',
                         },
                         shadow: {
                              light: '#333333',
                              dark: '#1a1a1a',
                         }
                    }
               },
               fontFamily: {
                    sans: ['Inter', 'system-ui', 'sans-serif'],
               },
               animation: {
                    'fade-in': 'fadeIn 0.6s ease-in-out',
                    'slide-up': 'slideUp 0.6s ease-out',
                    'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
               },
               keyframes: {
                    fadeIn: {
                         '0%': { opacity: '0', transform: 'translateY(20px)' },
                         '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    slideUp: {
                         '0%': { opacity: '0', transform: 'translateY(30px)' },
                         '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    bounceGentle: {
                         '0%, 100%': { transform: 'translateY(0)' },
                         '50%': { transform: 'translateY(-10px)' },
                    },
               },
               boxShadow: {
                    'neu-light': '9px 9px 16px #c8d0e7, -9px -9px 16px #ffffff',
                    'neu-dark': '9px 9px 16px #1a1a1a, -9px -9px 16px #333333',
                    'neu-button-light': '5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff',
                    'neu-button-dark': '5px 5px 10px #1a1a1a, -5px -5px 10px #333333',
                    'neu-inset-light': 'inset 3px 3px 6px #c8d0e7, inset -3px -3px 6px #ffffff',
                    'neu-inset-dark': 'inset 3px 3px 6px #1a1a1a, inset -3px -3px 6px #333333',
               }
          },
     },
     plugins: [],
}

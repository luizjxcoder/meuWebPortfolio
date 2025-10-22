

import React from 'react';
import { motion } from 'framer-motion';
import GitHubStats from '../components/GitHubStats';

const Analytics: React.FC = () => {

     return (
          <div className="max-w-7xl mx-auto px-6 py-8 pt-24 min-h-screen bg-gray-50 dark:bg-gray-900"
               style={{ backgroundColor: 'var(--bg-color)' }}>
               {/* Header */}
               <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
               >
                    <div
                         className="neu-card p-8 text-center"
                         style={{
                              backgroundColor: '#EBF1FC',
                              color: '#374151'
                         }}
                    >
                         <h1 className="text-4xl md:text-5xl font-bold mb-4">
                              Análises do Blog
                         </h1>
                         <p className="text-xl max-w-2xl mx-auto opacity-80">
                              Acompanhe a atividade de desenvolvimento com estatísticas detalhadas
                              dos commits, repositórios e tendências de contribuição no GitHub.
                         </p>
                    </div>
               </motion.section>

               {/* GitHub Statistics */}
               <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
               >
                    <GitHubStats />
               </motion.section>
          </div>
     );
};

export default Analytics;



import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, Calendar, Activity, Github, Code } from 'lucide-react';
import { useGitHubCommits } from '../hooks/useGitHubCommits';
import Chart from './Chart';

const GitHubStats: React.FC = () => {
     const {
          commitsByMonth,
          totalCommits,
          loading,
          error,
          lastCommitDate,
          repositoriesCount
     } = useGitHubCommits('luizjxcoder');

     if (loading) {
          return (
               <div
                    className="neu-card p-8 transition-all duration-300"
                    style={{
                         backgroundColor: '#EBF1FC',
                         color: '#374151'
                    }}
               >
                    <div className="flex items-center justify-center">
                         <div className="animate-pulse flex items-center space-x-3">
                              <Github className="w-6 h-6 transition-colors duration-300 text-gray-400" />
                              <span className="transition-colors duration-300 text-gray-600">
                                   Carregando dados do GitHub...
                              </span>
                         </div>
                    </div>
               </div>
          );
     }

     // Preparar dados para o gráfico
     const sortedMonths = Object.keys(commitsByMonth).sort();
     const monthLabels = sortedMonths.map(month => {
          const [year, monthNum] = month.split('-');
          const date = new Date(parseInt(year), parseInt(monthNum) - 1);
          return date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
     });

     const commitValues = sortedMonths.map(month => commitsByMonth[month]);

     const chartData = {
          labels: monthLabels,
          datasets: [
               {
                    label: 'Commits por Mês',
                    data: commitValues,
                    borderColor: 'rgba(6, 182, 212, 0.8)', // cyan-500
                    backgroundColor: 'rgba(6, 182, 212, 0.1)', // cyan-500 com transparência
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(6, 182, 212, 1)', // cyan-500
                    pointBorderColor: '#EBF1FC',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
               }
          ]
     };

     const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: {
                    display: false
               },
               tooltip: {
                    backgroundColor: '#EBF1FC',
                    titleColor: '#374151',
                    bodyColor: '#6B7280',
                    borderColor: '#D1D5DB',
                    borderWidth: 1,
                    cornerRadius: 12,
                    displayColors: false,
                    callbacks: {
                         title: (context: any) => {
                              return `${context[0].label}`;
                         },
                         label: (context: any) => {
                              const commits = context.parsed.y;
                              return `${commits} commit${commits !== 1 ? 's' : ''}`;
                         }
                    }
               }
          },
          scales: {
               x: {
                    grid: {
                         color: 'rgba(107, 114, 128, 0.1)',
                         borderColor: 'rgba(107, 114, 128, 0.2)'
                    },
                    ticks: {
                         color: '#6B7280',
                         font: {
                              family: 'Inter, sans-serif',
                              size: 11
                         }
                    }
               },
               y: {
                    beginAtZero: true,
                    grid: {
                         color: 'rgba(107, 114, 128, 0.1)',
                         borderColor: 'rgba(107, 114, 128, 0.2)'
                    },
                    ticks: {
                         color: '#6B7280',
                         font: {
                              family: 'Inter, sans-serif',
                              size: 11
                         },
                         stepSize: 1
                    }
               }
          }
     };

     // Calcular estatísticas
     const averageCommitsPerMonth = totalCommits > 0 ? Math.round(totalCommits / 12) : 0;
     const maxCommitsInMonth = Math.max(...commitValues);
     const activeMonths = commitValues.filter(count => count > 0).length;

     const stats = [
          {
               title: 'Total de Commits',
               value: totalCommits.toLocaleString('pt-BR'),
               icon: GitCommit,
               color: 'text-cyan-600',
               description: 'Últimos 12 meses'
          },
          {
               title: 'Repositórios',
               value: repositoriesCount.toString(),
               icon: Code,
               color: 'text-blue-600',
               description: 'Repositórios públicos'
          },
          {
               title: 'Pico Mensal',
               value: maxCommitsInMonth.toString(),
               icon: GitBranch,
               color: 'text-cyan-600',
               description: 'Maior atividade'
          },
          {
               title: 'Meses Ativos',
               value: `${activeMonths}/12`,
               icon: Calendar,
               color: 'text-cyan-600',
               description: 'Com commits'
          }
     ];

     return (
          <div className="space-y-8">
               {/* Header */}
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="neu-card p-6 transition-all duration-300"
                    style={{
                         backgroundColor: '#EBF1FC',
                         color: '#374151'
                    }}
               >
                    <div className="flex items-center space-x-3 mb-4">
                         <Github className="w-8 h-8 text-cyan-600" />
                         <div>
                              <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-700">
                                   Atividade GitHub - @luizjxcoder
                              </h3>
                              <p className="transition-colors duration-300 text-gray-600">
                                   Análise de commits dos últimos 12 meses
                                   {lastCommitDate && (
                                        <span className="ml-2 text-sm">
                                             • Último commit: {new Date(lastCommitDate).toLocaleDateString('pt-BR')}
                                        </span>
                                   )}
                              </p>
                              <a
                                   href="https://github.com/luizjxcoder"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center mt-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                              >
                                   <Github className="w-4 h-4 mr-1" />
                                   Ver perfil no GitHub
                              </a>
                         </div>
                    </div>

                    {error && (
                         <div className="mb-4 p-3 border rounded-lg transition-all duration-300 bg-yellow-50 border-yellow-200 text-yellow-700">
                              <p className="text-sm">
                                   ⚠️ {error}. Exibindo dados de exemplo.
                              </p>
                         </div>
                    )}
               </motion.div>

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
                                   className="neu-card p-6 transition-all duration-300"
                                   style={{
                                        backgroundColor: '#EBF1FC',
                                        color: '#374151'
                                   }}
                              >
                                   <div className="flex items-center justify-between mb-3">
                                        <div className={`neu-button p-3 ${stat.color} transition-all duration-300`}
                                             style={{
                                                  backgroundColor: '#f1f5f9'
                                             }}>
                                             <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-right">
                                             <p className="text-3xl font-bold transition-colors duration-300 text-gray-700">
                                                  {stat.value}
                                             </p>
                                        </div>
                                   </div>
                                   <div>
                                        <p className="text-sm font-semibold mb-1 transition-colors duration-300 text-gray-700">
                                             {stat.title}
                                        </p>
                                        <p className="text-xs transition-colors duration-300 text-gray-500">
                                             {stat.description}
                                        </p>
                                   </div>
                              </motion.div>
                         );
                    })}
               </div>

               {/* Commits Chart */}
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
               >
                    <Chart
                         type="line"
                         data={chartData}
                         options={chartOptions}
                         title="Commits por Mês - @luizjxcoder"
                         description="Visualização da atividade de desenvolvimento ao longo dos últimos 12 meses, mostrando a frequência de commits nos repositórios públicos."
                    />
               </motion.div>

               {/* Activity Summary */}
               <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="neu-card p-6 transition-all duration-300"
                    style={{
                         backgroundColor: '#EBF1FC',
                         color: '#374151'
                    }}
               >
                    <h4 className="text-lg font-semibold mb-4 flex items-center transition-colors duration-300 text-gray-700">
                         <Activity className="w-5 h-5 mr-2" />
                         Resumo da Atividade
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <div className="text-center p-4 rounded-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-cyan-100">
                              <p className="text-2xl font-bold transition-colors duration-300 text-cyan-700">
                                   {totalCommits}
                              </p>
                              <p className="text-sm transition-colors duration-300 text-cyan-600">
                                   Total de Contribuições
                              </p>
                         </div>
                         <div className="text-center p-4 rounded-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                              <p className="text-2xl font-bold transition-colors duration-300 text-blue-700">
                                   {averageCommitsPerMonth}
                              </p>
                              <p className="text-sm transition-colors duration-300 text-blue-600">
                                   Média por Mês
                              </p>
                         </div>
                         <div className="text-center p-4 rounded-lg transition-all duration-300" style={{ backgroundColor: '#F1F5F9' }}>
                              <p className="text-2xl font-bold transition-colors duration-300 text-cyan-700">
                                   {((activeMonths / 12) * 100).toFixed(0)}%
                              </p>
                              <p className="text-sm transition-colors duration-300 text-cyan-600">
                                   Consistência
                              </p>
                         </div>
                    </div>

                    <div className="mt-6 p-4 rounded-lg transition-all duration-300 bg-gray-50">
                         <p className="text-sm text-center transition-colors duration-300 text-gray-600">
                              Dados obtidos em tempo real da API do GitHub para a conta @luizjxcoder
                         </p>
                    </div>
               </motion.div>
          </div>
     );
};

export default GitHubStats;

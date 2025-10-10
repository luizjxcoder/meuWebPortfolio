import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  type?: 'line' | 'bar';
  data?: any;
  options?: any;
  title?: string;
  description?: string;
}

const Chart: React.FC<ChartProps> = ({ 
  type = 'line', 
  data, 
  options, 
  title, 
  description 
}) => {

  // Verificação defensiva dos dados
  const isValidData = data && 
    data.labels && 
    Array.isArray(data.labels) && 
    data.datasets && 
    Array.isArray(data.datasets) &&
    data.datasets.length > 0;

  // Dados padrão caso não sejam fornecidos ou sejam inválidos
  const defaultData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Dados de Exemplo',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(99, 102, 241, 0.8)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartData = isValidData ? data : defaultData;

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#4B5563',
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#EBF1FC',
        titleColor: '#374151',
        bodyColor: '#6B7280',
        borderColor: '#D1D5DB',
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: false,
        titleFont: {
          family: 'Inter, sans-serif',
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          family: 'Inter, sans-serif',
          size: 12
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
      }
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2
      },
      line: {
        tension: 0.3,
        borderWidth: 3
      }
    },
    ...options
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="neu-card p-6 my-8"
      style={{
        backgroundColor: '#EBF1FC',
        color: '#374151'
      }}
    >
      {title && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 text-gray-700">
            {title}
          </h3>
          {description && (
            <p className="text-sm transition-colors duration-300 text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}
      
      {!isValidData && (
        <div className="mb-4 p-3 border rounded-lg transition-all duration-300 bg-yellow-50 border-yellow-200 text-yellow-700">
          <p className="text-sm">
            ⚠️ Dados do gráfico não disponíveis. Exibindo dados de exemplo.
          </p>
        </div>
      )}
      
      <div className="h-64 md:h-80">
        {type === 'line' ? (
          <Line data={chartData} options={defaultOptions} />
        ) : (
          <Bar data={chartData} options={defaultOptions} />
        )}
      </div>
    </motion.div>
  );
};

export default Chart;

    
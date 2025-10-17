
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {Calendar, MapPin, Filter, ChevronDown} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce TechStore",
      category: "ecommerce",
      categoryName: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-15",
      location: "São Paulo, SP",
      description: "Plataforma completa de e-commerce com design responsivo e UX otimizada para conversão."
    },
    {
      id: 2,
      title: "Dashboard Analytics Pro",
      category: "webapp",
      categoryName: "Web App",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-12",
      location: "Rio de Janeiro, RJ",
      description: "Interface moderna para dashboard de analytics com visualização de dados em tempo real."
    },
    {
      id: 3,
      title: "Portal Corporativo TechCorp",
      category: "corporate",
      categoryName: "Corporativo",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-10",
      location: "Belo Horizonte, MG",
      description: "Website institucional com design system completo e experiência de usuário premium."
    },
    {
      id: 4,
      title: "App Mobile FinanceTracker",
      category: "mobile",
      categoryName: "Mobile Design",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-20",
      location: "Brasília, DF",
      description: "Design de interface para aplicativo de controle financeiro com foco em usabilidade."
    },
    {
      id: 5,
      title: "Landing Page SaaS Premium",
      category: "landing",
      categoryName: "Landing Page",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-15",
      location: "São Paulo, SP",
      description: "Landing page de alta conversão para produto SaaS com design moderno e responsivo."
    },
    {
      id: 6,
      title: "Design System ComponentLib",
      category: "designsystem",
      categoryName: "Design System",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-08",
      location: "Mantiqueira, MG",
      description: "Sistema de design completo com componentes reutilizáveis e documentação detalhada."
    },
    {
      id: 7,
      title: "Marketplace Digital Arts",
      category: "ecommerce",
      categoryName: "E-commerce",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-25",
      location: "Florianópolis, SC",
      description: "Marketplace para artistas digitais com sistema de pagamento integrado e UX intuitiva."
    },
    {
      id: 8,
      title: "Plataforma EduTech Learning",
      category: "webapp",
      categoryName: "Web App",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-18",
      location: "São Paulo, SP",
      description: "Aplicação web para educação online com interface gamificada e design centrado no usuário."
    },
    {
      id: 9,
      title: "Website StartupTech",
      category: "corporate",
      categoryName: "Corporativo",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-10",
      location: "São Paulo, SP",
      description: "Site institucional para startup de tecnologia com animações modernas e design inovador."
    },
    {
      id: 10,
      title: "App Delivery UberEats Style",
      category: "mobile",
      categoryName: "Mobile Design",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-05",
      location: "Curitiba, PR",
      description: "Interface mobile para app de delivery com foco na experiência do usuário e conversão."
    },
    {
      id: 11,
      title: "Landing Page Produto Digital",
      category: "landing",
      categoryName: "Landing Page",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-10-28",
      location: "Salvador, BA",
      description: "Landing page otimizada para conversão de produto digital com A/B testing implementado."
    },
    {
      id: 12,
      title: "UI Kit ModernDesign",
      category: "designsystem",
      categoryName: "Design System",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-10-20",
      location: "Chapada Diamantina, BA",
      description: "Kit de interface completo com componentes modernos e guidelines de usabilidade."
    }
  ];

  // Calcular contadores por categoria
  const categoryProjectCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach(project => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: categoryProjectCounts.ecommerce || 0 },
    { id: 'webapp', name: 'Web Apps', count: categoryProjectCounts.webapp || 0 },
    { id: 'corporate', name: 'Corporativo', count: categoryProjectCounts.corporate || 0 },
    { id: 'mobile', name: 'Mobile Design', count: categoryProjectCounts.mobile || 0 },
    { id: 'landing', name: 'Landing Pages', count: categoryProjectCounts.landing || 0 },
    { id: 'designsystem', name: 'Design Systems', count: categoryProjectCounts.designsystem || 0 }
  ];

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Organizar projetos em fileiras de 3
  const projectRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < filteredProjects.length; i += 3) {
      rows.push(filteredProjects.slice(i, i + 3));
    }
    return rows;
  }, [filteredProjects]);

  // Encontrar categoria selecionada
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  // Variantes de animação para as fileiras
  const rowVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: (index: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2, // Delay progressivo para cada fileira
        ease: "easeOut"
      }
    })
  };

  // Variantes para os cards individuais dentro de cada fileira
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: (index: number) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Delay menor entre cards da mesma fileira
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-[#EBF1FC]">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-gray-700">
            Portfólio
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
            Uma coleção dos nossos projetos mais inovadores em web design, UX/UI e desenvolvimento, 
            criando experiências digitais que transformam negócios e encantam usuários.
          </p>
        </motion.div>

        {/* Filter Categories - Desktop (telas grandes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gray-700 text-white shadow-lg'
                  : 'neu-button text-gray-700 hover:text-gray-900'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.name}</span>
              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                selectedCategory === category.id
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filter Dropdown - Mobile (telas pequenas) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:hidden mb-12 flex justify-center"
        >
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`neu-button px-6 py-3 rounded-xl font-medium text-gray-700 flex items-center gap-3 min-w-[200px] justify-between transition-all duration-300 ${
                isDropdownOpen ? 'border-2 border-cyan-400' : 'border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>{selectedCategoryData?.name}</span>
                <span className="px-2 py-1 text-xs rounded-full font-semibold bg-gray-200 text-gray-600">
                  {selectedCategoryData?.count}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 text-white p-2 rounded"
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-gray-100 text-gray-900 font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        <span>{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        selectedCategory === category.id
                          ? 'bg-gray-200 text-gray-700'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Overlay para fechar dropdown quando clicar fora */}
        {isDropdownOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}

        {/* Projects Grid - Organizado por fileiras */}
        <div className="space-y-8">
          {projectRows.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}-${selectedCategory}`}
              custom={rowIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rowVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {row.map((project, cardIndex) => (
                <motion.div
                  key={project.id}
                  custom={cardIndex}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="neu-card overflow-hidden group"
                  style={{
                    backgroundColor: '#EBF1FC'
                  }}
                >
                  <Link to={`/project/${project.id}`}>
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 text-white p-2 rounded" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 text-sm font-medium text-gray-700 bg-white bg-opacity-90 rounded-lg shadow-sm">
                        {project.categoryName}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-500 transition-colors duration-300 text-gray-700">
                        {project.title}
                      </h3>
                      
                      <p className="mb-4 leading-relaxed text-gray-600">
                        {project.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(project.date).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4 text-gray-400">
              💻
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-600">
              Nenhum projeto encontrado
            </h3>
            <p className="text-gray-500">
              Tente selecionar uma categoria diferente.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div 
            className="neu-card p-12"
            style={{
              backgroundColor: '#EBF1FC'
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              Pronto para o próximo projeto?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              Entre em contato conosco para discutir seu próximo projeto web. 
              Estamos prontos para criar experiências digitais incríveis para seu negócio.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neu-button px-8 py-4 font-semibold text-lg transition-all duration-300 text-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;

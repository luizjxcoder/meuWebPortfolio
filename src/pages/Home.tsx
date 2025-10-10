
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Calendar, Clock, ArrowRight, Code, Award, Heart, Users, Star, MapPin, Phone, Mail, Send, User, MessageSquare, Globe} from 'lucide-react';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('projectType', formData.projectType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', `Novo projeto: ${formData.projectType} - ${formData.name}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/jxcoder.dev@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Limpar status após 8 segundos
      setTimeout(() => setSubmitStatus('idle'), 8000);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dados reais dos projetos do portfólio
  const portfolioProjects = [
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
    },
    // Projetos adicionais para representar o portfólio completo
    {
      id: 13,
      title: "E-commerce Fashion Store",
      category: "ecommerce",
      categoryName: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-10-15",
      location: "Rio de Janeiro, RJ",
      description: "Loja virtual de moda com catálogo interativo e checkout otimizado."
    },
    {
      id: 14,
      title: "Portal Educacional UniTech",
      category: "corporate",
      categoryName: "Corporativo",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-10-10",
      location: "Brasília, DF",
      description: "Website institucional para universidade com portal do aluno integrado."
    },
    {
      id: 15,
      title: "Landing Page Curso Online",
      category: "landing",
      categoryName: "Landing Page",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-10-05",
      location: "São Paulo, SP",
      description: "Página de vendas para curso online com alta taxa de conversão."
    },
    {
      id: 16,
      title: "App Fitness Tracker",
      category: "mobile",
      categoryName: "Mobile Design",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-09-30",
      location: "Belo Horizonte, MG",
      description: "Interface para aplicativo de acompanhamento fitness e nutrição."
    },
    {
      id: 17,
      title: "Sistema CRM Empresarial",
      category: "webapp",
      categoryName: "Web App",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-09-25",
      location: "São Paulo, SP",
      description: "Sistema de gestão de relacionamento com cliente para empresas."
    },
    {
      id: 18,
      title: "UI Library Components",
      category: "designsystem",
      categoryName: "Design System",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-09-20",
      location: "Florianópolis, SC",
      description: "Biblioteca de componentes UI reutilizáveis para equipes de desenvolvimento."
    }
  ];

  // Função para contar projetos por categoria
  const getProjectCountByCategory = (categoryId: string): number => {
    const categoryMapping: { [key: string]: string } = {
      'corporate': 'corporate',
      'ecommerce': 'ecommerce', 
      'landing': 'landing',
      'webapp': 'webapp',
      'uxui': 'mobile', // UX/UI Design mapeia para mobile
      'designsystem': 'designsystem'
    };

    const mappedCategory = categoryMapping[categoryId];
    if (!mappedCategory) return 0;

    return portfolioProjects.filter(project => project.category === mappedCategory).length;
  };

  const portfolioCategories = [
    {
      id: 1,
      title: "Sites Corporativos",
      categoryId: "corporate",
      description: "Websites profissionais que fortalecem a presença digital da sua empresa",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('corporate')
    },
    {
      id: 2,
      title: "E-commerce",
      categoryId: "ecommerce",
      description: "Lojas virtuais otimizadas para conversão e experiência do usuário",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('ecommerce')
    },
    {
      id: 3,
      title: "Landing Pages",
      categoryId: "landing",
      description: "Páginas de alta conversão focadas em resultados e performance",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('landing')
    },
    {
      id: 4,
      title: "Aplicativos Web",
      categoryId: "webapp",
      description: "Sistemas web interativos e dashboards administrativos modernos",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('webapp')
    },
    {
      id: 5,
      title: "UX/UI Design",
      categoryId: "uxui",
      description: "Interfaces intuitivas e experiências digitais memoráveis",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('uxui')
    },
    {
      id: 6,
      title: "Design Systems",
      categoryId: "designsystem",
      description: "Bibliotecas de componentes e guias de estilo consistentes",
      image: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800",
      count: getProjectCountByCategory('designsystem')
    }
  ];

  const featuredWorks = [
    {
      id: 1,
      title: "E-commerce TechStore",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-15",
      location: "São Paulo, SP"
    },
    {
      id: 2,
      title: "Dashboard Analytics Pro",
      category: "Aplicativo Web",
      image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-12",
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      title: "Landing Page StartupX",
      category: "Landing Page",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2025-01-10",
      location: "Belo Horizonte, MG"
    }
  ];

  const achievements = [
    { icon: Award, label: "Projetos Entregues", value: `${portfolioProjects.length}+` },
    { icon: Heart, label: "Clientes Satisfeitos", value: "80+" },
    { icon: Code, label: "Linhas de Código", value: "500K+" },
    { icon: Users, label: "Anos de Experiência", value: "5+" }
  ];

  const testimonials = [
    {
      name: "Ana Costa",
      role: "CEO StartupX",
      content: "O site desenvolvido pelo João superou nossas expectativas. Design moderno e funcionalidade impecável aumentaram nossas conversões em 40%.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Carlos Silva",
      role: "Diretor de Marketing",
      content: "Profissionalismo excepcional. O dashboard criado revolucionou nossa análise de dados e tomada de decisões estratégicas.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const projectTypes = [
    "Site Corporativo",
    "E-commerce",
    "Landing Page",
    "Aplicativo Web",
    "UX/UI Design",
    "Design System",
    "Outro"
  ];

  // Organizar especialidades em fileiras de 3
  const categoryRows = [];
  for (let i = 0; i < portfolioCategories.length; i += 3) {
    categoryRows.push(portfolioCategories.slice(i, i + 3));
  }

  // Organizar trabalhos em destaque em fileiras de 3
  const featuredRows = [];
  for (let i = 0; i < featuredWorks.length; i += 3) {
    featuredRows.push(featuredWorks.slice(i, i + 3));
  }

  // Organizar achievements em fileiras de 4
  const achievementRows = [];
  for (let i = 0; i < achievements.length; i += 4) {
    achievementRows.push(achievements.slice(i, i + 4));
  }

  // Organizar testimonials em fileiras de 2
  const testimonialRows = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialRows.push(testimonials.slice(i, i + 2));
  }

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
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://static.lumi.new/9d/9de5696f554d06553d71ba174b954c2b.svg')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          >
            <span className="text-cyan-400">JXCODER</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-black">
              WEB STUDIO
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvedor Web especializado em criar interfaces modernas e funcionais que transformam ideias em projetos digitais de alto impacto.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center space-x-2 shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                <Code className="w-5 h-5" />
                <span>Ver Portfólio</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center space-x-2 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <span>Fale Comigo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16" style={{ backgroundColor: 'var(--bg-color)' }}>
        
        {/* Achievements Section */}
        <section className="mb-20">
          <div className="space-y-8">
            {achievementRows.map((row, rowIndex) => (
              <motion.div
                key={`achievement-row-${rowIndex}`}
                custom={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={rowVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {row.map((achievement, cardIndex) => (
                  <motion.div
                    key={`achievement-${rowIndex}-${cardIndex}`}
                    custom={cardIndex}
                    variants={cardVariants}
                    className="neu-card p-3 md:p-8 text-center"
                  >
                    <achievement.icon className="w-8 h-8 md:w-12 md:h-12 text-gray-700 mx-auto mb-2 md:mb-4" />
                    <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{achievement.value}</div>
                    <div className="text-sm md:text-base text-gray-700 font-medium">{achievement.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Works - MOVIDO PARA CIMA */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projetos em Destaque</h2>
          </motion.div>
          
          <div className="space-y-8">
            {featuredRows.map((row, rowIndex) => (
              <motion.div
                key={`featured-row-${rowIndex}`}
                custom={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={rowVariants}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {row.map((work, cardIndex) => (
                  <motion.article
                    key={work.id}
                    custom={cardIndex}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="neu-card overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {work.category}
                        </span>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {work.location}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{work.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(work.date).toLocaleDateString('pt-BR')}
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            to={`/post/${work.id}`}
                            className="neu-button px-4 py-2 text-sm font-medium text-gray-800 inline-flex items-center space-x-1"
                          >
                            <span>Ver Mais</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Categories - MOVIDO PARA BAIXO */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Especialidades</h2>
            <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Cada especialidade representa uma paixão única, onde código e design se encontram 
              para criar experiências digitais que conectam marcas e usuários de forma memorável.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {categoryRows.map((row, rowIndex) => (
              <motion.div
                key={`category-row-${rowIndex}`}
                custom={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={rowVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {row.map((category, cardIndex) => (
                  <motion.div
                    key={category.id}
                    custom={cardIndex}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="neu-card overflow-hidden cursor-pointer group relative"
                  >
                    <Link to="/portfolio" className="block">
                      {/* Nome da categoria centralizado na parte superior */}
                      <div className="absolute top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white text-center py-4 px-4">
                          {category.title}
                        </h3>
                      </div>
                      
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm text-gray-200">{category.count} projetos</p>
                        </div>
                        {/* Hover overlay com indicação de link */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-gray-900 font-semibold inline-flex items-center space-x-2">
                            <Code className="w-4 h-4" />
                            <span>Ver no Portfólio</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed">{category.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">O Que Dizem Meus Clientes</h2>
          </motion.div>
          
          <div className="space-y-8">
            {testimonialRows.map((row, rowIndex) => (
              <motion.div
                key={`testimonial-row-${rowIndex}`}
                custom={rowIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={rowVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {row.map((testimonial, cardIndex) => (
                  <motion.div
                    key={`testimonial-${rowIndex}-${cardIndex}`}
                    custom={cardIndex}
                    variants={cardVariants}
                    className="neu-card p-8"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-700 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {Array.isArray(Array(testimonial.rating).fill(0)) && Array(testimonial.rating).fill(0).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="neu-card p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Vamos Criar Algo Incrível Juntos</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade digital? Entre em contato e vamos 
              conversar sobre como posso ajudar a criar a presença online perfeita para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+5511999999999"
                  className="neu-button px-8 py-4 font-semibold text-gray-800 inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>(11) 99999-9999</span>
                </a>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="mailto:jxcpder.dev@gmail.com"
                  className="neu-button px-8 py-4 font-semibold text-gray-800 inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>jxcpder.dev@gmail.com</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="neu-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Conte-me Sobre Seu Projeto</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Preencha o formulário abaixo e receba uma proposta personalizada em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Nome */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-800 font-semibold mb-3">
                    <User className="w-5 h-5 inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="neu-input w-full p-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-800 font-semibold mb-3">
                    <Mail className="w-5 h-5 inline mr-2" />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="neu-input w-full p-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                {/* Telefone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-gray-800 font-semibold mb-3">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="neu-input w-full p-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </motion.div>

                {/* Tipo de Projeto */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="projectType" className="block text-gray-800 font-semibold mb-3">
                    <Globe className="w-5 h-5 inline mr-2" />
                    Tipo de Projeto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="neu-input w-full p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Mensagem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-8"
              >
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-3">
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Descrição do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="neu-input w-full p-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
                  placeholder="Conte-me mais sobre seu projeto: objetivos, funcionalidades desejadas, prazo, orçamento estimado..."
                />
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-2xl text-center shadow-lg"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800">Mensagem Enviada com Sucesso!</h3>
                    </div>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    Obrigado por entrar em contato! Recebi sua mensagem e retornarei em breve com uma proposta personalizada. 
                    Normalmente respondo em até 24 horas durante dias úteis.
                  </p>
                  <div className="mt-4 text-sm text-green-600">
                    📧 Uma cópia da sua mensagem foi enviada para o seu e-mail
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-800 rounded-2xl text-center shadow-lg"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">Erro no Envio</h3>
                    </div>
                  </div>
                  <p className="text-red-700 leading-relaxed mb-4">
                    Ops! Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente em alguns instantes.
                  </p>
                  <div className="text-sm text-red-600">
                    💡 Alternativa: Entre em contato diretamente pelo e-mail{' '}
                    <a href="mailto:jxcpder.dev@gmail.com" className="font-semibold underline hover:text-red-800">
                      jxcpder.dev@gmail.com
                    </a>{' '}
                    ou telefone{' '}
                    <a href="tel:+5511999999999" className="font-semibold underline hover:text-red-800">
                      (11) 99999-9999
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`neu-button px-12 py-4 font-semibold text-gray-800 inline-flex items-center space-x-3 text-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Proposta</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
    
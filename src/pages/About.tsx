
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Camera, Award, Heart, Users, MapPin, Clock, Star, Target, Lightbulb, Eye, Code, Monitor, Smartphone, Palette, Zap, Globe, Rocket} from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navegar para a página inicial
    navigate('/');
    
    // Aguardar um pouco para a página carregar e então rolar para o formulário
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const skills = [
    { name: "Desenvolvimento Frontend", level: 95, icon: "💻" },
    { name: "React & TypeScript", level: 92, icon: "⚛️" },
    { name: "UI/UX Design", level: 88, icon: "🎨" },
    { name: "Backend Development", level: 85, icon: "⚙️" },
    { name: "Mobile Development", level: 82, icon: "📱" },
    { name: "DevOps & Deploy", level: 80, icon: "🚀" }
  ];

  const brandColors = [
    { name: "Azul Principal", color: "#1E40AF", description: "Confiança e profissionalismo" },
    { name: "Cyan Vibrante", color: "#06B6D4", description: "Inovação e criatividade" },
    { name: "Cinza Moderno", color: "#374151", description: "Elegância e sofisticação" },
    { name: "Branco Puro", color: "#FFFFFF", description: "Clareza e simplicidade" },
    { name: "Azul Claro", color: "#EBF1FC", description: "Harmonia e tranquilidade" }
  ];

  const brandValues = [
    {
      icon: Code,
      title: "Excelência Técnica",
      description: "Cada projeto é desenvolvido com as melhores práticas e tecnologias mais modernas do mercado."
    },
    {
      icon: Heart,
      title: "Paixão pelo Design",
      description: "Criamos experiências visuais que conectam emocionalmente com os usuários."
    },
    {
      icon: Rocket,
      title: "Inovação Constante",
      description: "Sempre explorando novas possibilidades para entregar soluções únicas e impactantes."
    },
    {
      icon: Users,
      title: "Parceria Verdadeira",
      description: "Trabalhamos lado a lado com nossos clientes para transformar visões em realidade digital."
    }
  ];

  const equipment = [
    {
      category: "Frontend",
      items: [
        "React & Next.js",
        "TypeScript & JavaScript",
        "Tailwind CSS & Styled Components",
        "Redux & Zustand"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js & Express",
        "Python & Django",
        "PostgreSQL & MongoDB",
        "REST APIs & GraphQL"
      ]
    },
    {
      category: "Ferramentas",
      items: [
        "VS Code & Git",
        "Docker & AWS",
        "Figma & Adobe XD",
        "Jest & Cypress"
      ]
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Início da Jornada",
      description: "Descobri minha paixão pela programação durante a faculdade de Ciência da Computação."
    },
    {
      year: "2020",
      title: "Primeiro Projeto Freelance",
      description: "Desenvolvi meu primeiro site profissional, focando em experiência do usuário."
    },
    {
      year: "2022",
      title: "Especialização em React",
      description: "Me especializei em React e TypeScript, criando aplicações web modernas."
    },
    {
      year: "2023",
      title: "Projetos de Grande Escala",
      description: "Trabalhei em projetos enterprise com milhares de usuários ativos."
    },
    {
      year: "2025",
      title: "Desenvolvedor Full Stack",
      description: "Expandiu expertise para desenvolvimento completo com foco em performance."
    }
  ];

  const philosophy = [
    {
      icon: Eye,
      title: "Visão Inovadora",
      description: "Cada projeto tem seu próprio potencial. Meu trabalho é encontrar e desenvolver soluções que superem expectativas e criem experiências memoráveis."
    },
    {
      icon: Heart,
      title: "Conexão com o Usuário",
      description: "Acredito que as melhores aplicações nascem da compreensão profunda das necessidades dos usuários, criando interfaces intuitivas e acessíveis."
    },
    {
      icon: Target,
      title: "Excelência Técnica",
      description: "Desde o planejamento até o deploy, cada linha de código é cuidadosamente pensada para garantir performance, segurança e escalabilidade."
    },
    {
      icon: Lightbulb,
      title: "Aprendizado Contínuo",
      description: "Sempre explorando novas tecnologias, frameworks e metodologias para oferecer soluções modernas e eficientes."
    }
  ];

  const galleryImages = [
    {
      src: "https://static.lumi.new/3f/3f9e8213b432f802dba283e406aa098a.png",
      alt: "Interface de desenvolvimento web moderna",
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas"
    },
    {
      src: "https://static.lumi.new/ce/ced6bfe3ac79ed4d5098a2f408b12742.png",
      alt: "Design de experiência do usuário",
      title: "UX/UI Design",
      description: "Foco na experiência e usabilidade"
    },
    {
      src: "https://static.lumi.new/f4/f41242bee9326768de3338b9600880d6.png",
      alt: "Arquitetura de sistemas web",
      title: "Arquitetura de Soluções",
      description: "Planejamento e estruturação de projetos"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#EBF1FC]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="neu-card p-12 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-gray-700 mb-6">
                  Olá, eu sou o
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800">
                    Luiz Alberto Silva
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Desenvolvedor web com mais de 5 anos de experiência, especializado em 
                  criar interfaces modernas e funcionais que transformam ideias em projetos 
                  digitais de alto impacto. Minha paixão é contar histórias através do código, 
                  desenvolvendo soluções que conectam pessoas e negócios de forma criativa e eficiente.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="neu-button p-3 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]">
                      <Code className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">100+</div>
                      <div className="text-gray-600 text-sm">Projetos Desenvolvidos</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="neu-button p-3 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]">
                      <Award className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">5+</div>
                      <div className="text-gray-600 text-sm">Anos de Experiência</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="neu-card p-4 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
                  <img
                    src="https://static.lumi.new/e1/e162b5098c7c574fdbce6478352a1625.png"
                    alt="Luiz Alberto Silva - Desenvolvedor Web"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 neu-card p-4 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">São Paulo, Brasil</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Brand Identity Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="neu-card p-12 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-700 mb-4">JXCODER - Web Studio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Identidade Visual & História da Marca
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Logo e Identidade Visual */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <div className="neu-card p-8 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff] mb-6">
                    <img
                      src="https://static.lumi.new/72/725033789b1df396d3ce9cad91f4aba7.png"
                      alt="JXCODER - Web Studio Logo"
                      className="w-full max-w-xs mx-auto h-auto"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">Logotipo Principal</h3>
                  <p className="text-gray-600">
                    Símbolo da inovação e excelência em desenvolvimento web
                  </p>
                </div>

                {/* Paleta de Cores */}
                <div>
                  <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Paleta de Cores</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {brandColors.map((color, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center"
                      >
                        <div 
                          className="w-16 h-16 mx-auto mb-2 rounded-2xl neu-card shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]"
                          style={{ backgroundColor: color.color }}
                        ></div>
                        <div className="text-xs font-medium text-gray-700">{color.name}</div>
                        <div className="text-xs text-gray-500">{color.color}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Cada cor representa um aspecto fundamental da nossa identidade visual
                    </p>
                  </div>
                </div>

                {/* Galeria Visual com Cards Uniformes */}
                <div>
                  <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Galeria Visual</h4>
                  
                  {/* Grid com tamanhos uniformes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-label="Galeria de projetos visuais">
                    {galleryImages.map((image, index) => (
                      <motion.article
                        key={index}
                        variants={itemVariants}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group cursor-pointer h-full"
                        tabIndex={0}
                        role="img"
                        aria-label={image.alt}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            // Ação de clique/visualização
                          }
                        }}
                      >
                        <div className="neu-card p-3 bg-[#EBF1FC] shadow-[6px_6px_12px_#d1d9f0,-6px_-6px_12px_#ffffff] transition-all duration-300 group-hover:shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff] group-focus:shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff] group-focus:outline-none group-focus:ring-2 group-focus:ring-gray-400 group-focus:ring-offset-2 group-focus:ring-offset-[#EBF1FC] h-full flex flex-col">
                          {/* Container da imagem com altura fixa */}
                          <div className="aspect-square w-full overflow-hidden rounded-xl mb-3 flex-shrink-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          {/* Container do texto com altura flexível */}
                          <div className="text-center flex-1 flex flex-col justify-center">
                            <h5 className="font-semibold text-gray-700 mb-1 text-sm">{image.title}</h5>
                            <p className="text-xs text-gray-600">{image.description}</p>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Elementos visuais que representam nossa criatividade e versatilidade
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* História e Valores */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-6">Nossa História</h3>
                  <div className="neu-card p-6 bg-[#EBF1FC] shadow-[6px_6px_12px_#d1d9f0,-6px_-6px_12px_#ffffff]">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A <strong>JXCODER</strong> nasceu da paixão por transformar ideias em experiências 
                      digitais extraordinárias. Fundada em 2019, nossa jornada começou com um sonho 
                      simples: criar soluções web que não apenas funcionam, mas inspiram.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Ao longo dos anos, evoluímos de um desenvolvedor individual para um web studio 
                      especializado em criar interfaces modernas, funcionais e memoráveis que conectam 
                      marcas com seus usuários de forma autêntica e impactante.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-6">Nossos Valores</h3>
                  <div className="space-y-4">
                    {brandValues.map((value, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="neu-card p-4 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="neu-button p-2 flex-shrink-0 bg-[#EBF1FC] shadow-[2px_2px_4px_#d1d9f0,-2px_-2px_4px_#ffffff]">
                            <value.icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-700 mb-1">{value.title}</h4>
                            <p className="text-sm text-gray-600">{value.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-6">Visão de Futuro</h3>
                  <div className="neu-card p-6 bg-[#EBF1FC] shadow-[6px_6px_12px_#d1d9f0,-6px_-6px_12px_#ffffff]">
                    <div className="flex items-start space-x-4">
                      <div className="neu-button p-3 flex-shrink-0 bg-[#EBF1FC] shadow-[3px_3px_6px_#d1d9f0,-3px_-3px_6px_#ffffff]">
                        <Globe className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-gray-600 leading-relaxed">
                          Nosso objetivo é expandir nossa presença no mercado internacional, 
                          desenvolvendo soluções que impactem positivamente a vida das pessoas. 
                          Queremos ser reconhecidos como referência em inovação e qualidade no 
                          desenvolvimento web, sempre mantendo nosso compromisso com a excelência 
                          e a satisfação do cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-4 text-center">Minha Filosofia</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Cada linha de código tem o poder de transformar ideias em realidade digital. 
            Essa é a magia que busco em cada projeto.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neu-card p-8 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]"
              >
                <div className="flex items-start space-x-4">
                  <div className="neu-button p-4 flex-shrink-0 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]">
                    <item.icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-12 text-center">Especialidades</h2>
          
          <div className="neu-card p-8 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="neu-input p-1 bg-gray-200 shadow-inset-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-cyan-400 to-[#262626] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-12 text-center">Minha Jornada</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="neu-card p-6 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
                      <div className="text-2xl font-bold text-gray-700 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="neu-button p-4 bg-[#EBF1FC] border-4 border-gray-200 shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff]">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Equipment Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-700 mb-12 text-center">Stack Tecnológico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="neu-card p-8 bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]"
              >
                <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <Star className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="neu-card p-12 text-center bg-[#EBF1FC] shadow-[8px_8px_16px_#d1d9f0,-8px_-8px_16px_#ffffff]">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">Vamos Trabalhar Juntos</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tem um projeto em mente? Adoraria conhecer sua ideia e ajudar a 
              transformá-la em uma solução digital inovadora. Entre em contato!
            </p>
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neu-button px-8 py-4 text-lg font-semibold text-gray-700 inline-flex items-center space-x-2 bg-[#EBF1FC] shadow-[4px_4px_8px_#d1d9f0,-4px_-4px_8px_#ffffff] active:border-2 active:border-cyan-400 transition-all duration-200"
            >
              <Heart className="w-5 h-5 text-gray-600" />
              <span>Iniciar Conversa</span>
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;

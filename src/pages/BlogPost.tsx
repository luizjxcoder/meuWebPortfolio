
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Calendar, Clock, MapPin, Camera, ArrowLeft, Heart, Share2, Download, Eye, Aperture, Iso, Timer} from 'lucide-react';
import Chart from '../components/Chart';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const portfolioProjects = {
    "1": {
      title: "Casamento Marina & João - Fazenda Vila Real",
      category: "Casamentos",
      location: "Fazenda Vila Real, Itu - SP",
      date: "2025-01-15",
      duration: "8 horas",
      coverImage: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Um casamento mágico em uma fazenda histórica, onde cada momento foi capturado com sensibilidade e arte. Marina e João escolheram um local que reflete sua personalidade: elegante, acolhedor e cheio de história.",
      story: `Este foi um dos casamentos mais emocionantes que tive o privilégio de fotografar. Marina e João se conheceram na faculdade e, após 6 anos juntos, decidiram oficializar sua união em um local que sempre sonharam: a Fazenda Vila Real.

A preparação começou cedo, com a Marina se arrumando na suíte principal da fazenda, cercada por suas madrinhas. A luz natural que entrava pelas janelas coloniais criava um ambiente perfeito para os retratos. João, por sua vez, se preparava no chalé dos noivos, nervoso mas radiante de felicidade.

A cerimônia aconteceu no jardim principal, com vista para as montanhas. O momento mais emocionante foi quando Marina entrou, e João não conseguiu conter as lágrimas. Consegui capturar não apenas esse momento, mas também as reações dos familiares e amigos.

A festa seguiu até altas horas, com muita dança, risadas e momentos únicos que ficarão para sempre registrados.`,
      
      gallery: [
        {
          url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "O primeiro olhar - momento emocionante da cerimônia",
          technical: { camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "f/1.8, 1/250s, ISO 400" }
        },
        {
          url: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Detalhes da decoração floral artesanal",
          technical: { camera: "Canon EOS R5", lens: "RF 100mm f/2.8L", settings: "f/2.8, 1/125s, ISO 200" }
        },
        {
          url: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Momento íntimo dos noivos no jardim",
          technical: { camera: "Canon EOS R5", lens: "RF 24-70mm f/2.8L", settings: "f/2.8, 1/200s, ISO 320" }
        },
        {
          url: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "A festa sob as estrelas",
          technical: { camera: "Canon EOS R6 Mark II", lens: "RF 16-35mm f/2.8L", settings: "f/2.8, 1/60s, ISO 1600" }
        },
        {
          url: "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Retrato dos noivos ao pôr do sol",
          technical: { camera: "Canon EOS R5", lens: "RF 70-200mm f/2.8L", settings: "f/2.8, 1/320s, ISO 250" }
        },
        {
          url: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Momento espontâneo durante a dança",
          technical: { camera: "Canon EOS R6 Mark II", lens: "RF 24-70mm f/2.8L", settings: "f/2.8, 1/160s, ISO 800" }
        }
      ],
      
      stats: {
        photos_taken: 1247,
        photos_delivered: 156,
        editing_hours: 24,
        client_rating: 5
      },
      
      equipment: [
        "Canon EOS R5 (Principal)",
        "Canon EOS R6 Mark II (Backup)",
        "RF 24-70mm f/2.8L IS USM",
        "RF 70-200mm f/2.8L IS USM",
        "RF 85mm f/1.2L USM",
        "Profoto B10X Plus (Flash externo)"
      ],
      
      testimonial: {
        text: "Lucas capturou perfeitamente a magia do nosso dia especial. Cada foto conta uma história e desperta emoções que nos fazem reviver aqueles momentos únicos. Profissional excepcional!",
        author: "Marina & João",
        rating: 5
      }
    },
    
    "2": {
      title: "Ensaio Corporativo TechCorp - Sede São Paulo",
      category: "Corporativo",
      location: "Edifício Corporativo, Vila Olímpia - SP",
      date: "2025-01-12",
      duration: "6 horas",
      coverImage: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Ensaio corporativo para renovação da identidade visual da TechCorp, focando na modernidade e inovação da empresa de tecnologia.",
      story: `A TechCorp me procurou para renovar completamente seu banco de imagens corporativas. O desafio era mostrar a empresa como inovadora, mas também humana e acessível.

Passamos um dia inteiro fotografando desde os espaços de trabalho colaborativo até reuniões estratégicas. O foco foi capturar a dinâmica real da empresa, mostrando profissionais em ação, mas de forma natural e espontânea.

Utilizamos iluminação profissional para criar um visual moderno e clean, mas que mantivesse a autenticidade do ambiente de trabalho. As fotos serão usadas no site, materiais de marketing e redes sociais da empresa.`,
      
      gallery: [
        {
          url: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Reunião estratégica da diretoria",
          technical: { camera: "Canon EOS R5", lens: "RF 24-70mm f/2.8L", settings: "f/4.0, 1/125s, ISO 400" }
        },
        {
          url: "https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Espaço de trabalho colaborativo",
          technical: { camera: "Canon EOS R5", lens: "RF 16-35mm f/2.8L", settings: "f/5.6, 1/100s, ISO 320" }
        },
        {
          url: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Retrato executivo do CEO",
          technical: { camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "f/2.8, 1/200s, ISO 200" }
        }
      ],
      
      stats: {
        photos_taken: 892,
        photos_delivered: 124,
        editing_hours: 18,
        client_rating: 5
      },
      
      equipment: [
        "Canon EOS R5",
        "RF 24-70mm f/2.8L IS USM",
        "RF 16-35mm f/2.8L IS USM",
        "RF 85mm f/1.2L USM",
        "Profoto B10X Plus",
        "Softboxes e refletores"
      ],
      
      testimonial: {
        text: "O trabalho do Lucas transformou completamente nossa comunicação visual. As fotos transmitiram exatamente a imagem que queríamos: inovação com humanidade.",
        author: "Carlos Mendes, CEO TechCorp",
        rating: 5
      }
    },
    
    "3": {
      title: "Retrato Artístico Ana Clara - Estúdio",
      category: "Retratos",
      location: "Estúdio Lucas Fotografia, São Paulo - SP",
      date: "2025-01-10",
      duration: "3 horas",
      coverImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "Ensaio de retrato artístico para book profissional, explorando diferentes estilos e conceitos fotográficos.",
      story: `Ana Clara é uma atriz em início de carreira que precisava de um book profissional marcante. Desenvolvemos juntos um conceito que mostrasse sua versatilidade e personalidade única.

O ensaio foi dividido em três looks diferentes: um mais clássico e elegante, outro contemporâneo e urbano, e um terceiro mais artístico e conceitual. Cada look foi pensado para mostrar uma faceta diferente de sua personalidade.

Utilizamos diferentes esquemas de iluminação, desde luz natural até setups mais elaborados com múltiplas fontes de luz, criando atmosferas distintas para cada conceito.`,
      
      gallery: [
        {
          url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Retrato clássico em preto e branco",
          technical: { camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "f/1.8, 1/200s, ISO 100" }
        },
        {
          url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Look contemporâneo com luz natural",
          technical: { camera: "Canon EOS R5", lens: "RF 50mm f/1.2L", settings: "f/2.0, 1/160s, ISO 200" }
        },
        {
          url: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
          caption: "Conceito artístico com iluminação dramática",
          technical: { camera: "Canon EOS R5", lens: "RF 85mm f/1.2L", settings: "f/2.8, 1/125s, ISO 400" }
        }
      ],
      
      stats: {
        photos_taken: 324,
        photos_delivered: 45,
        editing_hours: 12,
        client_rating: 5
      },
      
      equipment: [
        "Canon EOS R5",
        "RF 85mm f/1.2L USM",
        "RF 50mm f/1.2L USM",
        "Profoto D2 1000 (Kit estúdio)",
        "Softboxes octogonais",
        "Beauty dish e refletores"
      ],
      
      testimonial: {
        text: "Lucas conseguiu capturar exatamente quem eu sou através das lentes. Cada foto do meu book conta uma história diferente, mas todas são autenticamente minhas.",
        author: "Ana Clara, Atriz",
        rating: 5
      }
    }
  };

  const currentProject = portfolioProjects[id as keyof typeof portfolioProjects];

  if (!currentProject) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24" style={{ backgroundColor: '#EBF1FC' }}>
        <div className="neu-card p-12 text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Projeto não encontrado</h1>
          <p className="text-gray-600 mb-8">O projeto que você está procurando não existe.</p>
          <Link to="/" className="neu-button px-6 py-3 font-medium text-gray-700 inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = Object.entries(portfolioProjects)
    .filter(([key]) => key !== id)
    .slice(0, 2)
    .map(([key, project]) => ({ id: key, ...project }));

  // Dados de exemplo para o gráfico do projeto
  const projectAnalyticsData = {
    labels: ['Pré-produção', 'Cerimônia', 'Festa', 'Pós-produção', 'Entrega'],
    datasets: [
      {
        label: 'Fotos por Fase',
        data: [45, 234, 567, 289, 156],
        borderColor: 'rgba(99, 102, 241, 0.8)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Tempo Gasto (horas)',
        data: [2, 4, 6, 12, 2],
        borderColor: 'rgba(34, 197, 94, 0.8)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24" style={{ backgroundColor: '#EBF1FC' }}>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          to="/"
          className="neu-button px-6 py-3 font-medium text-gray-700 inline-flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Portfólio</span>
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="neu-card overflow-hidden">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={currentProject.coverImage}
              alt={currentProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="neu-button px-4 py-2 mb-4 bg-white/20 backdrop-blur-sm border border-white/30">
                <span className="text-white font-medium">{currentProject.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {currentProject.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(currentProject.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{currentProject.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{currentProject.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Info & Actions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="neu-card p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                {currentProject.description}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neu-button p-3"
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neu-button p-3"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neu-button px-6 py-3 font-medium text-gray-700 inline-flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Portfólio PDF</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="neu-card p-6 text-center">
            <Camera className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-700">{currentProject.stats.photos_taken}</div>
            <div className="text-gray-600 text-sm">Fotos Capturadas</div>
          </div>
          <div className="neu-card p-6 text-center">
            <Eye className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-700">{currentProject.stats.photos_delivered}</div>
            <div className="text-gray-600 text-sm">Fotos Entregues</div>
          </div>
          <div className="neu-card p-6 text-center">
            <Timer className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-700">{currentProject.stats.editing_hours}h</div>
            <div className="text-gray-600 text-sm">Edição</div>
          </div>
          <div className="neu-card p-6 text-center">
            <Heart className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-700">{currentProject.stats.client_rating}/5</div>
            <div className="text-gray-600 text-sm">Avaliação</div>
          </div>
        </div>
      </motion.section>

      {/* Project Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="neu-card p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">A História do Projeto</h2>
          <div className="prose prose-lg text-gray-600 leading-relaxed">
            {currentProject.story.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Galeria de Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(currentProject.gallery) && currentProject.gallery.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="neu-card overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Ver detalhes</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-700 mb-2">{photo.caption}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Camera className="w-3 h-3" />
                    <span>{photo.technical.camera}</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {photo.technical.lens} • {photo.technical.settings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Equipment Used */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <div className="neu-card p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Equipamentos Utilizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.isArray(currentProject.equipment) && currentProject.equipment.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Aperture className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Client Testimonial */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-12"
      >
        <div className="neu-card p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Depoimento do Cliente</h2>
          <blockquote className="text-xl text-gray-600 italic mb-6 max-w-4xl mx-auto leading-relaxed">
            "{currentProject.testimonial.text}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <div className="font-semibold text-gray-700">{currentProject.testimonial.author}</div>
              <div className="flex justify-center mt-2">
                {Array.from({ length: currentProject.testimonial.rating }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Analytics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-12"
      >
        <div className="neu-card p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Estatísticas do Projeto</h2>
          <div className="h-80">
            <Chart 
              type="line"
              data={projectAnalyticsData}
              title="Análise do Fluxo de Trabalho"
              description="Distribuição de fotos e tempo gasto por fase do projeto"
            />
          </div>
        </div>
      </motion.section>

      {/* Related Projects */}
      {Array.isArray(relatedProjects) && relatedProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Outros Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="neu-card overflow-hidden"
              >
                <Link to={`/post/${project.id}`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="neu-button px-3 py-1 text-sm font-medium text-gray-600 mb-3 inline-block">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="neu-button px-4 py-2 text-sm font-medium text-gray-700 inline-flex items-center space-x-1">
                        <span>Ver Projeto</span>
                        <ArrowLeft className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
};

export default BlogPost;

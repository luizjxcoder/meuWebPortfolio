
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {ArrowLeft, Calendar, MapPin, Eye, Heart, Camera, X, ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = {
    '1': {
      id: 1,
      title: "E-commerce TechStore",
      category: "ecommerce",
      categoryName: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-01-15",
      location: "São Paulo, SP",
      description: "Plataforma completa de e-commerce com design responsivo e UX otimizada para conversão.",
      fullDescription: "Este projeto de e-commerce foi desenvolvido com foco na experiência do usuário e performance. Implementamos um sistema completo de carrinho de compras, integração com gateways de pagamento, painel administrativo e sistema de avaliações. A plataforma utiliza tecnologias modernas como React, Node.js e MongoDB, garantindo escalabilidade e segurança. O design responsivo adapta-se perfeitamente a todos os dispositivos, proporcionando uma experiência de compra fluida e intuitiva.",
      views: 1240,
      likes: 89,
      projectUrl: "https://techstore-ecommerce.com",
      gallery: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      details: {
        duration: "3 meses",
        photos: "Frontend + Backend",
        equipment: "React, Node.js, MongoDB",
        style: "E-commerce Responsivo"
      }
    },
    '2': {
      id: 2,
      title: "Dashboard Analytics Pro",
      category: "webapp",
      categoryName: "Web App",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-01-12",
      location: "Rio de Janeiro, RJ",
      description: "Interface moderna para dashboard de analytics com visualização de dados em tempo real.",
      fullDescription: "Uma aplicação web sofisticada para análise de dados empresariais com gráficos interativos, relatórios em tempo real e integração com múltiplas fontes de dados. O projeto inclui autenticação de usuários, diferentes níveis de acesso, exportação de relatórios e sistema de notificações. Utilizamos D3.js para visualizações customizadas e implementamos um backend robusto para processamento de grandes volumes de dados, oferecendo insights valiosos para tomada de decisões estratégicas.",
      views: 856,
      likes: 67,
      projectUrl: "https://dataviz-pro.com",
      gallery: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      details: {
        duration: "4 meses",
        photos: "Full Stack",
        equipment: "React, D3.js, Python, PostgreSQL",
        style: "Analytics Dashboard"
      }
    },
    '3': {
      id: 3,
      title: "Portal Corporativo TechCorp",
      category: "corporate",
      categoryName: "Corporativo",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      date: "2025-01-10",
      location: "Belo Horizonte, MG",
      description: "Website institucional com design system completo e experiência de usuário premium.",
      fullDescription: "Desenvolvemos um portal corporativo completo para a TechCorp, incluindo design responsivo, sistema de gerenciamento de conteúdo personalizado, área restrita para funcionários e integração com sistemas internos. O projeto contemplou a criação de uma identidade visual digital consistente, otimização para motores de busca, sistema de newsletter e módulos de recursos humanos. A arquitetura foi pensada para escalabilidade e facilidade de manutenção, proporcionando uma presença digital profissional e moderna.",
      views: 743,
      likes: 92,
      projectUrl: "https://techcorp-portal.com",
      gallery: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ],
      details: {
        duration: "2 meses",
        photos: "Frontend + CMS",
        equipment: "React, Strapi, Node.js",
        style: "Website Corporativo"
      }
    }
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EBF1FC]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-700">
            Projeto não encontrado
          </h1>
          <Link 
            to="/" 
            className="neu-button px-6 py-3 text-gray-700"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.image, ...project.gallery];

  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  const scrollToContactForm = () => {
    // Redirecionar para a página inicial com foco no formulário
    window.location.href = '/#contact-form';
  };

  return (
    <div className="min-h-screen bg-[#EBF1FC]">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4 mb-8"
        >
          <Link
            to="/"
            className="neu-button p-3 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <span className="neu-button px-3 py-1 text-sm font-medium mb-2 inline-block text-gray-600">
              {project.categoryName}
            </span>
            <h1 className="text-4xl font-bold text-gray-700">
              {project.title}
            </h1>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image */}
            <div 
              className="neu-card overflow-hidden mb-6 cursor-pointer bg-[#EBF1FC]"
              onClick={() => openImageModal(project.image, 0)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="neu-card overflow-hidden cursor-pointer bg-[#EBF1FC]"
                  onClick={() => openImageModal(image, index + 1)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Project Info */}
            <div className="neu-card p-6 bg-[#EBF1FC]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(project.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {project.location}
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Eye className="w-4 h-4 mr-2" />
                  {project.views.toLocaleString()} visualizações
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="w-4 h-4 mr-2" />
                  {project.likes} likes
                </div>
              </div>

              <p className="leading-relaxed text-gray-700">
                {project.fullDescription}
              </p>
            </div>

            {/* Project Details */}
            <div className="neu-card p-6 bg-[#EBF1FC]">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                Detalhes do Projeto
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duração:</span>
                  <span className="font-semibold text-gray-700">
                    {project.details.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-semibold text-gray-700">
                    {project.details.photos}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tecnologias:</span>
                  <span className="font-semibold text-gray-700">
                    {project.details.equipment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-semibold text-gray-700">
                    {project.details.style}
                  </span>
                </div>
              </div>
            </div>

            {/* Ver Projeto Online Button */}
            <motion.a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neu-button w-full py-4 font-semibold flex items-center justify-center space-x-2 text-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Ver Projeto Online</span>
            </motion.a>

            {/* Action Buttons */}
            <div className="space-y-3">
              <motion.button
                onClick={scrollToContactForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neu-button w-full py-4 font-semibold flex items-center justify-center space-x-2 text-gray-700"
              >
                <Camera className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-700">
            Projetos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(projectsData)
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <motion.div
                  key={relatedProject.id}
                  whileHover={{ scale: 1.02 }}
                  className="neu-card overflow-hidden group bg-[#EBF1FC]"
                >
                  <Link to={`/post/${relatedProject.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-2 text-gray-700">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 neu-button p-3 text-gray-700 bg-white bg-opacity-90"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              {allImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 neu-button p-3 text-gray-700 bg-white bg-opacity-90"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 neu-button p-3 text-gray-700 bg-white bg-opacity-90"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Image */}
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 neu-button px-4 py-2 text-gray-700 bg-white bg-opacity-90">
                  {currentImageIndex + 1} de {allImages.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogPost;

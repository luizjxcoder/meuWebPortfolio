
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircleDashed as MessageCircle, Mail, Instagram, Github, LayoutDashboard } from 'lucide-react';

const Header: React.FC = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const location = useLocation();
     const navigate = useNavigate();

     const navItems = [
          { name: 'Início', path: '/' },
          { name: 'Portfólio', path: '/portfolio' },
          { name: 'Sobre', path: '/about' },
          { name: 'Analytics', path: '/analytics' }
     ];

     const isActive = (path: string) => location.pathname === path;

     const handleWhatsAppClick = () => {
          window.open('https://wa.me/5512991705830?text=Olá! Gostaria de conversar sobre um projeto.', '_blank');
     };

     const handleEmailClick = () => {
          window.open('mailto:jxcoder.dev@hotmail.com?subject=Contato via Site', '_blank');
     };

     const handleInstagramClick = () => {
          window.open('https://instagram.com/jxcoder', '_blank');
     };

     const handleGitHubClick = () => {
          window.open('https://github.com/luizalbertosilva', '_blank');
     };

     const handleBentoClick = () => {
          window.open('https://bento.me/jxcoder-dev', '_blank');
     };

     const handleLogoClick = (e: React.MouseEvent) => {
          e.preventDefault();
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
     };

     return (
          <motion.header
               initial={{ y: -100 }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5 }}
               className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
               style={{ backgroundColor: 'rgba(235, 241, 252, 0.9)' }}
          >
               <div className="max-w-7xl mx-auto px-6 py-2">
                    <div className="flex items-center justify-between">

                         {/* Logo */}
                         <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2">
                                   <div className="neu-card p-2">
                                        <img
                                             src="https://static.lumi.new/2e/2e59dbf1291221307100a119eb4d3320.png"
                                             alt="Luiz Alberto Silva Logo"
                                             className="w-8 h-8 object-contain"
                                        />
                                   </div>
                                   <div>
                                        <h1 className="text-lg font-bold text-gray-700">Luiz Alberto Silva</h1>
                                        <p className="text-xs text-gray-600">JXCODER - WEB STUDIO</p>
                                   </div>
                              </Link>
                         </motion.div>

                         {/* Desktop Navigation */}
                         <nav className="hidden md:flex items-center space-x-6">
                              {navItems.map((item) => (
                                   <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                   >
                                        <Link
                                             to={item.path}
                                             className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive(item.path)
                                                  ? 'bg-gray-700 text-white shadow-md'
                                                  : 'neu-button text-gray-700 hover:text-gray-900'
                                                  }`}
                                        >
                                             {item.name}
                                        </Link>
                                   </motion.div>
                              ))}
                         </nav>

                         {/* Social Buttons + Mobile Menu */}
                         <div className="flex items-center space-x-3">
                              {/* Social Media Buttons */}
                              <div className="hidden md:flex items-center space-x-2">
                                   {/* WhatsApp Button */}
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleWhatsAppClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Contato via WhatsApp"
                                   >
                                        <MessageCircle className="w-4 h-4" />
                                   </motion.button>

                                   {/* Email Button */}
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleEmailClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Contato via Email"
                                   >
                                        <Mail className="w-4 h-4" />
                                   </motion.button>

                                   {/* Instagram Button */}
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleInstagramClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Instagram"
                                   >
                                        <Instagram className="w-4 h-4" />
                                   </motion.button>

                                   {/* GitHub Button */}
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleGitHubClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="GitHub"
                                   >
                                        <Github className="w-4 h-4" />
                                   </motion.button>

                                   {/* Bento.me Button */}
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleBentoClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Bento.me"
                                   >
                                        <LayoutDashboard className="w-4 h-4" />
                                   </motion.button>
                              </div>

                              {/* Mobile Menu Button */}
                              <div className="md:hidden">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="neu-card p-2"
                                   >
                                        {isMenuOpen ? (
                                             <X className="w-5 h-5 text-gray-700" />
                                        ) : (
                                             <Menu className="w-5 h-5 text-gray-700" />
                                        )}
                                   </motion.button>
                              </div>
                         </div>
                    </div>

                    {/* Mobile Navigation */}
                    <motion.nav
                         initial={false}
                         animate={{
                              height: isMenuOpen ? 'auto' : 0,
                              opacity: isMenuOpen ? 1 : 0
                         }}
                         transition={{ duration: 0.3 }}
                         className="md:hidden overflow-hidden"
                    >
                         <div className="py-3 space-y-2">
                              {navItems.map((item) => (
                                   <motion.div
                                        key={item.name}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                   >
                                        <Link
                                             to={item.path}
                                             onClick={() => setIsMenuOpen(false)}
                                             className={`block px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${isActive(item.path)
                                                  ? 'bg-gray-700 text-white shadow-md'
                                                  : 'neu-button text-gray-700 hover:text-gray-900 active:border-2 active:border-transparent'
                                                  }`}
                                             style={!isActive(item.path) ? {
                                                  background: 'linear-gradient(#EBF1FC, #EBF1FC) padding-box, linear-gradient(to right, #09B6D4, #262828) border-box'
                                             } : undefined}
                                        >
                                             {item.name}
                                        </Link>
                                   </motion.div>
                              ))}

                              {/* Mobile Social Buttons - Only Icons */}
                              <div className="flex items-center justify-center space-x-3 pt-3">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleWhatsAppClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Contato via WhatsApp"
                                   >
                                        <MessageCircle className="w-4 h-4" />
                                   </motion.button>

                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleEmailClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Contato via Email"
                                   >
                                        <Mail className="w-4 h-4" />
                                   </motion.button>

                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleInstagramClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Instagram"
                                   >
                                        <Instagram className="w-4 h-4" />
                                   </motion.button>

                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleGitHubClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="GitHub"
                                   >
                                        <Github className="w-4 h-4" />
                                   </motion.button>

                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleBentoClick}
                                        className="neu-card p-3 transition-all duration-300 text-gray-600 hover:text-gray-700"
                                        style={{
                                             backgroundColor: '#EBF1FC'
                                        }}
                                        title="Bento.me"
                                   >
                                        <LayoutDashboard className="w-4 h-4" />
                                   </motion.button>
                              </div>
                         </div>
                    </motion.nav>
               </div>
          </motion.header>
     );
};

export default Header;

import React from 'react';
import { motion } from 'framer-motion';
import {Github, Linkedin, Instagram, Twitter, Mail, Phone} from 'lucide-react';

const Footer: React.FC = () => {

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jxcoder",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/luizalberto",
      label: "LinkedIn", 
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/jxcoder",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/jxcoder",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:contato@jxcoder.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer 
      className="py-16 px-6"
      style={{
        backgroundColor: '#EBF1FC'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <img
              src="https://static.lumi.new/2e/2e59dbf1291221307100a119eb4d3320.png"
              alt="JXCODER Logo"
              className="h-20 w-auto mx-auto filter drop-shadow-lg"
            />
          </motion.div>

          {/* Social Media Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`neu-card p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg text-gray-600 ${social.color}`}
                style={{
                  backgroundColor: '#EBF1FC'
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mb-8 space-y-2"
          >
            <div className="flex justify-center items-center space-x-6 text-gray-600">
              <a
                href="tel:+5511999999999"
                className="flex items-center space-x-2 transition-colors duration-300 hover:text-gray-800"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@jxcoder.com"
                className="flex items-center space-x-2 transition-colors duration-300 hover:text-gray-800"
              >
                <Mail className="w-4 h-4" />
                <span>contato@jxcoder.com</span>
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="border-t pt-8 border-gray-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-700">
              Luiz Alberto Silva
            </h3>
            <p className="text-lg font-medium text-gray-600">
              ® JXCODER - WEB STUDIO
            </p>
            <p className="text-sm mt-4 text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados. 
              Desenvolvido com ❤️ para criar experiências digitais únicas.
            </p>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

    
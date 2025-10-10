
import React, { useState } from 'react';
import {Mail, Phone, MapPin, Send, CheckCircle} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@exemplo.com',
      href: 'mailto:contato@exemplo.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#EBF1FC' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vamos conversar sobre seu próximo projeto. Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Estou sempre disponível para discutir novos projetos, oportunidades criativas ou parcerias. 
                Não hesite em entrar em contato!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 group"
                  style={{
                    background: '#EBF1FC',
                    boxShadow: '8px 8px 16px #c5d1e8, -8px -8px 16px #ffffff'
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {info.label}
                    </h3>
                    <p className="text-gray-600">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-6 py-3 rounded-xl text-gray-700 font-medium transition-all duration-300 hover:scale-105 hover:text-blue-600"
                    style={{
                      background: '#EBF1FC',
                      boxShadow: '4px 4px 8px #c5d1e8, -4px -4px 8px #ffffff'
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: '#EBF1FC',
                boxShadow: 'inset 8px 8px 16px #c5d1e8, inset -8px -8px 16px #ffffff'
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Retornarei em breve!
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Envie uma Mensagem
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 transition-all duration-300 focus:scale-105"
                          style={{
                            background: '#EBF1FC',
                            boxShadow: 'inset 4px 4px 8px #c5d1e8, inset -4px -4px 8px #ffffff'
                          }}
                          placeholder="Seu nome"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 transition-all duration-300 focus:scale-105"
                          style={{
                            background: '#EBF1FC',
                            boxShadow: 'inset 4px 4px 8px #c5d1e8, inset -4px -4px 8px #ffffff'
                          }}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 transition-all duration-300 focus:scale-105"
                        style={{
                          background: '#EBF1FC',
                          boxShadow: 'inset 4px 4px 8px #c5d1e8, inset -4px -4px 8px #ffffff'
                        }}
                        placeholder="Assunto da mensagem"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 resize-none transition-all duration-300 focus:scale-105"
                        style={{
                          background: '#EBF1FC',
                          boxShadow: 'inset 4px 4px 8px #c5d1e8, inset -4px -4px 8px #ffffff'
                        }}
                        placeholder="Digite sua mensagem aqui..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 px-6 bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      style={{
                        boxShadow: '4px 4px 8px #c5d1e8, -4px -4px 8px #ffffff'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div
            className="inline-block px-8 py-6 rounded-2xl"
            style={{
              background: '#EBF1FC',
              boxShadow: '8px 8px 16px #c5d1e8, -8px -8px 16px #ffffff'
            }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Tempo de Resposta
            </h3>
            <p className="text-gray-600">
              Geralmente respondo em até 24 horas durante dias úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

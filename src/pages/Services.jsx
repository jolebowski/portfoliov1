import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import AnimatedSection from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import { EMAILJS_DEVIS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from '../config/config';
import { serviceSchema, faqSchema } from '../utils/structuredData';

Modal.setAppElement('#root');

function Services() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('no-scroll'); 
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll'); 
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
  
    const formData = new FormData(form.current);
    const userName = formData.get('user_name');
    const userEmail = formData.get('user_email');
    const userPhone = formData.get('user_phone');
    const serviceType = formData.get('service');
    const projectDetails = formData.get('project_details');
  
    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      user_phone: userPhone,
      service: serviceType,
      message: projectDetails,
    };
  
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_DEVIS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
        closeModal();
  
        setTimeout(() => {
          setStatus('');
        }, 3000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const services = [
    {
      title: 'Offre Starter',
      price: '750 €',
      description: 'Idéal pour les petites entreprises souhaitant une présence en ligne.',
      features: [
        'Site vitrine de 3 pages',
        'Design personnalisé',
        'Livraison en 7 jours',
        'Support technique inclus'
      ],
      icon: '🌐',
      popular: false,
      gradient: 'from-blue-400 to-cyan-400',
      shadowColor: 'shadow-blue-500/50'
    },
    {
      title: 'Offre Pro',
      price: '1500 €',
      description: 'Pour les entreprises qui ont besoin d\'un site plus complet.',
      features: [
        'Site vitrine complet (jusqu\'à 6 pages)',
        'Optimisation SEO basique',
        'Formation de 2 heures',
        'Hébergement premium offert',
        'Analytics intégrés'
      ],
      icon: '💼',
      popular: true,
      gradient: 'from-purple-400 to-pink-400',
      shadowColor: 'shadow-purple-500/50'
    },
    {
      title: 'Abonnement',
      price: '200 €/mois',
      description: 'Pour un suivi régulier et des mises à jour constantes.',
      features: [
        'Maintenance complète',
        'Mises à jour régulières',
        '2h de modifications par mois',
        'Sauvegardes automatiques',
        'Support prioritaire',
        'Monitoring avancé'
      ],
      icon: '🔧',
      popular: false,
      gradient: 'from-green-400 to-emerald-400',
      shadowColor: 'shadow-green-500/50'
    },
    {
      title: 'Développement Mobile',
      price: '3000 €',
      description: 'Créez une application mobile sur mesure pour votre entreprise.',
      features: [
        'Application mobile personnalisée',
        'Compatible iOS et Android',
        'Intégration d\'API et fonctionnalités avancées',
        'Design moderne et intuitif',
        'Tests et déploiement inclus'
      ],
      icon: '📱',
      popular: false,
      gradient: 'from-orange-400 to-red-400',
      shadowColor: 'shadow-orange-500/50'
    },
  ]

  return (
    <>
      <SEO 
        title="Services"
        description="Services de développement web et mobile : sites vitrines, applications mobiles, e-commerce, refonte de sites et solutions sur mesure."
        keywords="services développement web, création site internet, application mobile, e-commerce, refonte site web"
        url="/services"
        structuredData={[serviceSchema, faqSchema]}
      />
      
      {/* Hero Section with Gradient Background */}
      <motion.section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/20 to-purple-400/20 animate-pulse" />
        
        {/* Floating Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mes Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des solutions digitales sur mesure pour propulser votre entreprise vers le succès
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MagneticButton
              onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Découvrir nos offres
            </MagneticButton>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid with 3D Cards */}
      <AnimatedSection>
        <div id="services-grid" className="max-w-7xl mx-auto px-4 py-20">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-dark-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos Formules
          </motion.h2>
          <motion.p 
            className="text-center text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choisissez la formule adaptée à vos besoins et votre budget
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* 3D Card Effect */}
                <motion.div
                  className={`relative h-full bg-gradient-to-br ${service.gradient} p-[2px] rounded-2xl ${service.shadowColor} shadow-lg`}
                  animate={{
                    rotateY: hoveredCard === index ? 5 : 0,
                    rotateX: hoveredCard === index ? -5 : 0,
                    scale: hoveredCard === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-full bg-gray-900 rounded-2xl p-6 backdrop-blur-xl">
                    {/* Popular Badge */}
                    {service.popular && (
                      <motion.div 
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Populaire
                      </motion.div>
                    )}
                    
                    {/* Card Content */}
                    <div className="text-center mb-6">
                      <motion.div 
                        className="text-5xl mb-4"
                        animate={{ 
                          scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <MagneticButton
                      onClick={openModal}
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      Demander un devis
                    </MagneticButton>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 flex items-center justify-center z-[60] p-4 overflow-y-auto"
            overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] overflow-y-auto"
            closeTimeoutMS={300}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700 my-8 max-h-[90vh] overflow-y-auto"
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Demander un devis
              </motion.h2>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                {/* Form Fields with Animations */}
                {[
                  { name: 'user_name', label: 'Votre nom', type: 'text' },
                  { name: 'user_email', label: 'Votre email', type: 'email' },
                  { name: 'user_phone', label: 'Votre numéro de téléphone', type: 'tel', pattern: '[0-9]*', maxLength: '10' }
                ].map((field, idx) => (
                  <motion.div
                    key={field.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <label className="block text-gray-300 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                      required
                      {...(field.pattern && { pattern: field.pattern })}
                      {...(field.maxLength && { maxLength: field.maxLength })}
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-gray-300 mb-2">Type de service</label>
                  <select
                    name="service"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-300 mb-2">Détails de votre projet</label>
                  <textarea
                    name="project_details"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    rows="4"
                    required
                  ></textarea>
                </motion.div>
                
                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-center"
                    >
                      Erreur lors de l'envoi. Veuillez réessayer.
                    </motion.p>
                  )}
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-400 text-center"
                    >
                      Message envoyé avec succès !
                    </motion.p>
                  )}
                </AnimatePresence>
                
                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  <MagneticButton
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                  </MagneticButton>
                  <MagneticButton
                    type="button"
                    onClick={closeModal}
                    className="flex-1 bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Annuler
                  </MagneticButton>
                </motion.div>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <AnimatedSection>
        <motion.section 
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
          
          {/* CTA Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Prêt à démarrer votre projet ?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contactez-moi dès aujourd'hui et donnons vie à vos idées ensemble
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            >
              <MagneticButton
                onClick={openModal}
                className="bg-white text-purple-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
              </MagneticButton>
            </motion.div>
          </div>
        </motion.section>
      </AnimatedSection>
    </>
  )
}

export default Services

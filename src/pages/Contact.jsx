import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaClock, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/config';

function Contact() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Téléphone',
      value: '+33 6 46 70 07 15',
      link: 'tel:+33646700715',
      color: 'from-primary-400 to-primary-600',
      delay: 0.1
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'jordan.moreira@epitech.eu',
      link: 'mailto:jordan.moreira@epitech.eu',
      color: 'from-accent-mint to-accent-mint/80',
      delay: 0.2
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localisation',
      value: 'Le Mans, France',
      link: '#',
      color: 'from-accent-coral to-accent-coral/80',
      delay: 0.3
    },
    {
      icon: FaClock,
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      link: '#',
      color: 'from-accent-purple to-accent-blue',
      delay: 0.4
    }
  ]

  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        form.current.reset()

        setTimeout(() => {
          setStatus('')
        }, 3000)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <>
      <SEO 
        title="Contact"
        description="Contactez-moi pour discuter de votre projet web ou mobile. Basé au Mans, disponible pour des projets partout en France."
        keywords="contact développeur web, contact développeur mobile, devis site web, Le Mans"
        url="/contact"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-mesh-bg opacity-20" />
          <motion.div
            className="absolute rounded-full top-1/4 -left-20 w-96 h-96 bg-primary-400/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full bottom-1/4 -right-20 w-96 h-96 bg-accent-mint/10 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <AnimatedSection animation="fadeUp" className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl font-display">
              <span className="text-gradient">Contactez-moi</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark-600 dark:text-dark-300">
              Transformons vos idées en projets concrets. Je suis à votre écoute pour discuter de vos besoins.
            </p>
          </AnimatedSection>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold md:text-3xl font-display text-dark-900 dark:text-white">
                    Parlons de votre projet !
                  </h2>
                  <p className="mb-8 text-lg text-dark-600 dark:text-dark-300">
                    Je suis toujours ravi de découvrir de nouveaux projets. N'hésitez pas à me contacter 
                    pour discuter de vos idées et voir comment je peux vous aider.
                  </p>
                </div>
                
                {/* Contact Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: info.delay }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="h-full gradient-border">
                        <div className="h-full p-6 bg-white dark:bg-dark-900">
                          <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="mb-1 font-semibold text-dark-900 dark:text-white">
                            {info.title}
                          </h3>
                          <p className="text-sm text-dark-600 dark:text-dark-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="mb-4 text-lg font-semibold text-dark-900 dark:text-white">
                    Suivez-moi
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/iamjomoreira/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 text-white transition-transform bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl hover:scale-110"
                      whileHover={{ rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/jolebowski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 text-white transition-transform bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl hover:scale-110"
                      whileHover={{ rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact Form */}
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <motion.div
                className="gradient-border"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="p-8 bg-white dark:bg-dark-900">
                  <h3 className="mb-6 text-2xl font-bold font-display text-dark-900 dark:text-white">
                    Envoyez-moi un message
                  </h3>
                  
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block mb-2 text-sm font-medium text-dark-700 dark:text-dark-300">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-dark-600 dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block mb-2 text-sm font-medium text-dark-700 dark:text-dark-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 transition-all duration-300 bg-white border border-gray-300 rounded-xl dark:border-dark-600 dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="block mb-2 text-sm font-medium text-dark-700 dark:text-dark-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="6"
                        required
                        className="w-full px-4 py-3 transition-all duration-300 bg-white border border-gray-300 resize-none rounded-xl dark:border-dark-600 dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Décrivez votre projet..."
                      />
                    </motion.div>
                    
                    <AnimatePresence mode="wait">
                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-center text-red-500"
                        >
                          Erreur lors de l'envoi du message. Veuillez réessayer.
                        </motion.p>
                      )}
                      
                      {status === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-center"
                        >
                          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="font-medium text-green-600">Votre message a été envoyé avec succès !</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <MagneticButton
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? (
                          <span className="flex items-center">
                            <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Envoyer le message
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                        )}
                      </MagneticButton>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quels types de services proposez-vous ?',
      answer: 'Je propose des services de développement web, de développement mobile, ainsi que des solutions de maintenance et de mise à jour. Chaque service est personnalisé selon vos besoins spécifiques.',
      icon: '💻'
    },
    {
      question: 'Combien de temps faut-il pour réaliser un projet ?',
      answer: 'Le délai dépend de la complexité du projet. En général, un site vitrine peut être livré en 7 jours, tandis qu\'une application mobile peut prendre plusieurs semaines. Je fournis toujours un calendrier détaillé avant de commencer.',
      icon: '⏱️'
    },
    {
      question: 'Proposez-vous des services de maintenance ?',
      answer: 'Oui, j\'offre des services de maintenance mensuels pour assurer le bon fonctionnement de votre site ou application. Cela inclut les mises à jour de sécurité, les sauvegardes régulières et le support technique.',
      icon: '🔧'
    },
    {
      question: 'Comment puis-je vous contacter pour discuter de mon projet ?',
      answer: 'Vous pouvez me contacter via le formulaire de contact sur mon site, directement par email, ou utiliser le bouton "Demander un devis" pour démarrer une conversation sur votre projet.',
      icon: '📬'
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'J\'utilise les dernières technologies web modernes incluant React, Next.js, Node.js, et diverses autres technologies selon les besoins du projet. Je m\'assure toujours d\'utiliser les outils les plus adaptés.',
      icon: '🚀'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Questions Fréquemment Posées
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 cursor-pointer overflow-hidden ${
                  openIndex === index ? 'shadow-2xl' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => toggleFAQ(index)}
              >
                <motion.div 
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <motion.span 
                      className="text-3xl"
                      animate={{ 
                        rotate: openIndex === index ? [0, -10, 10, 0] : 0,
                        scale: openIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.icon}
                    </motion.span>
                    <h3 className="text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.span 
                    className="ml-4 text-purple-400"
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown size={20} />
                  </motion.span>
                </motion.div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-gray-300 mt-4 pt-4 border-t border-gray-700"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-lg">
            Si vous avez d'autres questions, n'hésitez pas à me contacter !
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default FAQ;
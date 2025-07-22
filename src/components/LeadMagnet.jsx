import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from '../config/config';
import MagneticButton from './MagneticButton';

function LeadMagnet() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        'template_audit', // You'll need to create this template in EmailJS
        {
          user_email: email,
          website_url: website,
          language: i18n.language,
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setEmail('');
      setWebsite('');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('');
      }, 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  const content = {
    fr: {
      trigger: '🎁 Audit gratuit',
      title: 'Obtenez votre audit de performance gratuit',
      subtitle: 'Découvrez comment améliorer la vitesse et les conversions de votre site',
      emailLabel: 'Votre email',
      websiteLabel: 'URL de votre site',
      submit: 'Recevoir mon audit gratuit',
      sending: 'Envoi en cours...',
      success: 'Audit demandé ! Vous le recevrez sous 24h.',
      error: 'Erreur. Veuillez réessayer.',
    },
    en: {
      trigger: '🎁 Free audit',
      title: 'Get your free performance audit',
      subtitle: 'Discover how to improve your website speed and conversions',
      emailLabel: 'Your email',
      websiteLabel: 'Your website URL',
      submit: 'Get my free audit',
      sending: 'Sending...',
      success: 'Audit requested! You\'ll receive it within 24h.',
      error: 'Error. Please try again.',
    }
  };

  const texts = content[i18n.language] || content.fr;

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow font-semibold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="flex items-center gap-2">
          {texts.trigger}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.span>
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[80] p-4"
            >
              <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Content */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-3xl">📊</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                    {texts.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    {texts.subtitle}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      {texts.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="vous@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      {texts.websiteLabel}
                    </label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="https://votresite.com"
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center"
                    >
                      {texts.success}
                    </motion.p>
                  )}

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-center"
                    >
                      {texts.error}
                    </motion.p>
                  )}

                  <MagneticButton
                    type="submit"
                    variant="gradient"
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? texts.sending : texts.submit}
                  </MagneticButton>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default LeadMagnet;
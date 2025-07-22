import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg">{i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
      <span className="hidden sm:inline">{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
    </motion.button>
  );
}

export default LanguageSwitcher;
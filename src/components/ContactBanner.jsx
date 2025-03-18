import React, { useEffect, useState } from 'react';
import { FaPhone, FaTimes } from 'react-icons/fa';

function ContactBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const bannerState = localStorage.getItem('contactBannerClosed');
    if (bannerState === null) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem('contactBannerClosed', 'true');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:right-4 md:left-auto md:w-96 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 md:rounded-lg shadow-xl z-50 animate-fade-in-up">
      <button 
        onClick={closeBanner}
        className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
        aria-label="Fermer"
      >
        <FaTimes className="h-5 w-5" />
      </button>
      <div className="flex items-center mb-3">
        <FaPhone className="h-5 w-5 mr-2 flex-shrink-0" />
        <p className="font-semibold">Besoin d'une réponse rapide ?</p>
      </div>
      <div className="space-y-2">
        <a 
          href="tel:0646700715"
          className="block bg-white/10 hover:bg-white/20 transition-colors rounded-md px-4 py-2 text-center font-medium"
        >
          Appelez maintenant : 06 46 70 07 15
        </a>
        <p className="text-sm text-white/80 text-center">
          Disponible 7j/7 de 9h à 18h
        </p>
      </div>
    </div>
  );
}

export default ContactBanner;
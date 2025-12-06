import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../design-system/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('nav.home', 'Accueil'), path: '/' },
    { name: t('nav.projects', 'Projets'), path: '/projects' },
    { name: t('nav.skills', 'Compétences'), path: '/skills' },
    { name: t('nav.services', 'Services'), path: '/services' },
    { name: t('nav.about', 'À propos'), path: '/about' },
    { name: t('nav.contact', 'Contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ${isScrolled ? 'bg-midnight/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`} />

      <div className="container mx-auto px-6 h-full relative flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-display font-bold text-starlight tracking-tighter">
          Jordan <span className="text-electric-violet">Moreira</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `text-sm font-medium transition-colors duration-300 hover:text-white ${isActive ? 'text-white' : 'text-muted-mist'}`}
            >
              {link.name}
            </NavLink>
          ))}

          <button
            onClick={toggleLanguage}
            className="text-sm font-bold text-muted-mist hover:text-white transition-colors border border-white/10 px-3 py-1 rounded-full hover:bg-white/5"
          >
            {i18n.language?.toUpperCase() || 'FR'}
          </button>

          <Button variant="primary" className="ml-4" onClick={() => window.location.href = '/contact'}>
            Me Contacter
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-starlight p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 bg-midnight z-40 md:hidden flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-display font-bold text-starlight hover:text-electric-violet transition-colors"
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="text-xl font-bold text-muted-mist hover:text-white mt-4 border border-white/10 px-6 py-2 rounded-full"
            >
              {i18n.language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

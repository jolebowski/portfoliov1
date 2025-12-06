import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '../design-system/Button';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projects' },
  { name: 'Compétences', path: '/skills' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

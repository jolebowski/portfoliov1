import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') }
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg shadow-xl' 
          : 'bg-white/70 dark:bg-dark-900/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <motion.span 
              className="font-display font-bold text-2xl md:text-3xl text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              JM
            </motion.span>
            <span className="ml-3 font-medium text-dark-800 dark:text-white hidden sm:block">
              Jordan Moreira
            </span>
          </Link>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 focus:outline-none p-2"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <LanguageSwitcher />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              data-testid="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 py-3 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                          : 'text-dark-600 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

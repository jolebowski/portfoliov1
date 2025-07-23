import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import MagneticButton from '../components/MagneticButton'
import { breadcrumbSchema } from '../utils/structuredData'
import { isMobile, shouldDisableEffects } from '../utils/mobileOptimizations'

function Home() {
  const { t } = useTranslation()
  const disableHeavyEffects = shouldDisableEffects()
  const mobile = isMobile()
  
  return (
    <>
      <SEO 
        title="Accueil - Développeur Web Freelance au Mans"
        description="Développeur web freelance au Mans. Création de sites web professionnels, applications mobiles React Native, sites e-commerce. Devis gratuit et accompagnement personnalisé."
        keywords="développeur web freelance Le Mans, création site web professionnel, développeur React freelance, développement application mobile, création site vitrine, développeur fullstack France"
        structuredData={breadcrumbSchema([{ name: 'Accueil', url: '/' }])}
      />
      
      {/* Hero Section with animated gradient background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-mesh-bg opacity-40" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-bg" />
        
        {/* Floating elements - disabled on mobile for performance */}
        {!mobile && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl"
              animate={disableHeavyEffects ? {} : {
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
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent-mint/30 rounded-full blur-3xl"
              animate={disableHeavyEffects ? {} : {
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* Animated heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <span className="block text-gradient">
                  {t('home.welcome')}
                </span>
                <motion.span 
                  className="block mt-4 text-dark-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {t('home.name').split(' ').map((word, index) => 
                    word === 'Jordan' ? <span key={index} className="text-gradient">Jordan</span> : word + ' '
                  )}
                </motion.span>
                <motion.span 
                  className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-dark-700 dark:text-dark-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {t('home.title')}
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Animated description */}
            <AnimatedSection delay={0.7} className="mb-12">
              <p className="text-lg md:text-xl lg:text-2xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
                {t('home.description')}
              </p>
            </AnimatedSection>
            
            {/* Features */}
            <AnimatedSection delay={0.9} className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div 
                className="glass-effect rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white mb-2">Code Moderne</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">Technologies dernière génération</p>
              </motion.div>
              
              <motion.div 
                className="glass-effect rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-mint to-accent-mint/80 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white mb-2">100% Responsive</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">Adapté à tous les écrans</p>
              </motion.div>
              
              <motion.div 
                className="glass-effect rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-coral to-accent-coral/80 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white mb-2">Performance</h3>
                <p className="text-sm text-dark-600 dark:text-dark-400">Optimisé pour la vitesse</p>
              </motion.div>
            </AnimatedSection>
            
            {/* CTA Buttons */}
            <AnimatedSection delay={1.1} className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <Link to="/services">
                <MagneticButton variant="gradient" size="lg" className="group w-full sm:w-auto">
                  <span className="flex items-center">
                    {t('home.cta.quote')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </MagneticButton>
              </Link>
              
              <Link to="/projects">
                <MagneticButton variant="secondary" size="lg" className="group w-full sm:w-auto">
                  <span className="flex items-center">
                    {t('home.cta.projects')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </MagneticButton>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Second Section - Services Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-4">
              <span className="text-gradient">Ce que je peux faire pour vous</span>
            </h2>
            <p className="text-center text-dark-600 dark:text-dark-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Du site vitrine à l'application mobile complexe, je transforme vos idées en réalité digitale
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <motion.div 
                className="gradient-border h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center transform -rotate-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-dark-900 dark:text-white">Sites Web</h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    Sites vitrines, e-commerce, applications web complexes avec les dernières technologies
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <motion.div 
                className="gradient-border h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-accent-mint to-accent-mint/80 rounded-2xl flex items-center justify-center transform rotate-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-dark-900 dark:text-white">Apps Mobiles</h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    Applications iOS et Android natives avec React Native pour une expérience optimale
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <motion.div 
                className="gradient-border h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-accent-coral to-accent-coral/80 rounded-2xl flex items-center justify-center transform -rotate-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-dark-900 dark:text-white">Maintenance</h3>
                  <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                    Support continu, mises à jour et évolutions pour garder votre projet à jour
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home

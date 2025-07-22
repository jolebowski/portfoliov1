import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import MagneticButton from '../components/MagneticButton'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import { breadcrumbSchema } from '../utils/structuredData'

function About() {
  const skills = {
    frontend: [
      { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
      { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'React Native', level: 90, color: 'from-purple-400 to-purple-600' },
      { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600' },
      { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-800' },
    ],
    backend: [
      { name: 'Node.js', level: 92, color: 'from-green-400 to-green-600' },
      { name: 'Express', level: 90, color: 'from-gray-400 to-gray-600' },
      { name: 'MongoDB', level: 85, color: 'from-green-400 to-green-600' },
      { name: 'SQL', level: 80, color: 'from-blue-400 to-blue-600' },
    ]
  }

  const experience = [
    { year: '2023-2025', title: 'Développeur React, React Native', company: 'PMU', description: 'Développement d\'applications web complexes' },
    { year: '2021-2022', title: 'Développeur React Native', company: 'Françaises des jeux', description: 'Développement d\'applications web complexes' },
    { year: '2019-2021', title: 'Développeur', company: 'Reezocar', description: 'Apprentissage et développement de compétences' },
  ]
  return (
    <>
      <SEO 
        title="À propos - Développeur Full Stack"
        description="Développeur web et mobile avec plus de 5 ans d'expérience au Mans. Spécialisé en React, React Native, Node.js et développement d'applications mobiles performantes."
        keywords="développeur web Le Mans, développeur mobile expérimenté, React developer, Node.js expert, expérience développement, freelance fullstack"
        url="/about"
        structuredData={breadcrumbSchema([
          { name: 'Accueil', url: '/' },
          { name: 'À propos', url: '/about' }
        ])}
      />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-mesh-bg opacity-30" />
          <motion.div
            className="absolute top-0 rounded-full left-1/4 w-96 h-96 bg-primary-400/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-accent-mint/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image Section */}
            <AnimatedSection animation="fadeRight" className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-accent-purple blur-2xl opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <LazyImage
                  src="/assets/images/Photo_MJ.jpg" 
                  alt="Jordan Moreira - Développeur Web et Mobile Freelance au Mans"
                  className="relative object-cover w-64 h-64 border-4 rounded-full shadow-2xl md:w-80 md:h-80 border-white/20"
                />
                
                {/* Floating badges */}
                <motion.div
                  className="absolute px-4 py-2 text-sm font-medium text-white rounded-full shadow-lg -top-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600"
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  5+ ans d'expérience
                </motion.div>
                
                <motion.div
                  className="absolute px-4 py-2 text-sm font-medium text-white rounded-full shadow-lg -bottom-4 -left-4 bg-gradient-to-r from-accent-mint to-accent-mint/80"
                  animate={{
                    y: [5, -5, 5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  Full Stack
                </motion.div>
              </div>
            </AnimatedSection>
            
            {/* Content Section */}
            <AnimatedSection animation="fadeLeft" className="text-center lg:text-left">
              <motion.h1 
                className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gradient">À propos de moi</span>
              </motion.h1>
              
              <motion.p 
                className="mb-6 text-lg leading-relaxed md:text-xl text-dark-600 dark:text-dark-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <strong className="text-dark-900 dark:text-white">Développeur web et mobile passionné</strong>, 
                basé au Mans, je transforme vos idées en solutions digitales innovantes et performantes.
              </motion.p>
              
              <motion.p 
                className="mb-8 text-lg leading-relaxed text-dark-600 dark:text-dark-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Fort de plus de 5 ans d'expérience, je maîtrise les dernières technologies 
                pour créer des applications web et mobiles qui font la différence.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/contact">
                  <MagneticButton variant="gradient" size="lg">
                    <span className="flex items-center">
                      Travaillons ensemble
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </MagneticButton>
                </Link>
                <a href="#skills">
                  <MagneticButton variant="secondary" size="lg">
                    Voir mes compétences
                  </MagneticButton>
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-6xl px-4 mx-auto">
          <AnimatedSection animation="fadeUp" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-display">
              <span className="text-gradient">Compétences & Expertise</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark-600 dark:text-dark-300">
              Technologies modernes et best practices pour des projets performants
            </p>
          </AnimatedSection>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Frontend Skills */}
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-dark-900 dark:text-white">Frontend</h3>
                </div>
                
                {skills.frontend.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-dark-700 dark:text-dark-300">{skill.name}</span>
                      <span className="text-dark-600 dark:text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 overflow-hidden bg-gray-200 rounded-full dark:bg-dark-700">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Backend Skills */}
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gradient-to-br from-accent-mint to-accent-mint/80 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-dark-900 dark:text-white">Backend</h3>
                </div>
                
                {skills.backend.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-dark-700 dark:text-dark-300">{skill.name}</span>
                      <span className="text-dark-600 dark:text-dark-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 overflow-hidden bg-gray-200 rounded-full dark:bg-dark-700">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <AnimatedSection animation="fadeUp" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-display">
              <span className="text-gradient">Mon Parcours</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark-600 dark:text-dark-300">
              Une évolution constante vers l'excellence technique
            </p>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-primary-400 to-accent-purple opacity-30" />
            
            {experience.map((exp, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                delay={index * 0.2}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div 
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="gradient-border">
                    <div className="p-6 bg-white dark:bg-dark-900">
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {exp.year}
                      </span>
                      <h3 className="mt-2 mb-1 text-xl font-bold font-display text-dark-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="mb-2 font-medium text-dark-600 dark:text-dark-300">
                        {exp.company}
                      </p>
                      <p className="text-dark-500 dark:text-dark-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute z-10 w-6 h-6 transform -translate-x-1/2 border-4 border-white rounded-full shadow-lg left-1/2 bg-gradient-to-br from-primary-400 to-primary-600 dark:border-dark-900"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <AnimatedSection animation="scale">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-display text-dark-900 dark:text-white">
              Prêt à créer quelque chose d'incroyable ?
            </h2>
            <p className="mb-8 text-lg md:text-xl text-dark-600 dark:text-dark-300">
              Transformons vos idées en réalité digitale
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/projects">
                <MagneticButton variant="secondary" size="lg">
                  Voir mes projets
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton variant="gradient" size="lg">
                  <span className="flex items-center">
                    Commencer un projet
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </MagneticButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default About

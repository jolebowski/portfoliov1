import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import MagneticButton from '../components/MagneticButton'
import LazyImage from '../components/LazyImage'

function Projects() {
  const projects = [
    {
      title: "Escooter",
      description: "Une plateforme de vente en ligne complète avec panier et paiement",
      image: "/assets/images/escooter.png",
      technologies: ["React"],
      demoUrl: "https://e-scooter-psi.vercel.app/",
      details: "Développé en 1 semaine, j'ai géré l'intégralité du projet, de la conception à la mise en ligne.",
     // githubUrl: "https://github.com/username/ecommerce"
    },
    {
      title: "Quit Betting",
      description: "Application pour arrêter de parier",
      image: "/assets/images/addiction_consequences_3.png",
      technologies: ["React Native"],
      demoUrl: "#",
      details: "Cette application est actuellement en développement pour aider les utilisateurs à surmonter leurs habitudes de pari.",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Maison Coiffure",
      description: "Application pour la gestion d'un salon de coiffure, permettant aux clients de réserver des rendez-vous en ligne.",
      image: "/assets/images/maisoncoiffure.png",
      technologies: ["React"],
      demoUrl: "https://maison-coiffure.vercel.app/",
      details: "Application développée avec React",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Studio Photo",
      description: "Portfolio d'un studio photo professionnel, mettant en avant des réalisations variées.",
      image: "/assets/images/studiophoto.png",
      technologies: ["React"],
      demoUrl: "https://studio-photo-snowy.vercel.app/",
      details: "Ce portfolio présente les travaux du studio, incluant des séances photo, des événements et des projets créatifs.",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Simulateur de Devis",
      description: "Un simulateur interactif pour générer des devis personnalisés.",
      image: "/assets/images/simulator_devis.png",
      technologies: ["React"],
      demoUrl: "https://simulatordevis.vercel.app/",
      details: "Ce simulateur permet aux utilisateurs de créer des devis en fonction de leurs besoins spécifiques.",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Inventaire des Chaussures",
      description: "Une application pour gérer l'inventaire des chaussures avec des fonctionnalités avancées.",
      image: "/assets/images/inventory_shoes.png",
      technologies: ["React"],
      demoUrl: "https://inventoryshoes.vercel.app/",
      details: "Veuillez voir la démo sur un écran grand pour une meilleure expérience.",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Neyda",
      description: "Application pour découvrir restaurants et lieux tendances à Amsterdam",
      image: "/assets/images/neyda.png",
      technologies: ["React Native", "Expo", "Supabase"],
      demoUrl: "#",
      details: "Application mobile en développement pour trouver des restaurants, des lieux de divertissement et des endroits à la mode à Amsterdam.",
      //githubUrl: "https://github.com/username/neyda"
    },
    {
      title: "SuiviFit",
      description: "Plateforme complète de gestion pour coachs fitness indépendants",
      image: "/assets/images/suivifit.png",
      technologies: ["React", "Node.js", "PostgreSQL"],
      demoUrl: "https://www.suivifit.com/",
      details: "Plateforme tout-en-un permettant aux coachs de gérer jusqu'à 50 clients facilement : programmes personnalisés, suivi de progression, messagerie intégrée et tableau de bord analytique.",
      //githubUrl: "https://github.com/username/suivifit"
    },
    {
      title: "ScrollBlocker",
      description: "Extension Chrome pour gérer votre temps en ligne et encourager des pauses régulières",
      image: "/assets/images/scrollblocker.png",
      technologies: ["Chrome Extension", "JavaScript"],
      demoUrl: "https://chromewebstore.google.com/detail/kpngiihklmgpmhmjcmmajbgmhkmebdbe?utm_source=item-share-cb",
      details: "ScrollBlocker surveille intelligemment votre temps de navigation sur les sites que vous spécifiez et vous aide à reprendre le contrôle de votre temps en ligne.",
      //githubUrl: "https://github.com/username/scrollblocker"
    },
  ]

  return (
    <>
      <SEO 
        title="Projets"
        description="Découvrez mes réalisations : sites e-commerce, applications mobiles, sites vitrines et solutions sur mesure pour différents secteurs."
        keywords="portfolio projets, sites web, applications mobiles, e-commerce, React, React Native"
        url="/projects"
      />
      <section className="min-h-screen py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">Mes Projets</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Découvrez mes réalisations récentes et les technologies utilisées
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense 
              fallback={
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="animate-pulse bg-gray-200 dark:bg-dark-800 h-96 rounded-2xl"></div>
                  ))}
                </div>
              }
            >
              {projects.map((project, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <motion.div 
                    className="group relative h-full"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="gradient-border h-full">
                      <div className="relative overflow-hidden rounded-[10px] h-full bg-white dark:bg-dark-900">
                        {/* Image Container with 3D effect */}
                        <div className="relative h-64 overflow-hidden">
                          <LazyImage 
                            src={project.image} 
                            alt={`${project.title} - ${project.description}`}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Tech badges on hover */}
                          <motion.div 
                            className="absolute top-4 right-4 flex gap-2 flex-wrap"
                            initial={{ opacity: 0, y: -20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.technologies.map((tech, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs px-3 py-1 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-full font-medium text-dark-800 dark:text-white"
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-display font-bold mb-2 text-dark-900 dark:text-white group-hover:text-gradient transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-dark-600 dark:text-dark-300 mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          {project.details && (
                            <p className="text-sm text-dark-500 dark:text-dark-400 italic mb-4 line-clamp-2">
                              {project.details}
                            </p>
                          )}
                          
                          {/* Action buttons */}
                          <div className="flex gap-3 mt-auto">
                            {project.demoUrl && project.demoUrl !== "#" && (
                              <motion.a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <span>Voir le projet</span>
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </Suspense>
          </div>

          
          {/* CTA Section */}
          <AnimatedSection animation="fadeUp" className="mt-20 text-center">
            <div className="gradient-border max-w-2xl mx-auto">
              <div className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                  Prêt à donner vie à votre projet ?
                </h2>
                <p className="text-lg text-dark-600 dark:text-dark-300 mb-8">
                  Discutons de vos idées et créons quelque chose d'extraordinaire ensemble
                </p>
                <Link to="/contact">
                  <MagneticButton variant="gradient" size="lg">
                    <span className="flex items-center">
                      Démarrer un projet
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Projects

import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      title: "Site E-commerce",
      description: "Une plateforme de vente en ligne complète avec panier et paiement",
      image: "/assets/images/escooter.png",
      technologies: ["React"],
      demoUrl: "https://e-scooter-8m51-rgnwz2cer-jordan-moreiras-projects.vercel.app/",
      details: "Développé en 1 semaine, j'ai géré l'intégralité du projet, de la conception à la mise en ligne.",
     // githubUrl: "https://github.com/username/ecommerce"
    },
    {
      title: "Application Météo",
      description: "Application météo en temps réel avec géolocalisation",
      image: "https://via.placeholder.com/300",
      technologies: ["Vue.js", "Express", "API REST"],
      demoUrl: "#",
      details: "Cette application utilise des API tierces pour fournir des données en temps réel.",
      //githubUrl: "https://github.com/username/meteo-app"
    },
    {
      title: "Projet 3",
      description: "Description courte du projet 3",
      image: "https://via.placeholder.com/300",
      technologies: ["React Native", "Firebase"],
      demoUrl: "#",
      details: "Application mobile développée pour Android et iOS.",
    },
    {
      title: "Projet 4",
      description: "Description courte du projet 4",
      image: "https://via.placeholder.com/300",
      technologies: ["React Native", "Firebase"],
      demoUrl: "#",
      details: "Application mobile développée pour Android et iOS.",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Mes Projets
        </h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense 
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse bg-gray-200 h-64 rounded-xl"></div>
              ))}
            </div>
          }
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black bg-opacity-70">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-3">{project.description}</p>
                  <p className="text-xs mb-3 italic">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span>Démo</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Suspense>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Prêt à discuter de votre projet ?</h2>
        <Link to="/contact" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contactez-moi
        </Link>
      </div>
    </div>
  )
}

export default Projects

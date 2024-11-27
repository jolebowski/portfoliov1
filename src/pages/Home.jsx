import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Bonjour,
          </span>
          <span className="block mt-2">
            je suis <span className="text-blue-600">Jordan</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 px-4">
          Développeur spécialisé dans la création de sites web et d'applications mobiles.
        </p>
        
        <div className="space-y-4 text-lg md:text-xl text-gray-600 mb-8 px-4">
          <p>
            Découvrez mes projets et services adaptés à vos besoins.
          </p>
          
          <p>
            Que vous souhaitiez un site vitrine élégant, une application mobile performante, 
            ou un service sur mesure, je vous accompagne à chaque étape pour transformer 
            vos idées en projets concrets.
          </p>
          
          <p>
            Basé au Mans, je travaille de manière autonome pour vous garantir 
            un service rapide et personnalisé.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-4 mt-8">
          <Link
            to="/services"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Découvrir mes services
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          
          <Link
            to="/projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-800 font-semibold hover:border-blue-600 hover:text-blue-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="flex items-center">
              Voir mes projets
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

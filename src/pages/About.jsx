import React from 'react'
import SEO from '../components/SEO'

function About() {
  return (
    <>
      <SEO 
        title="À propos"
        description="Développeur web et mobile avec plus de 5 ans d'expérience. Spécialisé en React, Node.js et développement d'applications mobiles."
        keywords="développeur web Le Mans, développeur mobile, React, Node.js, expérience développement"
        url="/about"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <img
        src="/assets/images/Photo_MJ.jpg" 
        alt="Jordan Moreira - Développeur Web et Mobile Freelance au Mans"
          className="w-44 h-44 rounded-full mx-auto border-4 border-blue-600 shadow-lg object-cover"
        />
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          À propos de moi
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      <div className="prose max-w-none">
        <div className="space-y-4 max-w-3xl mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-semibold text-blue-600">Développeur web et mobile</span> basé au Mans, 
            je suis spécialisé en création de sites vitrines et d'applications mobiles modernes.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            J'ai plus de 5 ans d'expérience dans le développement de solutions numériques, ayant travaillé sur divers projets pour des clients de différents secteurs.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Mes projets incluent des applications de gestion, des sites e-commerce et des plateformes de réservation.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Je suis passionné par l'apprentissage continu et je m'efforce de rester à jour avec les dernières technologies et tendances du secteur.
          </p>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Mon approche est centrée sur des solutions performantes, adaptées à vos besoins.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Je vous accompagne avec un suivi personnalisé tout au long de votre projet.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 pt-2">
            Découvrez mes projets et services pour concrétiser vos idées.
          </p>
        </div>
        <h3 className="text-2xl font-bold mb-8 relative inline-block">
          Compétences
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></div>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h4 className="text-xl font-bold text-gray-800">Frontend</h4>
            </div>
            <ul className="space-y-3">
              {['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'React Native', 'Next.js', 'TypeScript'].map((skill) => (
                <li key={skill} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              <h4 className="text-xl font-bold text-gray-800">Backend</h4>
            </div>
            <ul className="space-y-3">
              {['Node.js', 'Express', 'MongoDB', 'SQL'].map((skill) => (
                <li key={skill} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About

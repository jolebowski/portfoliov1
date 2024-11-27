import React from 'react'

function Services() {
  const services = [
    {
      title: 'Offre Starter',
      price: '500 €',
      features: [
        'Site vitrine de 3 pages',
        'Design personnalisé',
        'Livraison en 7 jours'
      ]
    },
    {
      title: 'Offre Pro',
      price: '1000 €',
      features: [
        'Site vitrine complet (jusqu\'à 6 pages)',
        'Optimisation SEO basique',
        'Formation de 2 heures'
      ]
    },
    {
      title: 'Abonnement',
      price: '50 €/mois',
      features: [
        'Maintenance',
        'Mises à jour',
        '1h de modifications par mois'
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Mes Services
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-3xl font-bold text-blue-500 mb-6">{service.price}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Demander un devis
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

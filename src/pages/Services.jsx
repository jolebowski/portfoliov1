import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import FAQ from '../components/FAQ';
import { EMAILJS_DEVIS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from '../config/config';

Modal.setAppElement('#root');

function Services() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneNumber = e.target.user_phone.value;
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setStatus('error');
      return;
    }

    const templateParams = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      user_phone: phoneNumber,
      service: e.target.service.value,
      project_details: e.target.project_details.value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_DEVIS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        form.current.reset();
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
      });
  };

  const services = [
    {
      title: 'Offre Starter',
      price: '500 €',
      description: 'Idéal pour les petites entreprises souhaitant une présence en ligne.',
      features: [
        'Site vitrine de 3 pages',
        'Design personnalisé',
        'Livraison en 7 jours'
      ],
      icon: '🌐',
      popular: false,
    },
    {
      title: 'Offre Pro',
      price: '1000 €',
      description: 'Pour les entreprises qui ont besoin d\'un site plus complet.',
      features: [
        'Site vitrine complet (jusqu\'à 6 pages)',
        'Optimisation SEO basique',
        'Formation de 2 heures'
      ],
      icon: '💼',
      popular: true,
    },
    {
      title: 'Abonnement',
      price: '50 €/mois',
      description: 'Pour un suivi régulier et des mises à jour constantes.',
      features: [
        'Maintenance',
        'Mises à jour',
        '1h de modifications par mois'
      ],
      icon: '🔧',
      popular: false,
    },
    {
      title: 'Développement Mobile',
      price: '1500 €',
      description: 'Créez une application mobile sur mesure pour votre entreprise.',
      features: [
        'Application mobile personnalisée',
        'Compatible iOS et Android',
        'Intégration d\'API et fonctionnalités avancées'
      ],
      icon: '📱',
      popular: false,
    },
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
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {service.icon} {service.title}
              {service.popular && <span className="text-red-500 ml-2">⭐ Populaire</span>}
            </h3>
            <p className="text-3xl font-bold text-blue-500 mb-6">{service.price}</p>
            <p className="text-gray-700 mb-6">{service.description}</p>
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
            <button 
              onClick={openModal} 
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Demander un devis
            </button>
          </div>
        ))}
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={closeModal} 
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Demander un devis</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700">Votre nom</label>
            <input 
              type="text" 
              name="user_name" 
              className="border rounded w-full py-2 px-3" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Votre email</label>
            <input 
              type="email" 
              name="user_email" 
              className="border rounded w-full py-2 px-3" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Votre numéro de téléphone</label>
            <input 
              type="tel" 
              name="user_phone" 
              className="border rounded w-full py-2 px-3" 
              required 
              pattern="[0-9]*"
              maxLength="10"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type de service</label>
            <select 
              name="service" 
              className="border rounded w-full py-2 px-3" 
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="web">Développement Web</option>
              <option value="mobile">Développement Mobile</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Détails de votre projet</label>
            <textarea 
              name="project_details" 
              className="border rounded w-full py-2 px-3" 
              rows="4" 
              required
            ></textarea>
          </div>
          {status === 'error' && <p className="text-red-500 mt-4">Erreur lors de l'envoi du devis. Veuillez réessayer.</p>}
          {status === 'success' && <p className="text-green-500 mt-4">Votre message a été envoyé avec succès !</p>}
          <div className="flex justify-between">
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Envoyer
            </button>
            <button 
              type="button" 
              onClick={closeModal} 
              className="ml-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
            >
              Annuler
            </button>
          </div>
        </form>
      </Modal>
      <FAQ />
    </div>
  )
}

export default Services

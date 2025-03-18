import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import FormField from '../components/FormField';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/config';

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        form.current.reset()

        setTimeout(() => {
          setStatus('')
        }, 3000)
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contactez-moi
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Parlons de votre projet !</h3>
        <p className="text-gray-600 mb-8">
          Vous avez un projet en tête ? N'hésitez pas à me contacter directement par téléphone ou via le formulaire ci-dessous.
          Je suis là pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos idées.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaPhone className="text-blue-600 h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">Appelez-moi</p>
              <a href="tel:0646700715" className="text-blue-600 text-lg font-semibold hover:text-blue-800 transition-colors">
                06 46 70 07 15
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full">
              <FaClock className="text-gray-600 h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">Disponibilité</p>
              <p className="text-gray-600">Du lundi au dimanche, 9h - 18h</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-gray-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-gray-600 h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">Localisation</p>
              <p className="text-gray-600">Le Mans, France</p>
            </div>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <FormField id="user_name" label="Nom" type="text" required />
        <FormField id="user_email" label="Email" type="email" required />
        <FormField id="message" label="Message" type="textarea" required />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        {status === 'success' && (
          <p className="text-green-500 text-center mt-4">
            Votre message a été envoyé avec succès. Merci de me contacter !
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4">
            Une erreur est survenue. Veuillez réessayer plus tard.
          </p>
        )}
      </form>
    </div>
  )
}

export default Contact

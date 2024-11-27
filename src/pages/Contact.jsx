import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
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

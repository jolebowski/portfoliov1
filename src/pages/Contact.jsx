import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Button from '../components/design-system/Button';
import SEO from '../components/SEO';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../config/config';

function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'jordan.moreira@epitech.eu',
      link: 'mailto:jordan.moreira@epitech.eu',
      delay: 0.1
    },
    {
      icon: FaPhone,
      title: 'Téléphone',
      value: '+33 6 46 70 07 15',
      link: 'tel:+33646700715',
      delay: 0.2
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localisation',
      value: 'Le Mans, France',
      link: '#',
      delay: 0.3
    }
  ];

  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 3000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <>
      <SEO
        title="Contact | Jordan Moreira"
        description="Contactez-moi pour discuter de votre prochain projet web ou mobile."
        url="/contact"
      />

      <section className="min-h-screen py-24 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-electric-violet/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-starlight">
                Restons <span className="text-gradient">Connectés.</span>
              </h1>
              <p className="text-lg text-muted-mist max-w-xl mx-auto">
                Vous avez un projet en tête ? Vous cherchez un partenaire pour vous aider à construire votre produit ?
                Je suis actuellement disponible pour de nouvelles opportunités.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: info.delay }}
                  className="glass-card p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center text-electric-violet mb-4">
                    <info.icon size={24} />
                  </div>
                  <h3 className="text-white font-bold mb-1">{info.title}</h3>
                  <p className="text-muted-mist text-sm">{info.value}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-violet to-cyan-ray" />

              <h2 className="text-2xl font-bold text-white mb-8">Envoyer un message</h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-mist">Nom</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-violet transition-colors"
                      placeholder="Votre Nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-mist">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-violet transition-colors"
                      placeholder="nom@exemple.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-mist">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-deep-space border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-violet transition-colors resize-none"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-4">
                    <a href="https://github.com/jolebowski" target="_blank" rel="noreferrer" className="text-muted-mist hover:text-white transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/iamjomoreira/" target="_blank" rel="noreferrer" className="text-muted-mist hover:text-white transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                  </div>

                  <Button variant="primary" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Envoi...' : 'Envoyer'}
                  </Button>
                </div>

                {status === 'success' && (
                  <p className="text-green-400 text-sm mt-4">Message envoyé avec succès !</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm mt-4">Échec de l'envoi. Veuillez réessayer.</p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
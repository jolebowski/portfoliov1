import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Added hook
import Modal from 'react-modal';
import AnimatedSection from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';
import { EMAILJS_DEVIS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from '../config/config';
import { faqSchema, serviceSchema } from '../utils/structuredData';

Modal.setAppElement('#root');

function Services() {
  const { t } = useTranslation(); // Init hook
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('no-scroll');
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(form.current);
    // ... (keep existing logic)

    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      user_phone: formData.get('user_phone'),
      service: formData.get('service'),
      message: formData.get('project_details'),
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_DEVIS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
        closeModal();

        setTimeout(() => {
          setStatus('');
        }, 3000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const services = [
    {
      title: t('services.offerings.starter.title'),
      price: '750 €',
      description: t('services.offerings.starter.desc'),
      features: t('services.offerings.features.starter', { returnObjects: true }), // Array translation
      icon: '🌐',
      popular: false,
      gradient: 'from-cyan-500 to-blue-500',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      title: t('services.offerings.pro.title'),
      price: '1500 €',
      description: t('services.offerings.pro.desc'),
      features: t('services.offerings.features.pro', { returnObjects: true }),
      icon: '💼',
      popular: true,
      gradient: 'from-electric-violet to-purple-500', // Brand colors
      shadowColor: 'shadow-electric-violet/30'
    },
    {
      title: t('services.offerings.subscription.title'),
      price: '200 €/m',
      description: t('services.offerings.subscription.desc'),
      features: t('services.offerings.features.sub', { returnObjects: true }),
      icon: '🔧',
      popular: false,
      gradient: 'from-emerald-400 to-green-500',
      shadowColor: 'shadow-emerald-500/20'
    },
    {
      title: t('services.offerings.mobile.title'),
      price: '3000 €',
      description: t('services.offerings.mobile.desc'),
      features: t('services.offerings.features.mobile', { returnObjects: true }),
      icon: '📱',
      popular: false,
      gradient: 'from-rose-500 to-orange-500', // Adjusted colors
      shadowColor: 'shadow-rose-500/20'
    },
  ];

  return (
    <>
      <SEO
        title={t('services.title')}
        description={t('services.subtitle')}
        keywords="services, development, web, mobile, react"
        url="/services"
        structuredData={[serviceSchema, faqSchema]}
      />

      {/* Hero Section - Aligned with Home.jsx Style */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-32 pb-20">
        {/* Aurora Background */}
        <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-starlight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('services.title')}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-mist max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('services.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MagneticButton
              onClick={() => document.getElementById('services-grid').scrollIntoView({ behavior: 'smooth' })}
              className="bg-electric-violet text-white font-medium px-8 py-3 rounded-xl hover:bg-electric-violet/80 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            >
              {t('services.cta.discover')}
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
        <div id="services-grid" className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-starlight">
              {t('services.offerings.title')}
            </h2>
            <p className="text-muted-mist">
              {t('services.offerings.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container with Glassmorphism */}
                <div className={`glass-card h-full p-6 flex flex-col relative overflow-hidden group-hover:border-white/20 transition-all duration-300 ${service.popular ? 'border-electric-violet/30 bg-electric-violet/5' : ''}`}>

                  {/* Gradient Glow Effect on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {service.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-electric-violet text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-lg">
                        POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-starlight mb-2">{service.title}</h3>
                  <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                    {service.price}
                  </div>

                  <p className="text-muted-mist text-sm mb-6 flex-grow">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {Array.isArray(service.features) && service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <span className="mr-2 text-electric-violet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    onClick={openModal}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 border border-white/10 hover:border-white/20 hover:bg-white/5 flex items-center justify-center gap-2 group-hover:bg-electric-violet/10 group-hover:text-electric-violet group-hover:border-electric-violet/30`}
                  >
                    {t('services.cta.quote')}
                  </MagneticButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section - Redesigned */}
      <AnimatedSection>
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-starlight mb-8">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-muted-mist mb-12 max-w-2xl mx-auto">
              {t('services.cta.contact')}
            </p>

            <MagneticButton
              onClick={openModal}
              className="bg-white text-gray-900 font-display font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] text-xl transform hover:scale-105"
            >
              {t('services.cta.start')}
            </MagneticButton>
          </div>
        </section>
      </AnimatedSection>

      {/* Modal - Kept largely same but styled */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 flex items-center justify-center z-[100] p-4 overflow-y-auto outline-none" // Higher z-index
            overlayClassName="fixed inset-0 bg-black/90 backdrop-blur-sm z-[90]" // Higher z-index
            closeTimeoutMS={300}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-deep-space border border-white/10 p-8 rounded-2xl max-w-md w-full shadow-2xl relative"
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>

              <h2 className="text-2xl font-bold mb-6 text-starlight">
                {t('services.modal.title')}
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                {[
                  { name: 'user_name', label: t('services.modal.name'), type: 'text' },
                  { name: 'user_email', label: t('services.modal.email'), type: 'email' },
                  { name: 'user_phone', label: t('services.modal.phone'), type: 'tel' }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm text-gray-400 mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet transition-colors"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('services.modal.service')}</label>
                  <select
                    name="service"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet"
                    required
                  >
                    <option value="" className="bg-deep-space">Select...</option>
                    <option value="web" className="bg-deep-space">Web Development</option>
                    <option value="mobile" className="bg-deep-space">Mobile Apps</option>
                    <option value="maintenance" className="bg-deep-space">Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t('services.modal.details')}</label>
                  <textarea
                    name="project_details"
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-electric-violet text-white font-bold py-3 rounded-lg hover:bg-electric-violet/80 transition-all disabled:opacity-50"
                >
                  {status === 'sending' ? t('services.modal.sending') : t('services.modal.send')}
                </button>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Services


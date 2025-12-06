import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Added
import { useNavigate } from 'react-router-dom';
import Button from '../design-system/Button';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Init

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">

      {/* Background Ambience */}
      <div className="absolute inset-0 aurora-bg opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-electric-violet/30 bg-electric-violet/10 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-electric-violet tracking-wide">{t('home.hero.badge')}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
          {t('home.hero.title')} <br />
          <span className="text-gradient">{t('home.hero.titleHighlight')}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-mist max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('home.hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" onClick={() => navigate('/projects')} className="w-full sm:w-auto">
            {t('home.hero.ctaProjects')}
          </Button>
          <Button variant="secondary" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
            {t('home.hero.ctaContact')}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

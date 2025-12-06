import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Added
import Badge from '../design-system/Badge';
import SkillsOrbit from './SkillsOrbit';

const SkillsSection = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t('home.skills.categories.frontend'), skills: ['React', 'Vue', 'Next.js', 'Tailwind', 'Framer Motion'] },
    { name: t('home.skills.categories.backend'), skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
    { name: t('home.skills.categories.devops'), skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-midnight/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-starlight">
              {t('home.skills.title')} <span className="text-gradient">{t('home.skills.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-mist mb-12 leading-relaxed">
              {t('home.skills.description')}
            </p>

            <div className="space-y-8">
              {categories.map((category, idx) => (
                <div key={idx} className="glass-card p-6 bg-white/5 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge key={skill} variant="solid">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-electric-violet/5 blur-3xl rounded-full" />
            <SkillsOrbit />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

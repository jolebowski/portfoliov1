import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SkillsSection from '../components/home/SkillsSection';

function Skills() {
  return (
    <>
      <SEO
        title="Compétences | Jordan Moreira"
        description="Découvrez mes compétences techniques en développement web et mobile."
        url="/skills"
      />

      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-6 text-center pt-16 pb-8"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-starlight">
            Expertise <span className="text-gradient">Technique</span>
          </h1>
          <p className="text-muted-mist max-w-2xl mx-auto">
            Une vue d'ensemble des technologies et outils que je maîtrise pour donner vie aux projets digitaux.
          </p>
        </motion.div>

        <SkillsSection />
      </div>
    </>
  );
}

export default Skills;

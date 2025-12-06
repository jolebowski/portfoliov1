import { motion } from 'framer-motion';
import Badge from '../design-system/Badge';
import SkillsOrbit from './SkillsOrbit';

const categories = [
  { name: 'Frontend', skills: ['React', 'Vue', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { name: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
  { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
];

const SkillsSection = () => {
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
              Ma <span className="text-gradient">Stack Technique</span>
            </h2>
            <p className="text-lg text-muted-mist mb-12 leading-relaxed">
              Je me spécialise dans la création d'applications robustes et évolutives en utilisant une stack moderne.
              Mon approche combine la flexibilité du JavaScript avec la puissance d'une infrastructure cloud typée.
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

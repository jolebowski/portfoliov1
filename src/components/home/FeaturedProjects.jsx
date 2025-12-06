import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Added
import { useNavigate } from 'react-router-dom';
import Button from '../design-system/Button';
import ProjectCard from '../design-system/ProjectCard';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "SuiviFit",
      description: t('projects.items.suivifit.desc'),
      image: "/assets/images/suivifit.jpg",
      tags: ["React", "Node.js", "PostgreSQL"],
      live: "https://www.suivifit.com/",
      github: "#"
    },
    {
      id: 2,
      title: "Escooter",
      description: t('projects.items.escooter.desc'),
      image: "/assets/images/escooter.jpg",
      tags: ["React", "Stripe", "Tailwind"],
      live: "https://e-scooter-psi.vercel.app/",
      github: "#"
    },
    {
      id: 3,
      title: "Maison Coiffure",
      description: t('projects.items.maisoncoiffure.desc'),
      image: "/assets/images/maisoncoiffure.jpg",
      tags: ["React", "Vite", "Framer Motion"],
      live: "https://maison-coiffure.vercel.app/",
      github: "#"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-violet/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-12 h-[1px] bg-electric-violet" />
              <span className="text-electric-violet font-medium tracking-wider uppercase">{t('home.featured.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-starlight">
              {t('home.featured.title')} <span className="text-gradient">{t('home.featured.titleHighlight')}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button variant="ghost" onClick={() => navigate('/projects')}>
              {t('home.featured.viewAll')} &rarr;
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Added
import SEO from '../components/SEO';
import Button from '../components/design-system/Button';
import ProjectCard from '../components/design-system/ProjectCard';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Escooter",
      description: t('projects.items.escooter.desc'),
      image: "/assets/images/escooter.jpg",
      tags: ["React"],
      live: "https://e-scooter-psi.vercel.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Quit Betting",
      description: t('projects.items.quitbetting.desc'),
      image: "/assets/images/quitbettingapp.jpg",
      tags: ["React Native"],
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Maison Coiffure",
      description: t('projects.items.maisoncoiffure.desc'),
      image: "/assets/images/maisoncoiffure.jpg",
      tags: ["React"],
      live: "https://maison-coiffure.vercel.app/",
      github: "#"
    },
    {
      id: 4,
      title: "Studio Photo",
      description: t('projects.items.studiophoto.desc'),
      image: "/assets/images/studiophoto.jpg",
      tags: ["React"],
      live: "https://studio-photo-snowy.vercel.app/",
      github: "#"
    },
    {
      id: 5,
      title: "Simulateur de Devis",
      description: t('projects.items.simulator.desc'),
      image: "/assets/images/simulator_devis.jpg",
      tags: ["React"],
      live: "https://simulatordevis.vercel.app/",
      github: "#"
    },
    {
      id: 6,
      title: "SuiviFit",
      description: t('projects.items.suivifit.desc'),
      image: "/assets/images/suivifit.jpg",
      tags: ["React", "Node.js", "PostgreSQL"],
      live: "https://www.suivifit.com/",
      github: "#"
    },
  ];

  return (
    <>
      <SEO
        title="Projets | Jordan"
        description="Découvrez mes réalisations : sites e-commerce, applications mobiles, sites vitrines et solutions sur mesure."
        url="/projects"
      />

      <section className="min-h-screen py-24 relative overflow-hidden">
        {/* Background ambience */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-ray/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-starlight">
              {t('projects.title')} <span className="text-gradient">{t('projects.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-mist max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} priority={index < 2} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet/10 to-transparent pointer-events-none" />

            <h2 className="text-3xl font-display font-bold text-starlight mb-4 relative z-10">
              {t('projects.cta.title')}
            </h2>
            <p className="text-muted-mist mb-8 relative z-10">
              {t('projects.cta.description')}
            </p>
            <div className="relative z-10">
              <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                {t('projects.cta.button')}
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Projects

import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Button from '../components/design-system/Button';
import ProjectCard from '../components/design-system/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Escooter",
      description: "Une plateforme de vente en ligne complète avec panier et paiement",
      image: "/assets/images/escooter.jpg", // Placeholder or keep original if valid
      tags: ["React"],
      live: "https://e-scooter-psi.vercel.app/",
      github: "#"
    },
    {
      id: 2,
      title: "Quit Betting",
      description: "Application mobile pour aider les utilisateurs à surmonter leurs habitudes de pari.",
      image: "/assets/images/quitbettingapp.jpg",
      tags: ["React Native"],
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Maison Coiffure",
      description: "Application pour la gestion d'un salon de coiffure, réservations en ligne.",
      image: "/assets/images/maisoncoiffure.jpg",
      tags: ["React"],
      live: "https://maison-coiffure.vercel.app/",
      github: "#"
    },
    {
      id: 4,
      title: "Studio Photo",
      description: "Portfolio d'un studio photo professionnel, mettant en avant des réalisations variées.",
      image: "/assets/images/studiophoto.jpg",
      tags: ["React"],
      live: "https://studio-photo-snowy.vercel.app/",
      github: "#"
    },
    {
      id: 5,
      title: "Simulateur de Devis",
      description: "Un simulateur interactif pour générer des devis personnalisés.",
      image: "/assets/images/simulator_devis.jpg",
      tags: ["React"],
      live: "https://simulatordevis.vercel.app/",
      github: "#"
    },
    {
      id: 6,
      title: "SuiviFit",
      description: "Plateforme complète de gestion pour coachs fitness indépendants.",
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
              Mes <span className="text-gradient">Projets</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-mist max-w-2xl mx-auto">
              Une sélection de mes travaux récents, du développement web aux applications mobiles complexes.
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
              Vous avez une idée en tête ?
            </h2>
            <p className="text-muted-mist mb-8 relative z-10">
              Transformons votre vision en réalité. Discutons de votre prochain projet.
            </p>
            <div className="relative z-10">
              <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                Démarrer un projet
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Projects

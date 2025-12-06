import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../design-system/Button';
import ProjectCard from '../design-system/ProjectCard';

const projects = [
  {
    id: 1,
    title: "SuiviFit",
    description: "Plateforme complète de gestion pour coachs fitness indépendants avec suivi client et facturation.",
    image: "/assets/images/suivifit.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    live: "https://www.suivifit.com/",
    github: "#"
  },
  {
    id: 2,
    title: "Escooter",
    description: "Une plateforme de vente en ligne complète avec panier, paiement et gestion de catalogue.",
    image: "/assets/images/escooter.jpg",
    tags: ["React", "Stripe", "Tailwind"],
    live: "https://e-scooter-psi.vercel.app/",
    github: "#"
  },
  {
    id: 3,
    title: "Maison Coiffure",
    description: "Application pour la gestion d'un salon de coiffure avec système de réservations en ligne.",
    image: "/assets/images/maisoncoiffure.jpg",
    tags: ["React", "Vite", "Framer Motion"],
    live: "https://maison-coiffure.vercel.app/",
    github: "#"
  }
];

const FeaturedProjects = () => {
  const navigate = useNavigate();

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
              <span className="text-electric-violet font-medium tracking-wider uppercase">Sélection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-starlight">
              Projets <span className="text-gradient">Phare</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button variant="ghost" onClick={() => navigate('/projects')}>
              Voir tous les projets &rarr;
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

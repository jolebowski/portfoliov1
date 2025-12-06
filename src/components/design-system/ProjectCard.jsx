import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Badge from './Badge';

const ProjectCard = ({ project, priority = false }) => {
  return (
    <motion.div
      className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-deep-space/50 backdrop-blur-sm"
      style={{ willChange: 'transform' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-electric-violet/20 to-transparent pointer-events-none z-0" />

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
          width="800"
          height="600"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 gap-4 bg-midnight/60 backdrop-blur-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-midnight rounded-full hover:scale-110 transition-transform"
            aria-label={`Voir le code source de ${project.title} sur GitHub`}
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-electric-violet text-white rounded-full hover:scale-110 transition-transform"
            aria-label={`Visiter le site ${project.title}`}
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-display font-bold text-starlight mb-2 group-hover:text-electric-violet transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-mist mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <Badge key={tag} variant="solid" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

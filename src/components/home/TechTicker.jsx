import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiGraphql, SiMongodb, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

const techs = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'MongoDB', icon: SiMongodb },
];

const TechTicker = () => {
  return (
    <div className="w-full overflow-hidden py-10 mt-24 border-y border-white/5 bg-midnight/50 backdrop-blur-sm relative mb-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10" />

      <motion.div
        className="flex space-x-16 w-max"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
      >
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <div key={index} className="flex items-center space-x-2 text-muted-mist hover:text-white transition-colors duration-300">
            <tech.icon size={28} />
            <span className="text-lg font-medium">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechTicker;

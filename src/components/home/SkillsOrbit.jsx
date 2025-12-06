import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { icon: FaReact, color: '#61DAFB', radius: 120, duration: 20 },
  { icon: SiTypescript, color: '#3178C6', radius: 180, duration: 25 },
  { icon: FaNodeJs, color: '#339933', radius: 240, duration: 30 },
  { icon: SiNextdotjs, color: '#ffffff', radius: 140, duration: 22, reverse: true },
  { icon: SiTailwindcss, color: '#06B6D4', radius: 200, duration: 28, reverse: true },
  { icon: SiPostgresql, color: '#336791', radius: 260, duration: 35, reverse: true },
];

const Orbit = ({ radius, duration, reverse = false }) => {
  return (
    <motion.div
      className="absolute rounded-full border border-white/5"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    />
  );
};

const Planet = ({ skill, angle }) => {
  const { radius, duration, reverse, color, icon: Icon } = skill;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{ width: radius * 2, height: radius * 2, x: "-50%", y: "-50%", willChange: "transform" }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12 rounded-full bg-deep-space border border-white/10 flex items-center justify-center relative group cursor-pointer"
        style={{ rotate: 0 }} // Keep icon upright? No, planet rotates. Need counter-rotation if upright.
      >
        {/* Counter Rotate to keep icon upright */}
        <motion.div
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
          className="flex items-center justify-center w-full h-full"
        >
          <Icon size={24} color={color} />
        </motion.div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 20px ${color}` }} />
      </motion.div>
    </motion.div>
  );
};

const SkillsOrbit = () => {
  return (
    <div className="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100">

      {/* Central Star */}
      <div className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-electric-violet to-cyan-ray flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.5)]">
        <span className="text-white font-bold text-xl">Stack</span>
      </div>

      {/* Orbits */}
      <Orbit radius={120} duration={20} />
      <Orbit radius={140} duration={22} reverse />
      <Orbit radius={180} duration={25} />
      <Orbit radius={200} duration={28} reverse />
      <Orbit radius={240} duration={30} />
      <Orbit radius={260} duration={35} reverse />

      {/* Planets */}
      {skills.map((skill, index) => (
        <Planet key={index} skill={skill} />
      ))}

    </div>
  );
};

export default SkillsOrbit;

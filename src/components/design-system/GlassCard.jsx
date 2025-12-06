import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-6 ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2)" } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

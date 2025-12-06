import { motion } from 'framer-motion';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'bg-transparent text-muted-mist hover:text-white hover:bg-white/5',
  outline: 'border border-electric-violet/50 text-electric-violet hover:bg-electric-violet/10',
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${variants[variant] || variants.primary} ${className} relative overflow-hidden`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-white/20 blur-lg"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
};

export default Button;

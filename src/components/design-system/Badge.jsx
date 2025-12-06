const Badge = ({ children, variant = 'solid', className = '' }) => {
  const styles = {
    solid: 'bg-white/10 text-white border border-white/10 backdrop-blur-sm',
    outline: 'border border-electric-violet/50 text-electric-violet',
    glow: 'bg-electric-violet/20 text-electric-violet border border-electric-violet/30 shadow-[0_0_10px_rgba(124,58,237,0.3)]',
  };

  return (
    <span className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

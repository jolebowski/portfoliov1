import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MagneticButton = ({ 
  children, 
  className = '',
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700',
    secondary: 'bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50',
    gradient: 'bg-gradient-to-r from-primary-500 via-accent-purple to-accent-mint text-white',
    ghost: 'bg-transparent text-primary-600 hover:bg-primary-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`
        relative overflow-hidden rounded-xl font-medium
        transition-all duration-300 transform hover:scale-105
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2) 0%, transparent 50%)',
          '--mouse-x': `${50 + x}%`,
          '--mouse-y': `${50 + y}%`,
        }}
      />
    </motion.button>
  )
}

export default MagneticButton
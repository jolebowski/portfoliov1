import React from 'react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  animation = 'fadeUp'
}) => {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100
        }
      }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      variants={animations[animation] || animations.fadeUp}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
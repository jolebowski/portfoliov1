import React from 'react'
import { motion } from 'framer-motion'
import { getMobileAnimationSettings, shouldDisableEffects, getMobileIntersectionOptions } from '../utils/mobileOptimizations'

const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  animation = 'fadeUp'
}) => {
  const mobileSettings = getMobileAnimationSettings()
  const disableEffects = shouldDisableEffects()
  const intersectionOptions = getMobileIntersectionOptions()
  // Reduce animation distance on mobile
  const yDistance = disableEffects ? 0 : 20
  const xDistance = disableEffects ? 0 : 30
  
  const animations = {
    fadeUp: {
      hidden: { opacity: disableEffects ? 1 : 0, y: yDistance },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: disableEffects ? 1 : 0 },
      visible: { opacity: 1 }
    },
    fadeLeft: {
      hidden: { opacity: disableEffects ? 1 : 0, x: xDistance },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: disableEffects ? 1 : 0, x: -xDistance },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: disableEffects ? 1 : 0, scale: disableEffects ? 1 : 0.95 },
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

  // Skip animations entirely on very slow devices
  if (disableEffects) {
    return <div className={className}>{children}</div>
  }
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: intersectionOptions.threshold,
        margin: intersectionOptions.rootMargin 
      }}
      transition={{ 
        duration: mobileSettings.duration, 
        delay: delay * mobileSettings.delay,
        ease: mobileSettings.ease
      }}
      variants={animations[animation] || animations.fadeUp}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
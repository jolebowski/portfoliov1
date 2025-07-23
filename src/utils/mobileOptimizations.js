// Mobile detection and performance utilities
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    || window.innerWidth <= 768
}

export const isSlowDevice = () => {
  // Check for low-end devices
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection) {
    return connection.effectiveType === '3g' || connection.effectiveType === '2g' || connection.saveData
  }
  return false
}

// Reduced motion preference
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Mobile-optimized animation settings
export const getMobileAnimationSettings = () => {
  const mobile = isMobile()
  const reducedMotion = prefersReducedMotion()
  const slowDevice = isSlowDevice()
  
  if (reducedMotion || slowDevice) {
    return {
      duration: 0,
      delay: 0,
      stagger: 0,
      ease: 'linear'
    }
  }
  
  if (mobile) {
    return {
      duration: 0.3, // Faster animations on mobile
      delay: 0.1,
      stagger: 0.05,
      ease: 'easeOut'
    }
  }
  
  return {
    duration: 0.8,
    delay: 0.2,
    stagger: 0.1,
    ease: 'easeInOut'
  }
}

// Disable heavy effects on mobile
export const shouldDisableEffects = () => {
  return isMobile() || isSlowDevice() || prefersReducedMotion()
}

// Optimize intersection observer for mobile
export const getMobileIntersectionOptions = () => {
  if (isMobile()) {
    return {
      threshold: 0.1,
      rootMargin: '50px' // Smaller margin on mobile
    }
  }
  return {
    threshold: 0.2,
    rootMargin: '100px'
  }
}
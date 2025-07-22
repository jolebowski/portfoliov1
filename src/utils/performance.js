// Web Vitals monitoring for Core Web Vitals optimization
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals only if available
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    }).catch(() => {
      console.log('Web vitals not available')
    })
  }
}

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload fonts
  const fontPreload = document.createElement('link')
  fontPreload.rel = 'preload'
  fontPreload.as = 'font'
  fontPreload.type = 'font/woff2'
  fontPreload.crossOrigin = 'anonymous'
  fontPreload.href = '/fonts/primary-font.woff2'
  document.head.appendChild(fontPreload)
}

// Lazy load images that are not in viewport
export const setupLazyLoading = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
      img.src = img.dataset.src
    })
  } else {
    // Fallback for browsers that don't support native lazy loading
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
    document.body.appendChild(script)
  }
}

// Optimize third-party scripts
export const optimizeThirdPartyScripts = () => {
  // Delay non-critical scripts
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Load Google Analytics after page load
      const ga = document.createElement('script')
      ga.async = true
      ga.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_TRACKING_ID}`
      document.head.appendChild(ga)
    }, 2000)
  })
}
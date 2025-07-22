import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function LazyImage({ src, alt, className, ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc === null) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setImageSrc(src);
      }
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, src]);

  return (
    <div ref={setImageRef} className={`relative ${className}`}>
      {imageSrc && (
        <motion.img
          {...props}
          src={imageSrc}
          alt={alt}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && (
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded ${className}`} />
      )}
    </div>
  );
}

export default LazyImage;
import React, { useState, useEffect } from 'react'

function ImageLoader({ src, alt, className }) {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
    }
  }, [src])

  return (
    <img
      src={imageSrc || 'placeholder.webp'}
      alt={alt}
      className={`${className} ${!imageSrc ? 'animate-pulse bg-gray-200' : ''}`}
      loading="lazy"
    />
  )
}

export default ImageLoader

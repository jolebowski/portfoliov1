import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  structuredData 
}) => {
  const siteTitle = 'Jordan Moreira - Développeur Web & Mobile Freelance'
  const defaultDescription = 'Développeur web freelance spécialisé en React, React Native et création de sites web modernes. Services de développement web, applications mobiles et solutions sur mesure.'
  const defaultKeywords = 'développeur web freelance, création site web, développement application mobile, React developer, développeur React Native, freelance web developer, développeur fullstack, création site internet, développeur JavaScript, développeur web Paris'
  const defaultImage = 'https://www.jordanmoreira.fr/assets/images/Photo_MJ.jpg'
  const siteUrl = 'https://www.jordanmoreira.fr'

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || defaultDescription
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords
  const metaImage = image || defaultImage
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Jordan Moreira" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) ? (
            structuredData.map((data, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(data)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </>
      )}
    </Helmet>
  )
}

export default SEO
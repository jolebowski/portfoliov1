import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  structuredData,
  article,
  noindex = false
}) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'fr'
  
  const siteTitle = 'Jordan Moreira - Développeur Web & Mobile Freelance'
  const defaultDescription = 'Développeur web freelance au Mans spécialisé en React, React Native et création de sites web modernes. Services de développement web, applications mobiles et solutions sur mesure. Devis gratuit et accompagnement personnalisé.'
  const defaultKeywords = 'développeur web freelance Le Mans, création site web Le Mans, développement application mobile, React developer, développeur React Native Le Mans, freelance web developer, développeur fullstack, création site internet professionnel, développeur JavaScript, développeur web Sarthe'
  const defaultImage = 'https://www.jordanmoreira.fr/assets/images/Photo_MJ.jpg'
  const siteUrl = 'https://www.jordanmoreira.fr'

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || defaultDescription
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords
  const metaImage = image || defaultImage
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="fr" href={`${siteUrl}/fr${url || ''}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${url || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={metaUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Jordan Moreira - Développeur Web & Mobile" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'fr_FR'} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content="Jordan Moreira - Développeur Web & Mobile" />
      <meta name="twitter:creator" content="@jordanmoreira" />
      
      {/* Additional SEO tags */}
      <meta name="author" content="Jordan Moreira" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="generator" content="React + Vite" />
      <meta name="rating" content="general" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      
      {/* Geo targeting */}
      <meta name="geo.region" content="FR-PDL" />
      <meta name="geo.placename" content="Le Mans" />
      <meta name="geo.position" content="48.00611;0.19956" />
      <meta name="ICBM" content="48.00611, 0.19956" />
      
      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:author" content="Jordan Moreira" />
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:section" content={article.section} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
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
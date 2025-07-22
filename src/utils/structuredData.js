export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jordan Moreira",
  "jobTitle": "Développeur Web & Mobile Freelance",
  "url": "https://www.jordanmoreira.fr",
  "image": "https://www.jordanmoreira.fr/assets/images/Photo_MJ.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/jordanmoreira",
    "https://github.com/jordanmoreira"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Le Mans",
    "addressRegion": "Pays de la Loire",
    "addressCountry": "FR"
  },
  "knowsAbout": [
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Développement Web",
    "Développement Mobile",
    "UI/UX Design"
  ],
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Services de Développement Web et Mobile",
      "serviceType": [
        "Création de sites web",
        "Développement d'applications mobiles",
        "Sites e-commerce",
        "Maintenance de sites web",
        "Solutions sur mesure"
      ]
    }
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Portfolio de Jordan Moreira",
  "url": "https://www.jordanmoreira.fr",
  "description": "Développeur web freelance spécialisé en React, React Native et création de sites web modernes.",
  "publisher": {
    "@type": "Person",
    "name": "Jordan Moreira"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.jordanmoreira.fr/projects?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Person",
    "name": "Jordan Moreira"
  },
  "serviceType": "Développement Web et Mobile",
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de développement",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Offre Starter",
          "description": "Site vitrine de 3 pages avec design personnalisé",
          "price": "500",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Offre Pro",
          "description": "Site vitrine complet jusqu'à 6 pages avec SEO",
          "price": "1000",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Développement Mobile",
          "description": "Application mobile personnalisée iOS et Android",
          "price": "1500",
          "priceCurrency": "EUR"
        }
      }
    ]
  }
}
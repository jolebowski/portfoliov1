export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jordan Moreira",
  "jobTitle": "Développeur Web & Mobile Freelance",
  "url": "https://www.jordanmoreira.fr",
  "image": "https://www.jordanmoreira.fr/assets/images/Photo_MJ.jpg",
  "email": "contact@jordanmoreira.fr",
  "telephone": "+33-6-XX-XX-XX-XX",
  "sameAs": [
    "https://www.linkedin.com/in/jordanmoreira",
    "https://github.com/jordanmoreira",
    "https://twitter.com/jordanmoreira"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Le Mans",
    "addressRegion": "Pays de la Loire",
    "addressCountry": "FR",
    "postalCode": "72000"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Jordan Moreira Freelance",
    "url": "https://www.jordanmoreira.fr"
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
  "alternateName": "Jordan Moreira - Développeur Web & Mobile",
  "url": "https://www.jordanmoreira.fr",
  "description": "Développeur web freelance au Mans spécialisé en React, React Native et création de sites web modernes. Services de développement web, applications mobiles et solutions sur mesure.",
  "publisher": {
    "@type": "Person",
    "name": "Jordan Moreira"
  },
  "inLanguage": ["fr-FR", "en-US"],
  "copyrightYear": 2024,
  "copyrightHolder": {
    "@type": "Person",
    "name": "Jordan Moreira"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.jordanmoreira.fr/projects?search={search_term_string}"
    },
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels types de services proposez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Je propose des services de développement web, de développement mobile, ainsi que des solutions de maintenance et de mise à jour. Chaque service est personnalisé selon vos besoins spécifiques."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour réaliser un projet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai dépend de la complexité du projet. En général, un site vitrine peut être livré en 7 jours, tandis qu'une application mobile peut prendre plusieurs semaines. Je fournis toujours un calendrier détaillé avant de commencer."
      }
    },
    {
      "@type": "Question",
      "name": "Proposez-vous des services de maintenance ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, j'offre des services de maintenance mensuels pour assurer le bon fonctionnement de votre site ou application. Cela inclut les mises à jour de sécurité, les sauvegardes régulières et le support technique."
      }
    },
    {
      "@type": "Question",
      "name": "Comment puis-je vous contacter pour discuter de mon projet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vous pouvez me contacter via le formulaire de contact sur mon site, directement par email, ou utiliser le bouton \"Demander un devis\" pour démarrer une conversation sur votre projet."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles technologies utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "J'utilise les dernières technologies web modernes incluant React, Next.js, Node.js, et diverses autres technologies selon les besoins du projet. Je m'assure toujours d'utiliser les outils les plus adaptés."
      }
    }
  ]
}

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.jordanmoreira.fr${item.url}`
  }))
})

export const projectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "url": project.link,
  "image": project.image,
  "creator": {
    "@type": "Person",
    "name": "Jordan Moreira"
  },
  "dateCreated": project.date,
  "keywords": project.technologies.join(", "),
  "inLanguage": "fr-FR"
})

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jordan Moreira - Développeur Web Freelance",
  "image": "https://www.jordanmoreira.fr/assets/images/Photo_MJ.jpg",
  "@id": "https://www.jordanmoreira.fr",
  "url": "https://www.jordanmoreira.fr",
  "telephone": "+33-6-XX-XX-XX-XX",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Le Mans",
    "addressRegion": "Pays de la Loire",
    "postalCode": "72000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.00611,
    "longitude": 0.19956
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/jordanmoreira",
    "https://github.com/jordanmoreira"
  ]
}
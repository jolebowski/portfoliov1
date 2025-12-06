import FeaturedProjects from '../components/home/FeaturedProjects'
import Hero from '../components/home/Hero'
import SkillsSection from '../components/home/SkillsSection'
import TechTicker from '../components/home/TechTicker'
import SEO from '../components/SEO'
import { breadcrumbSchema } from '../utils/structuredData'

function Home() {
  return (
    <>
      <SEO
        title="Jordan Moreira | Développeur Full-Stack & UI Designer"
        description="Portfolio de Jordan Moreira, Développeur Full-Stack spécialisé dans la création d'expériences digitales premium."
        keywords="développeur web, full-stack, UI/UX, React, Node.js, Le Mans"
        structuredData={breadcrumbSchema([{ name: 'Accueil', url: '/' }])}
      />

      <Hero />
      <TechTicker />
      <FeaturedProjects />
      <SkillsSection />
    </>
  )
}

export default Home

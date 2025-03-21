import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ContactBanner from './components/ContactBanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { initGA, logPageView } from './config/analytics'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'

function App() {
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    logPageView()
  }, [location])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <ContactBanner />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="font-semibold text-gray-800 text-2xl">Jordan Moreira</span>
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          data-testid="mobile-menu"
          className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-md">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-gray-600 hover:text-blue-600 px-4 py-2 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

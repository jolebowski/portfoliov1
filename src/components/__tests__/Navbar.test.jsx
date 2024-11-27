import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Navbar from '../Navbar'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Navbar', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<Navbar />)
    
    // Use getAllByRole to find links with specific text
    const homeLinks = screen.getAllByRole('link', { name: /accueil/i })
    const aboutLink = screen.getByRole('link', { name: /à propos/i })
    const projectsLink = screen.getByRole('link', { name: /projets/i })
    
    expect(homeLinks.length).toBeGreaterThan(0)
    expect(aboutLink).toBeInTheDocument()
    expect(projectsLink).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    renderWithRouter(<Navbar />)
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    fireEvent.click(menuButton)
    
    // Check if mobile menu is visible
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu).toHaveClass('block')
    
    // Click again to close
    fireEvent.click(menuButton)
    expect(mobileMenu).toHaveClass('hidden')
  })
})

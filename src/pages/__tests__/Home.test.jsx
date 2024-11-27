import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from '../Home'

describe('Home', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
    expect(screen.getByText(/Bonjour, je suis/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Découvrir mes services')).toBeInTheDocument()
    expect(screen.getByText('Voir mes projets')).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Contact from '../Contact'

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve())
  }
}))

describe('Contact', () => {
  it('renders contact form', () => {
    render(<Contact />)
    
    expect(screen.getByRole('textbox', { name: /nom/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
  })

  it('shows success message on form submission', async () => {
    render(<Contact />)
    
    fireEvent.change(screen.getByRole('textbox', { name: /nom/i }), {
      target: { value: 'John Doe' }
    })
    fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'john@example.com' }
    })
    fireEvent.change(screen.getByRole('textbox', { name: /message/i }), {
      target: { value: 'Test message' }
    })
    
    fireEvent.click(screen.getByRole('button', { name: /envoyer/i }))
    
    expect(await screen.findByText(/Votre message a été envoyé avec succès/)).toBeInTheDocument()
  })
})

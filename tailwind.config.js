/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Keeping class strategy, but default will be dark effectively via bg
  theme: {
    extend: {
      colors: {
        // Primary Backgrounds
        midnight: '#030014', // Main Deep Space
        'deep-space': '#0F172A', // Card Surface
        
        // Accents
        'electric-violet': '#7C3AED',
        'cyan-ray': '#22D3EE',
        'rose-glow': '#F472B6',
        
        // Text
        starlight: '#F8FAFC', // Headings
        'muted-mist': '#94A3B8', // Body
        
        // Effects
        glass: 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body
        display: ['Space Grotesk', 'system-ui', 'sans-serif'], // Headings
      },
      backgroundImage: {
        'gradient-aurora': 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(15, 23, 42, 0) 50%)',
        'gradient-spotlight': 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'aurora': 'aurora 10s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
        }
      },
    },
  },
  plugins: [],
}

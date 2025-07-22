/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        accent: {
          coral: '#FF6B6B',
          mint: '#4ECDC4',
          gold: '#FFD93D',
          purple: '#C77DFF',
          blue: '#7209B7',
        },
        dark: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-up': 'fadeUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        bounceIn: {
          '0%': { 
            transform: 'scale(0.3)',
            opacity: '0',
          },
          '50%': { 
            transform: 'scale(1.05)',
          },
          '70%': { 
            transform: 'scale(0.9)',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(to right bottom, #6366F1 0%, #C77DFF 25%, #4ECDC4 50%, #6366F1 75%, #C77DFF 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

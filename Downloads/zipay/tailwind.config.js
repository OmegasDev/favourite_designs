/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New Color Palette from Design System
        'dark-purple': '#2D1B69',
        'vibrant-purple': '#6B46C1',
        'purple': '#8B5CF6',
        'lighter-purple': '#A78BFA',
        'light-purple': '#E0E7FF',
        'aqua': '#14B8A6',
        'teal': '#0D9488',
        'gray': '#9CA3AF',
        'off-white': '#F8FAFC',
        'charcoal': '#374151',
        'slate-gray': '#64748B',
        'emerald-green': '#10B981',
        'soft-red': '#EF4444',
        
        // Brand Colors
        'zipay-primary': '#8B5CF6',
        'zipay-secondary': '#14B8A6',
        'zipay-accent': '#6B46C1',
        'zipay-bg': '#F8FAFC',
        'zipay-text': '#374151',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 4s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient': 'gradient 4s ease infinite',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'number-change': 'numberChange 3s ease-in-out infinite',
        'phone-float': 'phoneFloat 8s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
          '70%': {
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        phoneFloat: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-15px) rotate(1deg)',
          },
          '50%': {
            transform: 'translateY(-25px) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(-10px) rotate(-1deg)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        numberChange: {
          '0%, 100%': {
            transform: 'scale(1)',
            color: '#14B8A6',
          },
          '50%': {
            transform: 'scale(1.1)',
            color: '#8B5CF6',
          },
        },
        textGlow: {
          '0%': {
            textShadow: '0 0 5px rgba(139, 92, 246, 0.5)',
          },
          '100%': {
            textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)',
          },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};
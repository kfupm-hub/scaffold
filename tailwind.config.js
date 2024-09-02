/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  safelist: [
    { pattern: /animation-delay-(none|\d{2,4})/ },
    { pattern: /ring-\w*-\d00?/ },
    { pattern: /bg-\w*-\d00?/ }
  ],
  theme: {
    extend: {
      screens: {
        'xs': '560px',
        '2xs': '480px',
        '3xs': '390px'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
            filter: 'blur(0.1rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)'
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out 200ms 1 backwards',
        'fade-in-slow': 'fadeIn 2s ease-out 200ms 1 backwards',
        'fade-in-down': 'fadeInDown 100ms ease-out 10ms 1 backwards',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animation-delay')
  ]
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-white': '#f3f4fd',
        'gradient': `-webkit-linear-gradient(to right, #ffe259, #ffa751)`
      },
    
      keyframes: {
        slideIn: {
          'from': {
            transform: 'translateX(-100%)',
          },
          'to': {
            transform: 'translateX(0)',
          },
        },
        slideOut: {
          'from': {
            transform: 'translateX(0)',
          },
          'to': {
            transform: 'translateX(-100%)',
          },
        },
        popUp:{
          '0%' :{
            // transform: 'scale(0.5)',
            opacity: 0,
          },
          '100%': {
            // transform: 'scale(1)',
            opacity: 1,
          }
        },
        slideDown:{
          '0%' :{
            transform: 'scaleY(0)',
          },
          '100%': {
            transform: 'scaleY(1)',
          }
        },
        slideUp:{
          '0%' :{
            transform: 'scaleY(1)',
          },
          '100%': {
            transform: 'scaleY(0)',
          }
        },
        slideTop:{
          '0%' :{
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          }
        }
      },
      animation: {
        'slide-in': 'slideIn 0.50s ease-in-out',
        'slide-out': 'slideOut 0.30s ease-in-out',
        'pop-up' : 'popUp 0.70s ease-out',
        'slide-down':'slideDown 0.30s ease',
        'slide-up':'slideUp 0.30s ease',
        'slide-top':'slideTop 0.50s ease'
      },
    },
  },
  plugins: [],
}


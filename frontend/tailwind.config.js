/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-white': '#f3f4fd'
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
        }
      },
      animation: {
        'slide-in': 'slideIn 0.50s ease-in-out',
        'slide-out': 'slideOut 1s ease-in-out',
        'pop-up' : 'popUp 0.70s ease-out'
      },
    },
  },
  plugins: [],
}


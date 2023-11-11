/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },

      transitionTimingFunction:{
        'custom-1': 'cubic-bezier(0.080, 0.9, 0.118, 1)'
      }
    },
  },
  plugins: [],
}


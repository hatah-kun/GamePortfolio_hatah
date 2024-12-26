/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
// colors---------------------------------------------
      colors: {
        customColor: {
          primary: '#991b1b',
          light: '#f3f4f6',
          DEFAULT: '#374151',
          dark: '#18181b',
        },
      },
// fonts---------------------------------------------
      fontFamily:{
        Gemsbuck_bold: ['Gemsbuck_bold', 'sans-serif'],
        Gemsbuck_thin: ['Gemsbuck_thin', 'sans-serif'],
        Gemsbuck_regular: ['Gemsbuck', 'sans-serif'],
      },
// keyframes---------------------------------------------
      keyframes: {

        rectBackwards: {
          '0%': {
            transform: 'translateX(10px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },

      },
// animations---------------------------------------------
      animation: {
        rectBackwards: 'rectBackwards 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}


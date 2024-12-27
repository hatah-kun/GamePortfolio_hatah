/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        StylishBold: ['Gemsbuck_bold', 'sans-serif'],
        Gemsbuck_thin: ['Gemsbuck_thin', 'sans-serif'],
        Gemsbuck_regular: ['Gemsbuck', 'sans-serif'],
        NormalFont: ['LogikaNova', 'sans-serif'],
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
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


// tailwind.config.js


const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      xxl: '120px'
     },
    textColor: theme => theme('colors'),
     textColor: {
       'color_pink': '#ECB2DE',
       'black1': '#000',
       'white1': '#fff'
     },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'color1': '#ECB2DE',
      'color2': '#C0DFDD',
      'color3': '#E5E053',
     }),
    boxShadow: {
      sm: '0 0 1rem 0 rgba(0, 0, 0, .2)'
    },
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
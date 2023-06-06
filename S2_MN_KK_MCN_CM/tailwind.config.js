/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      toniccolor: '#ff9c40',
      backgroundcolor: '#f5f5f5',
      contrastcolor: '#2c2b2b',
      contentbluelayout: '#2f8a99',
      green: '#2c2c2c',
      text: '#000000',
      contentbluecards: '#8ecdd7',
      teamcolor: '#434343',
      invalid: '#f42e2e',
      contentbluecards: '#8ECDD7'
    },

    fontFamily: {
      jost: ["Jost"],
      poppins: ["Poppins"]
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      },
    },

    plugins: [],
  }
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange": "#fa8b02",
        "blac": "#333333",
        "gray": "#d9d9d9",
        "white": "#ffffff"
      },
      fontFamily:{
        "segoe": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }
    },
  },
  plugins: [],
  future:{
    hoverOnlyWhenSupported: true
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ["Oswald", "sans-serif"],
        'manrope': ["Manrope", "serif"],
      },
      colors: {
        'black-blue': '#1d0e6a',
        'pink': '#cb6ade'
      },
    },
  },
  plugins: [],
}
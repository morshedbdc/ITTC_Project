/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-500': '#FF3503',
        'Purple-500': '#5A4FCF',
      },
      fontFamily: {
        'oswald': ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}
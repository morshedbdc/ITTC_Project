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
      animation:{
         ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
         fadeoutright: 'fade-out-right 1s ease-in-out 0.25s 1'
      } ,

keyframes: {'ping':{
  "75%, 100%": {
    transform: 'scale(1)',
    opacity: '.3'
  }
},
"fade-out-right": {
  "0%": {
      opacity: 1,
  },
  "100%": {
      opacity: 0,
      transform: "translate3d(100%, 0, 0)",
  },
  
},

}

    },
  },
  plugins: [],
}
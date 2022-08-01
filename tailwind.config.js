/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {


    fontFamily: {
      gilreg: ["Gilroy Regular", "cursive"],
      gilmed: ["Gilroy Medium", "cursive"],
      gilbold: ["Gilroy Bold", "cursive"],
     
    },

    extend: {
      
    },
  },
  plugins: []
}

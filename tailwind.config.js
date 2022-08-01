/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {


    fontFamily: {
      gilreg: ["Gilroy Regular", "sans-serif"],
      gilmed: ["Gilroy Medium", "sans-serif"],
      gilbold: ["Gilroy Bold", "sans-serif"],
     
    },

    extend: {
      
    },
  },
  plugins: []
}

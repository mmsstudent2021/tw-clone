/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ["Poppins", "sans-serif"],
        'paduak' : ["Padauk", "sans-serif"],
        'poppins-padauk' : ["Poppins","Padauk", "sans-serif"]
      },
    },
  },
  plugins: [],
}


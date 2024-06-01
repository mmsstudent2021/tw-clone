/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ["Poppins", "sans-serif"],
        'paduak' : ["Padauk", "sans-serif"],
        'poppins-mm' : ["Poppins","Padauk"]
      },
      colors : {
        primary : "#E21B1B",
        "secondary" : "#A205F5",
      }
    },
  },
  plugins: [],
}


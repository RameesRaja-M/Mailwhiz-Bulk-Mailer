/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'serif'],
        chakra:['Chakra Petch', 'serif']
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}


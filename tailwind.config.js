/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-color': '#219d8033', 
      },
      fontFamily: {
        'custom': ['Playfair Display', 'sans'], 
      },
    },
  },
  plugins: [],
}
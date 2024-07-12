/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'regular': ['Poppins', 'sans-serif'],
        'bold': ['Poppins-bold', 'sans-serif'],
        'medium': ['Poppins-medium', 'sans-serif'],
        'light': ['Poppins-light', 'sans-serif'],
        'thin': ['Poppins-thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
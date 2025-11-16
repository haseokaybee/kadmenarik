/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

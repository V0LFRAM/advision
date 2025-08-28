/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // важливо для перемикача теми
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

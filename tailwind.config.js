/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // важливо для перемикача теми
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
    "./src/componentsLayout/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}", // App Router
    // "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./componentsLayout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

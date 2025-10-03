/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        league: ["var(--font-league)", "sans-serif"],
      },
      letterSpacing: { tight001: "-0.01em" },
    },
  },
  plugins: [],
};

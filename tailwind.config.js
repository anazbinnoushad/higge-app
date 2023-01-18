/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00CC96",
        secondary: "#F6F7FB",
        tagline: "#2975FF",
      },
    },
  },
  plugins: [],
};

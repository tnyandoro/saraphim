/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "seraphim-orange": "#ea580c",
        "seraphim-dark": "#1f2937",
        "seraphim-white": "#ffffff",
        "seraphim-light": "#f3f4f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

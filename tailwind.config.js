/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003B95',
        'brand-lightblue': '#004CB8',
        'brand-accent': '#006CE4',
        'brand-hover': '#0071C2',
      },
    },
  },
  plugins: [],
}
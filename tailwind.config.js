/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#d4af37',
          500: '#c5a059',
          600: '#aa823d',
        },
        darkBg: '#121212',
        cardBg: '#1e1e1e'
      }
    },
  },
  plugins: [],
}
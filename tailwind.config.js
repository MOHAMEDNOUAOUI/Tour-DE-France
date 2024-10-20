/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFEB3B',
        secondary: '#242424',
        third: '#2e2e2e',
      }
    },
  },
  plugins: [],
}


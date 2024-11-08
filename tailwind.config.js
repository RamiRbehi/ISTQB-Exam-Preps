/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      whitespace: {
        'pre-wrap': 'pre-wrap',
      }
    },
  },
  plugins: [],
}
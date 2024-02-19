/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1140': '1140px',
      },
      fontFamily: {
        'Oswald': 'Oswald'
      },
      screens: {
        '': '400px'
      }
    },
  },
  plugins: [],
}


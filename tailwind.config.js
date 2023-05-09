/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '10rem',
          '2xl': '12rem',
        },
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#94939D',
        'gray-special': '#606D59',
        'gray-light': '#d3dce6',
        'light-orange': '#dfbfb1',
        'light-green': '#A4BC96',
        'extra-color': '#859D78'
      },
      height: {
        'h-200': '200px',
        'h-277': '277px',
        'h-300': '300px',
        'h-360': '360px',
        'h-400': '400px',
        'h-450': '450px',
        'h-460': '460px'
      }
    },
  },
  plugins: [],
}

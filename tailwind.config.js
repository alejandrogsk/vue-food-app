/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "startPage": "linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('src/assets/img/pizza.avif')"
      },
      colors: {
        "primary": "#2DD881",
        "secondary": "#52AA5E",
        "special": "linear-gradient(180deg, #52AA5E 0%, #2DD881 100%);"
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

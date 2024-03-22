/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#1618230F',
        'primary': '#FE2C55',
        'outline-hover':'rgba(254, 44, 85,0.06)',
        'hover': 'rgba(22, 24, 35, 0.03)',
        'span': 'rgba(22, 24, 35, 0.12)',
        'text-gray': 'rgba(22, 24, 35, 0.5)',
      },
    },
  },
  plugins: [],
}

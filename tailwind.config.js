/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#C38154',
        dark : '#3F281B',
        secondary : '#475569'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
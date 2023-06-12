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
        primary: '#4F709C',
        dark : '#213555',
        secondary : '#94a3b8',
        light : '#F5EFE7',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
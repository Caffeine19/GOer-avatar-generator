/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '5/12': '41.666667%',
        '7/12': '58.333333%'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

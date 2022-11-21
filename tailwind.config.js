/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

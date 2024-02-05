/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: ["./content/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


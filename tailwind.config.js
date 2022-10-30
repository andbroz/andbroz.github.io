/** @type {import('tailwindcss').Config} */

// @ts-ignore
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Flex', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Serif', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        sriracha: ['Sriracha', 'cursive'],
      },
    },
  },
  plugins: [],
};

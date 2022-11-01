// const defaultConfig = require('tailwindcss/defaultConfig');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        electricBlue: '#373e98',
        hotPink: '#f16775',
        shockingYellow: '#fee36e',
        oldGold: '#ceb92c',
        darkestGray: '#2a2a2a',
        complementaryBlue: '#2c41ce',
      },
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

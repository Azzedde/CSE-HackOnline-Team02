/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wejahni-cyan": "#30ABC8",
        "wejahni-purple": "#825ADC",
        "wejahni-blue": "#194067",
        "wejahni-gray": "#E9E6F2",
      },
    },
    screens: {
      xs: "320px",

      ...defaultTheme.screens,
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};

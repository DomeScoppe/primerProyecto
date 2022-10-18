const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FE043C',
      'secondary': '#FFEDDE',
      'complementary': '#2E266F',
      'complement2': '#707070',
     }),
    extend: {  colors: {
      'primary': '#FE043C',
      'complementary': '#2E266F',
    },
    fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

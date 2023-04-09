/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-panna": "#f4f1de",
        "brand-arancio": "#e07a5f",
        "brand-verde": "#81b29a",
        "brand-oro": "#f2cc8f",
        "brand-blue": "#3d405b",
        "brand-cyan": "#33a1fd",
      },
      boxShadow: {
        blue: "0 0 3px 3px #0096c7",
      },
    },
  },
  plugins: [],
};

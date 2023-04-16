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
        "brand-verde": "#42D293",
        "brand-oro": "#f2cc8f",
        "brand-blue": "#1a73e8",
        "brand-cyan": "#33a1fd",
        "brand-grigio": "#edede9",
        "brand-grigio-2": "#80868b",
      },
      boxShadow: {
        blue: "0 0 3px 3px #0096c7",
      },
    },
  },
  plugins: [],
};

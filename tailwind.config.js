/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      hyellow: {
        50: "#fefff2",
        300: "#fcffd9",
        500: "#f5ff80",
        700: "#ebff00",
        900: "#d2e500",
        DEFAULT: "#f5ff80",
      },
      hpurple: {
        50: "#f3f2ff",
        300: "#b9b2ff",
        500: "#7266ff",
        700: "#4333ff",
        900: "#3629cc",
        DEFAULT: "#7266ff",
      },
      hgreen: {
        50: "#f2fff7",
        300: "#bfffd5",
        500: "#73ffa2",
        700: "#1aff68",
        900: "#17e55e",
        DEFAULT: "#73ffa2",
      },
      horange: {
        50: "#fffdf2",
        300: "#fff3b2",
        500: "#ffe766",
        700: "#ffdb1a",
        900: "#e5c517",
        DEFAULT: "#ffe766",
      },
      hred: {
        50: "#fff2f5",
        300: "#ffb2c0",
        500: "#ff6682",
        700: "#ff1a43",
        900: "#cc1436",
        DEFAULT: "#ff6682",
      },
      hgray: {
        50: "#fcfcfc",
        100: "#f7f7f7",
        200: "#e6e6e6",
        300: "#cccccc",
        400: "#a6a6a6",
        500: "#737373",
        600: "#4d4d4d",
        700: "#333333",
        800: "#1a1a1a",
        900: "#0d0d0d",
        DEFAULT: "#ff6682",
      },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
    fontFamily: {
      sans: ["Inter", "ui-sans-serif"],
    },
  },
  plugins: [],
};

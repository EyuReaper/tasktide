const { default: daisyui } = require("daisyui");
const { data } = require("react-router-dom");

module.exports = {
  darkMode: ["class", '[data-theme = "dark"]'],
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};

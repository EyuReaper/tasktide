const { default: daisyui } = require("daisyui");

module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};

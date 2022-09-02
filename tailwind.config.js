/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
        RobotoSlab: ["Roboto Slab", "serif"],
      },
      colors: {
        "black-chocolate": "#0F1108",
        mehroonRang: "#A93F55",
        goldenRang: "#de9e36",
      },
    },
  },
  important: true,
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

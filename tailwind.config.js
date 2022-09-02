/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
        RobotoSlab: ["Roboto Slab", "serif"],
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          // '3xl': 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
         
        }
      },
      colors: {
        "black-chocolate": "#0F1108",
        mehroonRang: "#A93F55",
        goldenRang: "#de9e36",
        "steelgrayRang": "#232C33",
        "lightfontRang": "#DADFF7",
        "lightfont2Rang": "#5A7D7C"
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

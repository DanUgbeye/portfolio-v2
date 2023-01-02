/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "round-sm": "0 0 4px 0px",
        "round-md": "0 0 8px -1px",
        "round-lg": "0 0 15px -3px"
      },
      colors: {
        "deep-blue-900": "#1C232E",
        "deep-blue-700": "#222A36",
        "violet-light": "#676CDB",
        "violet-dark": "#6C71E5",
        "off-white": "#7F848B",
        "border-gray": "#898989"
      },
      fontSize: {
        "normal": "1.4rem"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      right: {
        "min-5": "-5px"
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'tesla':['TESLA',],
    },
    color: {
      yellowSecondary: "rgb(231, 182, 73);"
    }
  },
  plugins: ['postcss-import',
  'tailwindcss/nesting'],
};

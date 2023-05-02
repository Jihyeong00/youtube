/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      flex: {
        '01728': '0 1 728px',
      },
      width: {
        '1//5': 'calc(20% - 1.5em)',
        '1//3': 'calc(33% - 1.5em)',
        '1//4': 'calc(25% - 1.5em)',
      },
    },
  },
  plugins: [],
};

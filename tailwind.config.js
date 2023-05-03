/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      flex: {
        '01728': '0 1 728px',
      },
      width: {
        '1//5': 'calc(20% - 1em)',
        '1//3': 'calc(33% - 1em)',
        '1//4': 'calc(25% - 1em)',
        'full-360': 'calc(100% - 360px)',
        360: '360px',
      },
      height: {
        200: '200px',
      },
    },
  },
  plugins: [],
};

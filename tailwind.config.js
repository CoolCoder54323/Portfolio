/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}", // Include all Svelte and JS/TS files
  ],
  theme: {
    extend: {
      boxShadow: {
        'greenG': '0px 0px 16px 3px rgba(46,255,157,0.2)',
        'blackG': '0px 0px 5px 1px rgba(0,0,0,1)',
        'whiteG': '0px 0px 5px 1px rgba(255,255,255,1)',
        'whiteGl': '0px 0px 10px 1px rgba(255,255,255,1)',


      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        // 'hero-image' : "url('public/images/couch.png')"
      },
      colors : {
        'black3' : '#606060',
        'primary' : '#242424',
        'black-font' : '#303030',
        'gray-5': '#E0E0E0',
        'gray-4' : '#BDBDBD',
        'grey-2' : '#909090',
        'grey' : '#808080',
        'disabled' : '#999999',
        'success' : '#27AE60',
        'red' : '#EB5757'
      },
      fontFamily : {
        'primary' : '[Nunito Sans]'
      }
    },
  },
  plugins: [],
}
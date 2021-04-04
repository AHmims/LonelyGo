const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'PlusJakarta': ['"Plus Jakarta Display"', 'sans-serif']
      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(314px,1fr))',
        'cardsMobile': 'repeat(auto-fit, minmax(250px,1fr))'
      },
      gridTemplateRows: {
        'cards': 'max-content'
      },
      width: {
        '10.5': '42px',
        '68': '270px',
        '122.5': '490px',
        '150': '600px'
      },
      height: {
        '0.25': '1px',
        '10.5': '42px',
        '12.5': '51px',
      },
      borderWidth: {
        '3': '3px'
      },
      spacing: {
        '4.5': '18px',
        '5.5': '16px',
        '5.75': '23px',
        '6.5': '26px',
        '7.5': '30px',
        '8.5': '34px',
        '8.6': '35px',
        '12.2': '49px',
        '12.4': '50px',
        '57.5': '230px',
        'offCenter': '47%'
      },
      colors: {
        amber: colors.amber,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        rose: colors.rose,
        violet: colors.violet,
        emerald: colors.emerald,
        teal: colors.teal,
        card: {
          red: '#F2926C',
          green: '#C3E972',
          orange: '#FFC972',
          blue: '#78DBEF',
          violet: '#BFA0FD',
          pink: '#F898CA',
          black: '#161418'
        }
      }
    },
  },
  plugins: []
}

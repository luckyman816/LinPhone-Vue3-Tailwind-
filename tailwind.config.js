const darkGreenColor = '#1AB394'
const purpleColor = '#9B9BC5'
const lightGrayColor = '#333333'

module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,vue}",
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'dark-green': darkGreenColor,
        'light-gray': '#EBEBEB',
        'dark-gray': '#D6D6D6',
        'app-purple': '#9B9BC5'
      },
      boxShadow: {
        'card': '0px 0px 10px 4px rgba(0, 0, 0, 0.25)',
        'color-box': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderColor: {
        'light-green': '#1AB394',
        'dark-green': darkGreenColor
      },
      textColor: {
        'dark-green': darkGreenColor,
        'app-purple': purpleColor,
        'light-gray': lightGrayColor
      },
      margin: {
        top: {
          'tiny': '2px'
        }
      }
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      textColor: ['active', 'focus'],
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [],
}

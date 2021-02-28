// ADD THEME CUSTOMIZATIONS ARE HERE!
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors');


// Responsive Type
const activateResponsiveFont = (f) => {

}

module.exports = {
	prefix: "rhy-",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", 
	theme: {
		colors: { // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      green: colors.emerald[300],
			purple: colors.fuchsia[500],
			blue: colors.indigo[300],
      yellow: colors.yellow[300],
			gray:  { // usage: theme('colors.gray.light')
        light: colors.coolGray[50],
        DEFAULT:"#e8e9f0",
      },
			black: "#111111",
      white: "#fff"
		},
		fontFamily: {
			heading: ["Heebo", "sans-serif"],
			body: ["Roboto", "sans-serif"],
		},
	},
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': {
          backgroundColor: theme(colors.white),
        },
        'h1,p': {
          fontSmoothing: 'antialiased'
        },
        'h1': { 
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('screens.xl') ? theme('fontSize.8xl') : theme('fontSize.2xl') ,
        },
        'p': { fontFamily: theme('fontFamily.body') },
      })
    })
  ]
};

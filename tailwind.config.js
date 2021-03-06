// ADD THEME CUSTOMIZATIONS ARE HERE!
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				green: colors.emerald[300],
				purple: colors.fuchsia[500],
				blue: colors.indigo[300],
				yellow: colors.yellow[300],
				gray: { // usage: theme('colors.gray.light')
					light: colors.coolGray[50],
					DEFAULT: "#e8e9f0",
				},
				black: "#111111",
				white: "#fff",
			},
      container: {
        center: true,
        padding: '25px'
      },
      screens: {
        'tablet': '960px',// => @media (min-width: 960px) { ... }
        'laptop': '1280px',// => @media (min-width: 1280px) { ... }
        'desktop': '1600px',// => @media (min-width: 1600px) { ... }
      },
      fontSize: {
        tiny: ['12px', '16px'], // tiny
        tiny2: ['13px', '17px'], // tiny2:minwidth:1280px
        tiny3: ['15px', '18px'], // tiny3:minwidth:1280px
        'labelLarge': ['13px', { // labelLarge:minwidth:1280px
          letterSpacing: '1.2px',
          lineHeight: '17px',
        }],
        'labelLarge2': ['14px', { // labelLarge:minwidth:1280px
          letterSpacing: '1.4px',
          lineHeight: '18px',
        }],
        'labelLarge3': ['16px', { // labelLarge:minwidth:1600px
          letterSpacing: '1.4px',
          lineHeight: '22px',
        }],
        body: ['18px', '26px'], // body
        body2: ['20px', '26px'], // body:minwidth:1280px
        body3: ['22px','34px'], // body:minwidth:1600px
        'md':['26px', { // h2
          letterSpacing: '0.6px',
          lineHeight: '30px',
        }],
        '2md':['30px', { // h2:minwidth:1280px
          letterSpacing: '0.6px',
          lineHeight: '39px',
        }],
        'lg': ['36px', { // h1
          letterSpacing: '0.4px',
          lineHeight: '37px',
        }],
        'xl': ['42px', { // h1:minwidth:960px
          letterSpacing: '0.4px',
          lineHeight: '53px',
        }],
        '2xl': ['52px', { // h1:minwidth:1600px
          letterSpacing: '0.4px',
          lineHeight: '60px',
        }],
      },
			fontFamily: {
				heading: ["Heebo", "sans-serif"],
				body: ["Roboto", "sans-serif"],
			},
      fontWeight: {
        // Heebo:wght@600;900&family=Roboto:wght@300;400;500;700&
        boldest: 900,
        black: 700,
        bolder: 600,
        bold: 500,
        normal: 400,
        light: 300
      },
      extend: {
        zIndex: {
          '0': '0',
          '-1': '-1',
          '-99': '-99',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-1.5deg)' },
            '50%': { transform: 'rotate(1.5deg)' },
          },
          rise: {
            '0%, 100%': { transform: 'translateY(-5px)' },
          }

        },
        animation: {
          wiggle: 'wiggle 0.25s ease-in-out infinite',
          rise: 'rise 0.5s ease-in-out infinite'
        },
        boxShadow: theme => ({
          'offset-brand':  // top shadow,bottom shadow(respectively)
            `2px -2px ${theme('colors.purple')},
            -2px 3px ${theme('colors.green')}`, 
          'offset-hover':  // top shadow,bottom shadow(respectively)
            `2px -2px ${theme('colors.green')}, 
            -3px 3px ${theme('colors.purple')}`,
          'offset-white': `-2px 3px ${theme('colors.white')}, 3px -2px ${theme('colors.white')}`,
          'offset-green': `-2px 3px ${theme('colors.green')} , 3px -2px ${theme('colors.green')}`,
          'offset-purple': `-2px 3px ${theme('colors.purple')}, 3px -2px ${theme('colors.purple')}`,
        })
      },
	},
  variants: {
    extend: {
     animation: ['hover', 'focus'],
    }
  },
	plugins: [],
  
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#4D4D4D",
          800: "#373737"
        },

        pink: "#E2C8CE",
        brown: {
          dark: "#2B120A",
          light: "#E5956F"
        },
        green: {
          dark: "#242E2A",
          eucalyptus: "#8DB5A3"
        }
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      display: ["Quicksand"],
      body: ["Quicksand"]
    }
  },
  variants: {},
  plugins: []
};

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
        pink: "#E2C8CE",
        brown: {
          dark: "#2B120A",
          light: "#E5956F"
        },
        green: {
          dark: "#1F2A1B"
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

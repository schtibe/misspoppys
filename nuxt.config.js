export default {
  mode: "spa",
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Handgemachte Seifen auf natürlicher Basis hergestellt in Bern"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Seifen,Duschen,Händewaschen,Bern,handgemacht,natürlich,vegan,Kosmetik,handmade,cruelty free,lokal"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/main.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
  ],
  purgeCSS: {
    whitelistPatterns: [/^slick/]
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg-sprite"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};

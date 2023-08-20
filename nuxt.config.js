export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: "yandex-verification", content: "68b409f1c3ce78c3"},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: "yandex-verification", content: "c0bbdba8d1761292"},
      {name: "format-detection", content: "telephone=no"},
      {name: "format-detection", content: "address=no"},
    ],
    link: [
      {rel: 'icon', sizes: '36x36', type: 'image/svg+xml', href: '/favicon36.svg'},
      {rel: 'icon', sizes: '120x120', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'icon', sizes: '36x36', type: 'image/x-icon', href: '/favicon36.ico'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/font.css',
    '~/assets/style/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/yandex-map.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

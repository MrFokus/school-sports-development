export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Школа спортивного развития им. В.Н. Кызым – Секции Карате и Кикбоксинга',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:"yandex-verification", content:"c0bbdba8d1761292"},
      {name:"format-detection", content:"telephone=no"},
      {name:"format-detection", content:"address=no"},
      {
        name: 'description',
        content: 'Школа спортивного развития им. В.Н. Кызым проводит как групповые, так и индивидуальные тренировки по карате и кикбоксингу под наставничеством опытных и дипломированных тренеров'
      },
      {
        name: 'keywords',
        content: 'Школа спортивного развития им. В.Н. Кызым, секция, тренировки, занятия, карате, кикбоксинг, тренировки для детей, липецк, развитие, духовность, кызым, школа кызым'
      },
    ],
    link: [
      { rel: 'icon', sizes:'120x120', type: 'image/x-icon', href: '/favicon.ico' }
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
      src:'~/plugins/yandex-map.js',
      mode:'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}

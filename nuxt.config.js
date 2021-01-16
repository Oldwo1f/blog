import webpack from 'webpack'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  server: {
    port: 4001, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },
  head: {
    title: 'Alexis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/style.css',
    '@/assets/css/dark.css',
    '@/assets/css/font-icons.css',
    '@/assets/css/animate.css',
    '@/assets/css/magnific-popup.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/after-each', mode: 'client' },
    '~plugins/filter.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dayjs',
    '@nuxtjs/markdownit'

  ],
  markdownit: {
    injected: true
  },
  dayjs: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr'
  },
  axios: {
    proxy: true,
    baseURL: 'http://localhost:4000',
    prefix: '/api/',
    browserBaseURL: '/api/'
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:4000',
      pathRewrite: {
        '/api/': ''
      }
    },
    '/uploads': {
      target: 'http://localhost:4000'
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: 'jquery',
        jQuery: 'jquery',
        // dayjs: 'dayjs',
        _: 'lodash'
      })
    ]
  }
}

import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: '0.0.0.0'
  },

  loading: { color: '#fff' },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  plugins: [
    '@/plugins/dayjs'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],

  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],
 
  build: {
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  },

  //serverMiddleware: [
  //  { path: '/api', handler: '~/server/index.ts' }
  //]
}

module.exports = nuxtConfig
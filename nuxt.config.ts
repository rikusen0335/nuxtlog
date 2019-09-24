import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  buildModules: ['@nuxt/typescript-build'],

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

  loading: { color: '#fff' },

  css: [
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  plugins: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
 
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
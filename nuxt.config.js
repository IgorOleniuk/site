import path from 'path';
import fs from 'fs';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/i18n.js",
    {src: "~/plugins/indexedDBService.js", ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://auth.nuxtjs.org/guide/setup.html
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    /* ['nuxt-i18n', {
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Italiano',
          code: 'it',
          iso: 'it-IT',
          file: 'it-IT.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'it',
    }],*/

    /* [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
          {
            name: 'Italiano',
            code: 'it',
            iso: 'it-IT',
            file: 'it-IT.js'
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'it',
      }
    ],*/
  ],

  pwa: {
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      name: 'This is PWA',
      description: 'Empire State Building Observatory'
    },

    manifest: {
      name: 'Empire State Building',
      short_name: "ESBO",
      display: 'standalone',
      theme_color: '#F11010',
      lang: 'en',
      crossorigin: 'use-credentials'
    },

    icon: {
      iconSrc: './static/img/pwa.png',
      iconFileName: 'pwa.png'
    },

    workbox: {
      dev: true,
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://airlock-token:8888'
  },

  /**
   * Authorization.
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/login',
            method: 'post',
            propertyName: 'plainTextToken',
          },
          logout: {
            url: '/api/logout',
            method: 'post',
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false,
          },
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/about'
    },
  },

  /* server: {
    https: {
      host: '0.0.0.0',
      port: '8000',
       key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
       cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
    }
  }, */

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

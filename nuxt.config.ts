import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    FIREBASE: {
      apiKey: process.env.FBC_apiKey,
      authDomain: process.env.FBC_authDomain,
      databaseURL: process.env.FBC_databaseURL,
      projectId: process.env.FBC_projectId,
      storageBucket: process.env.FBC_storageBucket,
      messagingSenderId: process.env.FBC_messagingSenderId,
      appId: process.env.FBC_appId,
      measurementId: process.env.FBC_measurementId
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  typescript: {
    shim: false
  },
  alias: {
    "~~": ".",
    "@@": ".",
    "~": ".",
    "@": ".",
    "assets": "./assets",
    "public": "./public"
  },
  // meta favicon
  // https://nuxtjs.org/api/configuration-favicon.html
  meta: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    title: 'Quadrangle',
  }
})

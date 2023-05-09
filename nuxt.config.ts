import { defineNuxtConfig } from "nuxt/config"
export default defineNuxtConfig({
    tailwindcss: {
        exposeConfig: true,
        cssPath: '~/assets/scss/main.scss'
    },
    modules: [
        'nuxt-icons',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontaine',
        '@nuxt/image-edge',
        ['@nuxtjs/google-fonts', {
            families: {
              'Roboto Mono': true,
              'Noto Sans Georgian': true,
              download: true,
              inject: true
            }
          }]
    ],
    fontMetrics: {
        fonts: ['kernit', { family: 'kernit', src: 'https://res.cloudinary.com/dmb4l3zfo/raw/upload/v1678709564/font/Kernit-Filled_zmrmcc.woff2' }],
      },
      runtimeConfig: {
        public: {
          youtube_api_key: process.env.YOUTUBUE_API_KEY,
          dribbble_token: process.env.DRIBBBLE_TOKEN,
          google_books_id: process.env.GOOGLE_BOOKS_ID
        }
      }
})

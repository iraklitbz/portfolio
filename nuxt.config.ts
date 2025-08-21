import { defineNuxtConfig } from "nuxt/config"
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-08-21',
    modules: [
        '@nuxt/icon',
        '@nuxt/image'
    ],
    css: ['./scss/main.scss'],
    vite: {
        plugins: [tailwindcss()]
    },
    app: {
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Noto+Sans+Georgian&display=swap', rel: 'stylesheet' }
            ]
        }
    },
    runtimeConfig: {
        public: {
          youtube_api_key: process.env.YOUTUBUE_API_KEY,
          dribbble_token: process.env.DRIBBBLE_TOKEN,
          google_books_id: process.env.GOOGLE_BOOKS_ID
        }
    }
})

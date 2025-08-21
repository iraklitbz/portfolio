import { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/composables/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.vue',
    './app/**/*.vue',
    // Legacy paths for compatibility
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'hell-black': '#000',
        'dark-black': '#111',
        black: '#111',
        orange: '#d8491d'
      }
    }
  },
  plugins: []
} satisfies Config
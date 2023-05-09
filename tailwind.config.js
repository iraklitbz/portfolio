module.exports = {
    mode: "jit",
    purge: [
      "./assets/**/*.{css}",
      "./components/*.{vue,js}",
      "./components/**/*.{vue,js}",
      "./pages/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./*.{vue,js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    darkMode: 'class', // or 'media' or 'class
    theme: {
      extend: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'hell-black': '#000',
            'dark-black': '#111',
            'black': '#111',
            'orange': '#d8491d'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
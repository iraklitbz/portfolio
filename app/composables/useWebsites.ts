import type { Website } from '~/types'

export const useWebsites = () => {
  const websites = ref<Website[]>([
    {
      name: 'Anako Turashvili',
      url: 'https://anakoturashvili.com',
      icon: 'computer'
    },
    {
      name: 'TUI Portugal',
      url: 'https://www.tui.pt/',
      icon: 'computer'
    },
    {
      name: 'Buscabiblio',
      url: 'https://buscabiblio.com/',
      icon: 'computer'
    },
    {
      name: 'Noel Rayo',
      url: 'https://noelrayo.com/',
      icon: 'computer'
    },
    {
      name: 'Purista',
      url: 'https://purista.ge/',
      icon: 'computer'
    },
    {
      name: 'dribe',
      url: 'https://dribe.es/',
      icon: 'computer'
    },
    {
      name: 'Sambawood',
      url: 'https://sambawood.com/',
      icon: 'computer'
    },
    {
      name: 'Jauregui',
      url: 'https://nachojauregui.com/',
      icon: 'computer'
    },
    {
      name: 'administracionesvesta',
      url: 'https://administracionesvesta.com/',
      icon: 'computer'
    },
    {
      name: 'lunchclub-033',
      url: 'https://lunchclub-033.foodticket.shop/',
      icon: 'computer'
    },
    {
      name: 'Bolsamania',
      url: 'https://www.bolsamania.com/',
      icon: 'computer'
    },
    {
      name: 'More...',
      url: 'https://github.com/',
      icon: 'computer'
    }
  ])
  
  return {
    websites: readonly(websites)
  }
}
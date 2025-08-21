import type { Website } from '~/types'

export const useWebsites = () => {
  const websites = ref<Website[]>([
    {
      name: 'Anako Turashvili',
      url: 'https://anakoturashvili.com',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'TUI Portugal',
      url: 'https://www.tui.pt/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Buscabiblio',
      url: 'https://buscabiblio.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Noel Rayo',
      url: 'https://noelrayo.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Purista',
      url: 'https://purista.ge/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'dribe',
      url: 'https://dribe.es/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Sambawood',
      url: 'https://sambawood.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Jauregui',
      url: 'https://nachojauregui.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'administracionesvesta',
      url: 'https://administracionesvesta.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'lunchclub-033',
      url: 'https://lunchclub-033.foodticket.shop/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'Bolsamania',
      url: 'https://www.bolsamania.com/',
      icon: 'heroicons:computer-desktop'
    },
    {
      name: 'More...',
      url: 'https://github.com/',
      icon: 'heroicons:computer-desktop'
    }
  ])
  
  return {
    websites: readonly(websites)
  }
}
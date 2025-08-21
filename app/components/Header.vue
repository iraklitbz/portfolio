<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

interface NavItem {
  id: number
  name: string
  hasDropdown: boolean
  dropdown: Array<{
    id?: number
    name: string
    url?: string
    icon?: string
  }>
}

interface HeaderEmits {
  'update-about': []
}

const emit = defineEmits<HeaderEmits>()

const aboutMeActive = ref(false)
const headerRef = ref<HTMLElement>()

const navbar = ref<NavItem[]>([
  {
    id: 1,
    name: 'Contact',
    hasDropdown: false,
    dropdown: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ika_87/',
        icon: 'instagram'
      },
      {
        name: 'Dribble',
        url: 'https://dribbble.com/iraklitbz',
        icon: 'dribbble'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/irakli-tavberidze-47ba0338/',
        icon: 'linkedin'
      },
      {
        name: 'Send me an email',
        url: 'mailto:iraklitbz@gmail.com',
        icon: 'email'
      }
    ]
  },
  {
    id: 2,
    name: 'Appearance',
    hasDropdown: false,
    dropdown: [
      {
        id: 1,
        name: 'Original'
      },
      {
        id: 2,
        name: 'Dark'
      }
    ]
  }
])

const handleSubMenu = (item: NavItem) => {
  aboutMeActive.value = false
  const element = navbar.value.find(el => el.id === item.id)
  if (element) {
    if (element.hasDropdown) {
      element.hasDropdown = false
    } else {
      navbar.value.forEach(el => {
        el.hasDropdown = false
      })
      element.hasDropdown = true
    }
  }
}

const handleAboutMe = () => {
  navbar.value.forEach(element => {
    element.hasDropdown = false
  })
  aboutMeActive.value = !aboutMeActive.value
  if (aboutMeActive.value) {
    emit('update-about')
  }
}

const handleSubMenuClose = () => {
  aboutMeActive.value = false
  navbar.value.forEach(element => {
    element.hasDropdown = false
  })
}

// Setup click outside
onClickOutside(headerRef, handleSubMenuClose)
</script>
<template>
    <header
        ref="headerRef"
        class="w-[calc(100%_-_0.5rem)] lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-6xl"
    >
        <nav>
            <ul
                class="flex items-center flex-wrap py-4 md:py-0"
            >
                <li
                    class="px-4 py-2 cursor-pointer relative text-red-500"
                >
                    Iraklitbz
                </li>
                <li
                    v-for="(element, index) in navbar"
                    class="px-4 py-2 cursor-pointer relative"
                    :class="element.hasDropdown ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'"
                    @click="handleSubMenu(element)"
                >
                    {{ element.name }}
                    <Dropdown 
                        v-if="element.hasDropdown && element.dropdown.length > 0"
                        :dropdown="element.dropdown"
                        class="absolute top-[41px] left-0 z-10 w-[240px] border-b-4 border-l border-r-4 border-solid border-black"
                        :has-dropdown="element.hasDropdown"
                        :icon="element.icon"
                    />
                </li>
                <li
                    class="px-4 py-2 cursor-pointer relative"
                    :class="aboutMeActive ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'"
                    @click="handleAboutMe"
                >
                    About me
                </li>
            </ul>
        </nav>
    </header>
</template>
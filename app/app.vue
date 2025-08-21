<script setup lang="ts">
interface PortfolioItem {
  id: number
  name: string
  icon: string
  component: string
  position: string
}

const foldersOpen = ref<number[]>([])
const modalOpen = ref<number[]>([])

const portfolio = ref<PortfolioItem[]>([
  {
    id: 0,
    name: 'Webs',
    icon: 'folder',
    component: 'Webs',
    position: 'md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-[50%] md:left-[50%]'
  },
  {
    id: 1,
    name: 'Dribble',
    icon: 'folder',
    component: 'Dribble',
    position: 'md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-[50%] md:top-[47%] md:left-[50%] md:left-[47%]'
  },
  {
    id: 2,
    name: 'Playlist',
    icon: 'world',
    component: 'Musica',
    position: 'md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-[50%] md:md:top-[53%] md:left-[50%] md:left-[53%]'
  },
  {
    id: 3,
    name: 'Books',
    icon: 'books',
    component: 'Books',
    position: 'md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-[50%] md:left-[50%]'
  },
  {
    id: 4,
    name: 'Bin',
    icon: 'trash',
    component: 'Papelera',
    position: 'md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-[50%] md:md:top-[47%] md:left-[50%] md:md:left-[47%]'
  }
])

const getFolderClass = computed(() => {
  return (id: number) => {
    const lastFolder = foldersOpen.value.slice(-1)[0]
    return lastFolder === id ? true : false
  }
})

const handleClickFolder = (id: number) => {
  document.body.classList.add('overflow-hidden')
  foldersOpen.value.push(id)
}

const handleClickMenu = (id: number) => {
  modalOpen.value.push(id)
}

const handleUpdateCloseFolder = (id: number) => {
  document.body.classList.remove('overflow-hidden')
  foldersOpen.value = foldersOpen.value.filter(folder => folder !== id)
}
</script>

<template>
  <div
    class="bg-white dark:bg-black border-b border-solid border-black dark:border-white"
  >
    <Header 
      @update-about="handleClickMenu(98)"
    />
  </div>  
  <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-6xl pb-7 flex flex-col justify-between px-4 relative h-[calc(100vh-41px)]">
    <section>
      <div
        class="flex items-center gap-10 md:gap-20 mt-10 flex-wrap"
      >
        <div
          v-for="(element, index) in portfolio"
          class="box cursor-pointer flex flex-col items-center"
          @click="handleClickFolder(element.id)"
        >
            <Icon 
              :name="element.icon" 
              size="100px"
              class="icon text-6xl dark:text-white"
            />
            <h2
              class="text-sm text-center max-w-[100px]"
              :class="getFolderClass(element.id) ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'"
            >
                {{  element.name }}
            </h2>
        </div>
      </div>
    </section>
    <Window
      v-for="(element, index) in foldersOpen"
      :key="index"
      class="fixed top-0 left-0 md:absolute z-50"
      :class="portfolio[element].position"
      :folder-name="portfolio[element].name"
      :component-name="portfolio[element].component"
      @updateCloseFolder="handleUpdateCloseFolder"
      :id="element"
    />
    <About
      v-if="modalOpen.includes(98)"
      class="absolute transform -translate-x-1/2 -translate-y-1/2 top-[40%] left-[50%]"
      @updateCloseFolder="handleUpdateCloseFolder"
    />
  </div>
</template>
<style>
    body {
        background-color: #ddd;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
    html.dark body {
        background-color: #222;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
</style>
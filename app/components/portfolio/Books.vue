<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { GoogleBook } from '~/types'

interface BookEmits {
  updateLengthFiles: [count: number]
  updateScrollHeight: [height: number]
}

const emit = defineEmits<BookEmits>()
const { books, isLoading, error, fetchBooks, formatBookTitle } = useBooks()
const { isOpen, title, description, url, openModal, closeModal } = useModal()
const box = ref<HTMLElement>()
const modalRef = ref<HTMLElement>()

// Setup click outside for modal
onClickOutside(modalRef, closeModal)

// Fetch books on component mount
await fetchBooks()

const handleBookClick = (book: GoogleBook) => {
  openModal(
    book.volumeInfo.title,
    book.volumeInfo.description,
    book.volumeInfo.infoLink
  )
}

onMounted(() => {
  if (books.value.length > 0) {
    emit('updateLengthFiles', books.value.length)
  }
  
  if (box.value) {
    emit('updateScrollHeight', box.value.offsetHeight)
  }
})
</script>
<template>
  <div v-if="error" class="p-4 text-red-500">
    {{ error }}
  </div>
  
  <div v-else-if="isLoading" class="p-4 text-center">
    Loading books...
  </div>
  
  <ul
    v-else
    ref="box"
    class="grid grid-cols-2 md:grid-cols-5 gap-4 pl-2 pr-4 pb-6 py-3 w-[calc(100%-10px)]"
  >
    <li
      v-for="(book, index) in books"
      :key="index"
      class="text-base flex justify-center flex-col items-center cursor-pointer hover:opacity-75 transition-opacity"
      @click="handleBookClick(book)"
    >
      <figure
        v-if="book.volumeInfo.imageLinks"
        class="w-32"
      >
        <img 
          :src="book.volumeInfo.imageLinks.smallThumbnail" 
          :alt="book.volumeInfo.title"
          class="icon text-6xl w-full h-full images object-fill"
        />
      </figure>
      <figure
        v-else
        class="w-32 bg-gray-100 h-[194px] flex items-center justify-center"
      >
        <Icon 
          name="heroicons:exclamation-triangle" 
          size="300px"
          class="icon text-7xl"
        />
      </figure>
      <h2 class="mt-1 text-sm text-center">
        {{ formatBookTitle(book.volumeInfo.title) }} 
        {{ book.volumeInfo.authors ? '- ' + book.volumeInfo.authors[0] : '' }}
      </h2>
    </li>
  </ul>
  
  <div
    v-if="isOpen"
    ref="modalRef"
    class="fixed z-50"
  >
    <Modal 
      :description="description"
      :title="title"
      :url-book="url"
    />
  </div>
</template>
<style scoped>
.images {
  image-rendering: pixelated;
}
</style>
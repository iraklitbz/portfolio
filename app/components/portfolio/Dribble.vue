<script setup lang="ts">
interface DribbbleEmits {
  updateLengthFiles: [count: number]
  updateScrollHeight: [height: number]
}

const emit = defineEmits<DribbbleEmits>()
const { shots, isLoading, error, fetchShots } = useDribbble()
const box = ref<HTMLElement>()

// Fetch Dribbble shots on component mount
await fetchShots()

onMounted(() => {
  if (shots.value.length > 0) {
    emit('updateLengthFiles', shots.value.length)
  }
  
  if (box.value) {
    emit('updateScrollHeight', box.value.offsetHeight)
  }
})
</script>
<template>
  <div v-if="error" class="p-4 text-red-500 dark:text-red-400">
    {{ error }}
  </div>
  
  <div v-else-if="isLoading" class="p-4 text-center">
    Loading Dribbble shots...
  </div>
  
  <ul
    v-else
    ref="box"
    class="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2 pr-4 pb-6 overflow-scroll w-[calc(100%-20px)]"
  >
    <li
      v-for="(shot, index) in shots"
      :key="index"
      class="text-base p-3 text-center"
    >
      <a
        :href="shot.html_url"
        target="_blank"
        class="flex justify-center flex-col items-center hover:opacity-75 transition-opacity"
      >
        <figure class="w-full">
          <img 
            :src="shot.images.normal"
            :alt="shot.title"
            class="icon text-6xl w-full object-contain images"
          />
        </figure>
        <h2 class="mt-1 text-base dark:text-white">
          {{ shot.title }}
        </h2>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.images {
  image-rendering: pixelated;
}
</style>
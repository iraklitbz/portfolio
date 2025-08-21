<script setup lang="ts">
import type { YouTubeVideo } from '~/types'

interface MusicEmits {
  updateLengthFiles: [count: number]
  updateScrollHeight: [height: number]
}

const emit = defineEmits<MusicEmits>()
const { music, isLoading, error, fetchMusic, formatMusicTitle, getVideoUrl } = useMusic()
const box = ref<HTMLElement>()

// Fetch music on component mount
await fetchMusic()

onMounted(() => {
  if (music.value.length > 0) {
    emit('updateLengthFiles', music.value.length)
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
    Loading music...
  </div>
  
  <ul
    v-else
    ref="box"
    class="grid grid-cols-2 md:grid-cols-5 gap-4 pl-2 pr-4 pb-6 w-[calc(100%-10px)]"
  >
    <li
      v-for="(video, index) in music"
      :key="index"
      class="text-base flex justify-center flex-col items-center p-3 text-center"
    >
      <a
        :href="getVideoUrl(video.snippet.resourceId.videoId)"
        target="_blank"
        class="hover:opacity-75 transition-opacity"
      >
        <figure class="w-32">
          <img 
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
            class="icon text-6xl w-full object-contain images"
          />
        </figure>
        <h2 class="mt-1 text-sm dark:text-white">
          {{ formatMusicTitle(video.snippet.title) }}
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
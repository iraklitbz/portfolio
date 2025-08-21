<script setup lang="ts">
interface WebsEmits {
  updateLengthFiles: [count: number]
  updateScrollHeight: [height: number]
}

const emit = defineEmits<WebsEmits>()
const { websites } = useWebsites()

onMounted(() => {
  emit('updateLengthFiles', websites.value.length)
})
</script>
<template>
  <ul class="flex items-center flex-wrap w-[calc(100%-20px)]">
    <li
      v-for="(website, index) in websites"
      :key="index"
      class="text-base items-center p-3 w-1/2 md:w-auto text-center"
    >
      <a
        :href="website.url"
        target="_blank"
        class="flex justify-center flex-col items-center hover:opacity-75 transition-opacity"
      >
        <component 
          :is="`Icon${website.icon.charAt(0).toUpperCase() + website.icon.slice(1)}`"
          class="icon text-6xl w-16 h-16"
        />
        {{ website.name }}
      </a>
    </li>
  </ul>
</template>
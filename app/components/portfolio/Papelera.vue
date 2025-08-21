<script setup lang="ts">
interface PapeleraItem {
  name: string
  url: string
  icon: string
}

interface PapeleraEmits {
  updateLengthFiles: [count: number]
  updateScrollHeight: [height: number]
}

const emit = defineEmits<PapeleraEmits>()

const papelera = ref<PapeleraItem[]>([
  {
    name: 'Soon...',
    url: 'https://www.google.com',
    icon: 'pdf'
  }
])

onMounted(() => {
  emit('updateLengthFiles', papelera.value.length)
})
</script>
<template>
    <ul
        class="flex items-center flex-wrap w-[calc(100%-10px)]"
    >
        <li
            v-for="(element, index) in papelera"
            :key="index"
            class="text-base flex justify-center flex-col items-center p-3"
        >
            <IconPdf 
                class="icon text-6xl w-16 h-16"
            />
            {{ element.name }}
        </li>
    </ul>
</template>
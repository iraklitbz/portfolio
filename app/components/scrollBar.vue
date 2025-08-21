<script setup lang="ts">
interface ScrollBarProps {
  scrollHeight?: number | null
  scrollPosition?: number | null
}

const props = withDefaults(defineProps<ScrollBarProps>(), {
  scrollHeight: null,
  scrollPosition: null
})

const fullScrollHeight = ref<number | null>(null)
const scrollBar = ref<HTMLElement>()

const scrollBarHeight = computed(() => {
  const contentHeight = Math.min(fullScrollHeight.value || 0, 200)
  const containerHeight = props.scrollHeight || 0
  const ratio = contentHeight / containerHeight
  const minHeight = 20
  const maxHeight = containerHeight
  const thumbHeight = containerHeight * ratio
  const finalThumbHeight = Math.min(maxHeight, Math.max(minHeight, thumbHeight))
  return `height: ${finalThumbHeight}px;`
})

const scrollBarPosition = computed(() => {
  const contentHeight = fullScrollHeight.value || 0
  const containerHeight = props.scrollHeight || 0
  const ratio = contentHeight / containerHeight
  const scrollPosition = props.scrollPosition || 0
  const thumbPosition = scrollPosition * ratio
  return `top: ${Math.round(thumbPosition)}px;`
})

onMounted(() => {
  if (scrollBar.value) {
    fullScrollHeight.value = scrollBar.value.scrollHeight
  }
})
</script>
<template>
    <div
        class="scrollbar fixed left-[9px] bottom-[7px] hidden md:flex justify-end bg-gray-200 dark:bg-black w-[calc(100%-18px)] h-5"
    >
            <div
                class="border-t border-b border-solid border-black dark:border-white w-full h-5 flex justify-end"
            >
                <div
                    class="flex"
                >
                    <div
                        class="border-l border-r border-solid border-black dark:border-white px-1 flex items-center justify-center"
                    >
                        <Icon 
                            name="chevron-left" 
                            class="icon text-sm text-gray-400 dark:text-white"
                        />
                    </div>
                    <div
                        class="border-r border-solid border-black dark:border-white px-1 flex items-center justify-center"
                    >
                        <Icon 
                            name="chevron-right" 
                            class="icon text-sm text-gray-400 dark:text-white"
                        />
                    </div>
                </div>
            </div>
            <div
                class="w-5 text-gray-400 dark:text-white"
            >
            //
            </div>
        </div>
        <div
            ref="scrollBar"
            class="scrollbar hidden fixed right-[8px] top-[87px] h-[calc(100%-113px)] w-5 border-l border-r border-b border-solid border-black dark:border-white md:flex items-end  bg-gray-200 dark:bg-black overflow-hidden"
        >
            <div
                class="flex flex-col w-5 relative z-40 bg-slate-200 dark:bg-black"
            >
                <div
                    class="border-t border-solid border-black dark:border-white py-1 flex items-center justify-center"
                >
                    <Icon 
                        name="chevron-up" 
                        class="icon text-sm text-gray-400 dark:text-white"
                    />
                </div>
                <div
                    class="border-t border-solid border-black dark:border-white py-1 flex items-center justify-center"
                >
                    <Icon 
                        name="chevron-down" 
                        class="icon text-sm text-gray-400 dark:text-white"
                    />
                </div>
            </div>
            <div
                v-if="scrollHeight > 360"
                class="bg-gray-500 dark:bg-neutral-600 w-full z-10 absolute"
                :style="`${scrollBarHeight}; ${scrollBarPosition}`"
            ></div>
        </div>
</template>
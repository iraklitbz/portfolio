<script setup>
    const runtimeConfig = useRuntimeConfig()
    const token = runtimeConfig.dribbble_token
    const url = `https://api.dribbble.com/v2/user/shots?access_token=${token}`
    const { data } = await useFetch(url)
    const dribbles = data._rawValue
    const emit = defineEmits(['childEvent']);
    const box = ref(null)
    onMounted(() => {
        emit('updateLengthFiles', dribbles.length)
        emit('updateScrollHeight', box._rawValue.offsetHeight)
    })
    
</script>
<template>
    <ul
        ref="box"
        class="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2 pr-4 pb-6 overflow-scroll w-[calc(100%-20px)]"
    >
        <li
            v-for="(element, index) in dribbles"
            :key="index"
            class="text-base p-3 text-center"
        >
            <a
                :href="element.html_url"
                target="_blank"
                class="flex justify-center flex-col items-center"
            >
                    <figure
                        class="w-full"
                    >
                        <img 
                            :src="element.images.normal" 
                            class="icon text-6xl w-full object-contain images"
                        />
                </figure>
                <h2
                    class="mt-1 text-base dark:text-white"
                >
                    {{ element.title }}
                </h2>

            </a>
        </li>
    </ul>
</template>
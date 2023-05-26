<script setup>
    const runtimeConfig = useRuntimeConfig()
    const apiKey = runtimeConfig.youtube_api_key
    const playlistId = "PLX7O3ilIJySfSt_UAwJ4JvJ9bQa90Xh4j"
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playlistId}&key=${apiKey}`
    const { data } = await useFetch(url)
    const filterMusicList = data._rawValue.items.filter(element => element.snippet.title !== 'Private video')
    const musicList = filterMusicList
    const emit = defineEmits(['childEvent']);
    const box = ref(null)
    onMounted(() => {
        emit('updateLengthFiles', musicList.length)
        emit('updateScrollHeight', box._rawValue.offsetHeight)
    })
    const handleHeadlines = (headline) => {
        return headline.replace(/\([^()]*\)/g, '').replace(/"/g, '').replace(/[\[\(].*?[\]\)]/g, "").replace(/(^|-)([^ -])/g, "$1 $2").trim();
    }
    
</script>
<template>
    <ul
        ref="box"
        class="grid grid-cols-2 md:grid-cols-5 gap-4 pl-2 pr-4 pb-6 w-[calc(100%-10px)]"
    >
        <li
            v-for="(element, index) in musicList"
            :key="index"
            class="text-base flex justify-center flex-col items-center p-3 text-center"
        >
            <a
                :href="`https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}`"
                target="_blank"
            >
                <figure
                    class="w-32"
                >
                    <img 
                        :src="element.snippet.thumbnails.medium.url" 
                        class="icon text-6xl w-full object-contain images"
                    />
                </figure>
                <h2
                    class="mt-1 text-sm dark:text-white"
                >
                    {{ handleHeadlines(element.snippet.title) }}
                </h2>
            </a>
        </li>
    </ul>
</template>
<style>
.images {
    image-rendering: pixelated;
}
</style>
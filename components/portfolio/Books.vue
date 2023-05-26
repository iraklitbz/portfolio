<script setup>
    const runtimeConfig = useRuntimeConfig()
    const apiKey = runtimeConfig.youtube_api_key
    const UID = runtimeConfig.google_books_id
    const url = `https://www.googleapis.com/books/v1/users/${UID}/bookshelves/4/volumes`
    const { data } = await useFetch(url)
    const books = data._rawValue.items
    const emit = defineEmits(['childEvent']);
    const box = ref(null)
    let detailBook = ref(null)
    let titleBook = ref(null)
    let urlBook = ref(null)
    let modalIsActive = ref(false)
    const handleDetail = (title, description, url) => {
        modalIsActive.value = !modalIsActive.value
        titleBook = title,
        detailBook = description,
        urlBook = url
    }
    console.log(books)
    const handleCloseModal = () => {
        modalIsActive.value = !modalIsActive.value
    }
    onMounted(() => {
        emit('updateLengthFiles', books.length)
        emit('updateScrollHeight', box._rawValue.offsetHeight)
    })
    const handleHeadlines = (headline) => {
        return headline.replace(/\([^()]*\)/g, '').replace(/"/g, '').replace(/[\[\(].*?[\]\)]/g, "").replace(/(^|-)([^ -])/g, "$1 $2").trim();
    }
    
</script>
<template>
    <ul
        ref="box"
        class="grid grid-cols-2 md:grid-cols-5 gap-4 pl-2 pr-4 pb-6 py-3 w-[calc(100%-10px)]"
    >
        <li
            v-for="(element, index) in books"
            :key="index"
            class="text-base flex justify-center flex-col items-center"
            @click="handleDetail(element.volumeInfo.title, element.volumeInfo.description, element.volumeInfo.infoLink)"
        >
            <figure
                v-if="element.volumeInfo.imageLinks"
                class="w-32"
            >
                <img 
                    :src="element.volumeInfo.imageLinks.smallThumbnail" 
                    class="icon text-6xl w-full h-full images object-fill"
                />
            </figure>
            <figure
                v-else
                class="w-32 bg-gray-100 h-[194px] flex items-center justify-center dark:bg-black"
            >
                <nuxt-icon 
                    name="computer-bad" 
                    size="300px"
                    class="icon text-7xl dark:text-white"
                />
            </figure>
            <h2
                class="mt-1 text-sm dark:text-white"
            >
                {{ handleHeadlines(element.volumeInfo.title) }} {{ element.volumeInfo.authors ? '- ' + element.volumeInfo.authors[0] : '' }}
            </h2>
        </li>
        <div
            v-if="modalIsActive"
            class="fixed z-50"
            v-click-outside="handleCloseModal"
        >
            <Modal 
                :description="detailBook"
                :title="titleBook"
                :url-book="urlBook"
            />
        </div>
    </ul>
</template>
<style>
.images {
    image-rendering: pixelated;
}
</style>
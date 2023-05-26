<script>
import Webs from '~/components/portfolio/Webs.vue'
import Dribble from '~/components/portfolio/Dribble.vue'
import Papelera from '~/components/portfolio/Papelera.vue'
import Musica from '~/components/portfolio/Musica.vue'
import Books from '~/components/portfolio/Books.vue'
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        folderName: {
            type: String,
            default: 'Webs'
        },
        componentName: {
            type: String,
            default: 'Webs'
        }
    },
    components: {
        Webs,
        Dribble,
        Papelera,
        Musica,
        Books
    },
    data () {
        return {
            lengthFiles: 0,
            randomNumber: 0,
            scrollHeight: null,
            scrollPosition: null
        }
    },
    watch: {
        lengthFiles () {
            this.randomNumber = Math.floor(Math.random() * 1000) + (Math.random() * 99 / 100).toFixed(2);
        }
    },
    mounted () {
        this.$refs.componente.addEventListener('scroll', () => {
            this.scrollPosition = this.$refs.componente.scrollTop
        })
    },
    methods: {
        handleUpdateLenthFiles (length) {
            this.lengthFiles = length
        },
        handleUpdateScrollHeight (height) {
            this.scrollHeight = height
        }
    }
}
</script>
<template>
    <section
        class="w-full lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-6xl bg-gray-200 dark:bg-black"
    >
        <header
            class="flex justify-between items-center p-1 bg-gray-200 dark:bg-black relative"
        >
            <div
                class="text-center cursor-pointer flex items-center w-5 h-5 border-2 border-solid border-gray-500 dark:border-black absolute left-5 bg-white dark:bg-white top-1/2 -translate-y-1/2 z-10"
                @click="$emit('updateCloseFolder', this.id)"
            ></div>
            <div
                class="flex hero flex-1 justify-center"
            >
                <div
                    class="flex items-center justify-center bg-gray-200 dark:bg-black px-2"
                >
                    <NuxtIcon 
                        name="folder-open" 
                        size="20px"
                        class="icon text-3xl mr-2 dark:text-white"
                    />
                    <h3
                    class="text-base dark:text-white"
                    >
                        {{ folderName }}  
                    </h3>
                </div>
            </div>
        </header>
        <div
            class="border-l border-t border-solid border-black dark:border-white m-2"
        >
            <header
                class="border-b border-r border-solid border-black p-2 flex items-center justify-center bg-gray-200 dark:bg-black"
            >
                <span
                    class="text-sm dark:text-white"
                >
                    {{ lengthFiles }} items, {{ randomNumber }} KB
                </span>
            </header>
            <div 
                ref="componente"
                class="p-2 bg-white dark:bg-neutral-800 relative md:h-96 overflow-y-auto"
            >
                <component
                    :is="componentName"
                    @updateLengthFiles="handleUpdateLenthFiles"
                    @updateScrollHeight="handleUpdateScrollHeight"
                    @updateScrollPosition="handleUpdateScrollPosition"
                >
                </component>
                <ScrollBar 
                    :scroll-height="scrollHeight"
                    :scroll-position="scrollPosition"
                />
            </div>
        </div>
    </section>
</template>
<style>
.hero {
    background-color: #e5e5f7;
    opacity: 0.8;
    background-size: 4px 4px;
    background-image:  repeating-linear-gradient(0deg, #333, #333 1px, #ddd 1px, #ddd);
}
.dark .hero {
    background-color: #111;
    opacity: 0.8;
    background-size: 4px 4px;
    background-image:  repeating-linear-gradient(0deg, #888, #888 1px, #111 1px, #111);
}
</style>
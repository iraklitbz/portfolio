<script>
export default {
    data () {
        return {
            webs: [
                {
                    name: 'Noel Rayo',
                    url: 'https://noelrayo.com/',
                    icon: 'computer'
                },
                {
                    name: 'Purista',
                    url: 'https://purista.ge/',
                    icon: 'computer'
                },
                {
                    name: 'dribe',
                    url: 'https://dribe.es/',
                    icon: 'computer'
                },
                {
                    name: 'Jauregui',
                    url: 'https://nachojauregui.com/',
                    icon: 'computer'
                },
                {
                    name: 'Jauregui',
                    url: 'https://administracionesvesta.com/',
                    icon: 'computer'
                },
                {
                    name: 'Bolsamania',
                    url: 'https://www.bolsamania.com/',
                    icon: 'computer'
                },
                {
                    name: 'More...',
                    url: 'https://github.com/',
                    icon: 'computer'
                }
            ]
        }
    },
    mounted () {
        this.$emit('updateLengthFiles', this.webs.length)
    }
}
</script>
<template>
    <ul
        class="flex items-center flex-wrap w-[calc(100%-20px)]"
    >
        <li
            v-for="(element, index) in webs"
            :key="index"
            class="text-base items-center p-3 w-1/2 md:w-auto text-center"
        >
            <a
                :href="element.url"
                target="_blank"
                class="flex justify-center flex-col items-center dark:text-white"
            >
                <NuxtIcon 
                    :name="element.icon" 
                    class="icon text-6xl"
                />
                {{ element.name }}
            </a>
        </li>
    </ul>
</template>
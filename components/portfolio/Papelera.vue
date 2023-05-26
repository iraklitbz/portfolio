<script>
export default {
    data () {
        return {
            papelera: [
                {
                    name: 'Soon...',
                    url: 'https://www.google.com',
                    icon: 'pdf'
                }
            ]
        }
    },
    mounted () {
        this.$emit('updateLengthFiles', this.papelera.length)
    }
}
</script>
<template>
    <ul
        class="flex items-center"
    >
        <li
            v-for="(element, index) in papelera"
            :key="index"
            class="text-base flex justify-center flex-col items-center p-3 dark:text-white"
        >
            <NuxtIcon 
                :name="element.icon" 
                class="icon text-6xl"
            />
            {{ element.name }}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'Grid',
    data() {
        return {
            logo: 'irakli',
            randomNumber: 0
        }
    },
    mounted() {
        this.randomNumber = Math.floor(Math.random() * this.logo.length)
    }
}
</script>
<template>
    <div class="main-logo text-7xl lg:text-9xl">
        <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
            <div
                v-for="(letter, index) in logo" 
                :key="index"
                class="flex items-center justify-center h-28 sm:h-44 border-opacity-5"
                :class="index === randomNumber ? 'kernit-outline bg-blue-700' : 'kernit'"
            >
                <span
                    :class="index === randomNumber ? 'text-white' : 'text-blue-700'"
                >
                    {{ letter }}
                </span>
            </div>
        </div>
    </div>
</template>
<style>
.logobox {
    background-color: #0d0d0d;
}
.kernit {
    font-family: 'kernit', sans-serif;
}
.kernit-outline {
    font-family: 'kernit-outline', sans-serif;
}
</style>
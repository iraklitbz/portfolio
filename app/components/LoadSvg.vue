<script setup lang="ts">
interface LoadSvgProps {
  name: string
}

const props = withDefaults(defineProps<LoadSvgProps>(), {
  name: ''
})

const url = computed(() => {
  try {
    return require(`@/assets/svg/${props.name}.svg?inline`)
  } catch (e) {
    return `<small class='svg-error'><i>Error: cannot find file: ${props.name}.svg</i></small>`
  }
})
</script>
<template>
    <span class="ax-svg" :class="`ax-svg-${name}`" v-html="url"></span>
</template>

<style lang="scss">
.ax-svg {
    display: inline-flex;
    svg {
        display: block;
        width: 100%;
        height: auto;
    }
    .svg-error {
        display: inline-block;
        font-size: 0.75em;
        color: red;
        border: 1px solid;
        padding: 5px;
        cursor: help;
    }
}
</style>

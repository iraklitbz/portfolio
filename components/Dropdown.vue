<script>
export default {
    props: {
        dropdown: {
            type: Array,
            default: () => []
        },
        hasDropdown: {
            type: Boolean,
            default: false
        },
        url: {
            type: String,
            default: ''
        },
        redirect: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<template>
    <ul>
        <li
            v-for="(element, index) in dropdown"
            class="text-base p-3 text-left hover:bg-black hover:text-white cursor-pointer flex items-center"
            :class="hasDropdown ? 'bg-white text-black' : 'text-black'"
        >
            <NuxtIcon 
                v-if="element.icon"
                :name="element.icon" 
                class="icon text-2xl mr-2"
            />
            <a
            v-if="element.url"
                :href="element.url"
                target="_blank"
            >
                {{ element.name }}
            </a>
            <span
                v-else
            >
                {{ element.name }}
            </span>
        </li>
    </ul>
</template>
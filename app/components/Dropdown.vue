<script setup lang="ts">
interface DropdownItem {
  id?: number
  name: string
  url?: string
  icon?: string
}

interface DropdownProps {
  dropdown?: DropdownItem[]
  hasDropdown?: boolean
  url?: string
  redirect?: boolean
}

withDefaults(defineProps<DropdownProps>(), {
  dropdown: () => [],
  hasDropdown: false,
  url: '',
  redirect: false
})

</script>
<template>
    <ul>
        <li
            v-for="(element, index) in dropdown"
            :key="index"
            class="text-base p-3 text-left hover:bg-black hover:text-white cursor-pointer flex items-center"
            :class="hasDropdown ? 'bg-white text-black' : 'text-black'"

        >
            <Icon 
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
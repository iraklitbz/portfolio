<script>
export default {
    data () {
        return {
            aboutMeActive: false,
            navbar: [
                {
                    id: 1,
                    name: 'Contacto',
                    hasDropdown: false,
                    dropdown: [
                        {
                            name: 'Instagram',
                            url: 'https://www.instagram.com/ika_87/',
                            icon: 'instagram'
                        },
                        {
                            name: 'Dribble',                         
                            url: 'https://dribbble.com/iraklitbz',
                            icon: 'dribbble'
                        },
                        {
                            name: 'Linkedin',
                            url: 'https://www.linkedin.com/in/irakli-tavberidze-47ba0338/',
                            icon: 'linkedin'
                        },
                        {
                            name: 'Send me an email',
                            url: 'mailto:iraklitbz@gmail.com',
                            icon: 'email'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Aparencia',
                    hasDropdown: false,
                    dropdown: [
                        {
                            id: 0,
                            name: 'Original'
                        },
                        {
                            id: 1,
                            name: 'Dark'                
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleSubMenu (item) {
            this.aboutMeActive = false
            const element = this.navbar.find(element => element.id === item.id)
            if (element.hasDropdown) {
                element.hasDropdown = false
            } else {
                this.navbar.forEach(element => {
                    element.hasDropdown = false
                })
                element.hasDropdown = true
            }
        },
        handleAboutMe () {
            this.navbar.forEach(element => {
                element.hasDropdown = false
            })
            this.aboutMeActive = !this.aboutMeActive
            if(this.aboutMeActive) {
                this.$emit('update-about')
            }
        },
        handleSubMenuClose () {
            this.aboutMeActive = false
            this.navbar.forEach(element => {
                element.hasDropdown = false
            })
        }
    }
}
</script>
<template>
    <header
        class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-6xl"
        v-click-outside="handleSubMenuClose"
    >
        <nav>
            <ul
                class="flex items-center"
            >
                <li
                    class="px-4 py-2 cursor-pointer relative text-red-500"
                >
                    Iraklitbz
                </li>
                <li
                    v-for="(element, index) in navbar"
                    class="px-4 py-2 cursor-pointer relative"
                    :class="element.hasDropdown ? 'bg-black text-white' : 'text-black'"
                    @click="handleSubMenu(element)"
                >
                    {{ element.name }}
                    <Dropdown 
                        v-if="element.hasDropdown && element.dropdown.length > 0"
                        :dropdown="element.dropdown"
                        class="absolute top-[41px] left-0 bg-white z-10 w-[240px] border-b-4 border-l border-r-4 border-solid border-black"
                        :has-dropdown="element.hasDropdown"
                        :icon="element.icon"
                    />
                </li>
                <li
                    class="px-4 py-2 cursor-pointer relative"
                    :class="aboutMeActive ? 'bg-black text-white' : 'text-black'"
                    @click="handleAboutMe"
                >
                    About me
                </li>
            </ul>
        </nav>
    </header>
</template>
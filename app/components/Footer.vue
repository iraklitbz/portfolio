<script setup lang="ts">
interface SocialNetwork {
  name: string
  icon: string
  url: string
}

const socialNet = ref<SocialNetwork[]>([
  {
    name: 'Github',
    icon: 'github',
    url: 'https://github.com/iraklitbz'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/ika_87/'
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/irakli-tavberidze-47ba0338/'
  }
])
</script>
<template>
    <div class="main-logo text-9xl">
        <h2
          class="text-lg text-white font-bold mt-10 mb-2"
        >
          Contact me:
        </h2>
        <div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
            <a
                v-for="(element, index) in socialNet"
                :key="index"
                :href="element.url"
                target="_blank"
                class="border border-solid border-white border-opacity-5 flex items-center justify-center selection:bg-blue-700 text-base text-white"
            >
                <Icon 
                    :name="element.icon" 
                    size="50px"
                    class="icon text-3xl sm:text-4xl"
                />
            </a>
            <div class="col-span-3 sm:col-span-1 sm:col-end-7 border border-solid border-white box-dark border-opacity-5 selection:bg-blue-700 flex justify-center text-base items-center text-white">
                <p>iraklitbz | 2023</p>
            </div>
            
        </div>
    </div>
</template>
<style>
.kernit {
    font-family: 'kernit', sans-serif;
}
.icon {
   margin-bottom: 0px;
}
.box-dark {
    background-color: #000;
}
</style>
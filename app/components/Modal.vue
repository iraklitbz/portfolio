<script setup lang="ts">
interface ModalProps {
  title?: string
  description?: string
  urlBook?: string
}

withDefaults(defineProps<ModalProps>(), {
  title: '',
  description: '',
  urlBook: ''
})
</script>
<template>
    <section
        class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-2xl bg-gray-200 dark:bg-black"
    >
        <div
            class="border-t border-b-4 border-l border-r-4 border-solid border-black dark:border-white"
        >
            <div class="py-6 px-10 bg-white dark:bg-black relative h-96 overflow-y-auto flex flex-col justify-between">
                <div>
                    <h2
                        class="text-3xl mt-8 mb-4 text-center dark:text-white"
                    >
                        {{ title }}
                    </h2>
                    <h6
                        class="text-base text-center dark:text-white"
                    >
                        {{ description }}
                    </h6>
                </div>
                <div
                    class="divider h-5 bg-black dark:bg-white w-full"
                >

                </div>
                <ul class="flex flex-wrap gap-4 justify-center">
                    <li>
                        <a
                            :href="urlBook"
                            target="_blank"
                            class="flex items-center dark:text-white"
                        >
                        <Icon 
                            name="pdf" 
                            class="icon text-2xl mr-2 dark:text-white"
                        />
                            Ver más en detalle
                        </a>
                    </li>
                </ul>
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
.divider {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23323232' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
.dark .divider {
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23323232' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
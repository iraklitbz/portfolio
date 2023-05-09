<template>
    <section
        class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_3rem)] mx-auto max-w-xl  md:max-w-4xl bg-gray-200 dark:bg-black"
    >
        <div
            class="border-t border-b-4 border-l border-r-4 border-solid border-black dark:border-white"
        >
            <div class="py-6 px-10 bg-white dark:bg-black relative h-96 overflow-y-auto flex flex-col justify-between">
                <div>
                    <h2
                        class="text-3xl mt-8 mb-4 text-center dark:text-white"
                    >
                        Hi, im Irakli.
                    </h2>
                    <h6
                        class="text-base text-center dark:text-white"
                    >
                        I'm a frontend developer based in Madrid. I'm passionate about web development and been dedicated to it for the last 10 years. I'm currently working at TUI as a Senior frontend developer. Besides coding, i love books & music, i will share some of my favorites here.
                    </h6>
                </div>
                <div
                    class="divider h-5 bg-black dark:bg-neutral-600 w-full"
                >

                </div>
                <ul class="flex flex-wrap gap-4 justify-between">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/irakli-tavberidze-47ba0338/"
                            target="_blank"
                            class="flex items-center dark:text-white"
                        >
                            <NuxtIcon 
                                name="linkedin" 
                                class="icon text-2xl mr-2"
                            />
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/ika_87/"
                            target="_blank"
                            class="flex items-center dark:text-white"
                        >
                        <NuxtIcon 
                            name="instagram" 
                            class="icon text-2xl mr-2"
                        />
                        Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/iraklitbz"
                            target="_blank"
                            class="flex items-center dark:text-white"
                        >
                            <NuxtIcon 
                                name="github" 
                                class="icon text-2xl mr-2"
                            />
                            Github
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
.dark .hero {
    background-color: #333;
    opacity: 0.8;
    background-size: 4px 4px;
    background-image:  repeating-linear-gradient(0deg, #888, #888 1px, #333 1px, #333);
}
.divider {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23323232' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
.dark .divider {
    background-color: #111;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23323232' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
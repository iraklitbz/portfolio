<script>
export default {
    props: {
        scrollHeight: {
            type: Number,
            default: null
        },
        scrollPosition: {
            type: Number,
            default: null
        }
    },
    data () {
        return {
            fullScrollHeight: null
        }
    },
    computed: {
        scrollBarHeight () {
            const contentHeight = Math.min(this.fullScrollHeight, 200);
            const containerHeight = this.scrollHeight;
            const ratio = contentHeight / containerHeight;
            const minHeight = 20;
            const maxHeight = containerHeight;
            const thumbHeight = containerHeight * ratio;
            const finalThumbHeight = Math.min(maxHeight, Math.max(minHeight, thumbHeight));
            return `height: ${finalThumbHeight}px;`;
        },
        scrollBarPosition () {
            const contentHeight = this.fullScrollHeight;
            const containerHeight = this.scrollHeight;
            const ratio = contentHeight / containerHeight;
            const scrollPosition = this.scrollPosition;
            const thumbPosition = scrollPosition * ratio;
            return `top: ${Math.round(thumbPosition)}px;`;
        }
    },
    mounted () {
        this.fullScrollHeight = this.$refs.scrollBar.scrollHeight
    },
}
</script>
<template>
    <div
        class="scrollbar fixed left-[9px] bottom-[7px] flex justify-end bg-gray-200 w-[calc(100%-18px)] h-5"
    >
            <div
                class="border-t border-b border-solid border-black w-full h-5 flex justify-end"
            >
                <div
                    class="flex"
                >
                    <div
                        class="border-l border-r border-solid border-black px-1 flex items-center justify-center"
                    >
                        <NuxtIcon 
                            name="chevron-left" 
                            class="icon text-sm text-gray-400"
                        />
                    </div>
                    <div
                        class="border-r border-solid border-black px-1 flex items-center justify-center"
                    >
                        <NuxtIcon 
                            name="chevron-right" 
                            class="icon text-sm text-gray-400"
                        />
                    </div>
                </div>
            </div>
            <div
                class="w-5 text-gray-400"
            >
            //
            </div>
        </div>
        <div
            ref="scrollBar"
            class="scrollbar fixed right-[8px] top-[87px] h-[calc(100%-113px)] w-5 border-l border-r border-b border-solid border-black flex items-end  bg-gray-200 overflow-hidden"
        >
            <div
                class="flex flex-col w-5 relative z-40 bg-slate-200"
            >
                <div
                    class="border-t border-solid border-black py-1 flex items-center justify-center"
                >
                    <NuxtIcon 
                        name="chevron-up" 
                        class="icon text-sm text-gray-400"
                    />
                </div>
                <div
                    class="border-t border-solid border-black py-1 flex items-center justify-center"
                >
                    <NuxtIcon 
                        name="chevron-down" 
                        class="icon text-sm text-gray-400"
                    />
                </div>
            </div>
            <div
                v-if="scrollHeight > 360"
                class="bg-gray-500 w-full z-10 absolute"
                :style="`${scrollBarHeight}; ${scrollBarPosition}`"
            ></div>
        </div>
</template>
<script>
export default {
    name: 'GridContent',
    data() {
        return {
            porfolio: [
                {
                    title: 'Dribe',
                    url: 'https://dribe.es',
                    icon: 'ი'
                },
                {
                    title: 'Noel Rayo',
                    url: 'https://noelrayo.com/',
                    icon: 'რ'
                },
                {
                    title: 'Jauregui',
                    url: 'https://nachojauregui.com/',
                    icon: 'ა'
                },
                {
                    title: 'Iberiainfo',
                    url: 'https://www.iberiainfo.org/',
                    icon: 'კ'
                },
                {
                    title: 'Vesta',
                    url: 'https://administracionesvesta.com/',
                    icon: 'ლ'
                },
                {
                    title: 'More...',
                    url: 'https://github.com/iraklitbz',
                    icon: 'ი'
                }
            ]
        }
    }
}
</script>
<template>
    <div class="main-logo">
        <ul>
            <li
                v-for="(element, index) in porfolio"
                :key="index"
                class="box relative border-t border-r border-l border-solid border-white border-opacity-5 py-2"
                :class="index + 1 === porfolio.length ? 'border-b' : ''"
            >
                <a
                    :href="element.url"
                    target="_blank"
                >
                    <p class=" text-amber-500 cursor-pointer">{{ element.title }}</p>
                    <span 
                        class="special"
                    >
                        {{ element.title }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>
<style>
.kernit {
    font-family: 'kernit', sans-serif;
}
.box span {
    transform: scale(1) translate(-50%, -50%);
    transform-origin: center;
    transition: all 0.3s ease-in-out;
    top: 50%;
    left: 50%;
}
.box {
    transition: all 0.3s ease-in-out;
    background: transparent;
}
.box p {
    transition: all 0.3s ease-in-out;
    transform-origin: center;
    bottom: 10px;
    padding-left: 10px;
}
.box .special {
    position: absolute;
    left: 10px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
}
.box:hover .special {
    opacity: 1;
}
.box:hover p, .box p:hover {
    bottom: 40%;
    color: #fff;
    transform: translate(-100%, -0%);
}
.georgian {
    font-family: 'Noto Sans Georgian', serif;
    font-weight: bold;
}
</style>
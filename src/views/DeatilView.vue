<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4382237_455boicrews.css">
    <div class="buttom_group">
        <button @click="goBack()" class="opt_button"><i class="iconfont icon-close"></i></button>

        <div class="switch">
            <button @click="prevPage()" class="opt_button"><i class="iconfont icon-left"></i></button>
            <button @click="nextPage()" class="opt_button"><i class="iconfont icon-right"></i></button>
        </div>
    </div>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from '../router/index'

function goBack() {
    router.push('/')
}


function nextPage() {
    const detailRoute = router.options.routes[1];

    if (detailRoute && detailRoute.children) {
        const names = detailRoute.children.map(child => child.name);
        const currentName = router.currentRoute.value.name;
        const currentIndex = names.findIndex(name => name === currentName);
        let nextIndex;
        if (currentIndex === -1 || currentIndex === names.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = currentIndex + 1;
        }
        router.push({ name: names[nextIndex] });
    }
}

function prevPage() {
    const detailRoute = router.options.routes[1];

    if (detailRoute && detailRoute.children) {
        const names = detailRoute.children.map(child => child.name);
        const currentName = router.currentRoute.value.name;
        const currentIndex = names.findIndex(name => name === currentName);
        let prevIndex;
        if (currentIndex === -1 || currentIndex === 0) {
            prevIndex = names.length - 1;
        } else {
            prevIndex = currentIndex - 1;
        }
        router.push({ name: names[prevIndex] });
    }
}

</script>

<style scoped>
.buttom_group {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
}

.opt_button {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: 0.1em solid #fff;
    margin: 0.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.opt_button:hover {
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.iconfont {
    display: block;
    color: #4298e7;
    font-size: 1.5em;
    font-weight: 900;
}
</style>
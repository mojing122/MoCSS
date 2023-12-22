<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {

    const navigationBarItems = document.querySelectorAll(".nav-item");
    navigationBarItems.forEach(function (item) {
        item.addEventListener("click", function (this: any) {

            navigationBarItems.forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
            const prevAllLength = Array.from(this.parentNode.children).indexOf(this);
            let overlay = document.querySelector<HTMLElement>(".nav-overlay");
            if (overlay != null) {
                overlay.style.left = prevAllLength * 24 + "%";
            }
        });

    });

})


</script>

<template>
    <body>
        <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4382237_455boicrews.css">
        <nav class="nav">
            <div class="nav-item active">
                <span class="nav_icon">
                    <i class="iconfont icon-dashboard"></i>
                </span>
                <span class="text">Home</span>
            </div>
            <div class="nav-item">
                <span class="nav_icon">
                    <i class="iconfont icon-message"></i>
                </span>
                <span class="text">Message</span>
            </div>
            <div class="nav-item">
                <span class="nav_icon">
                    <i class="iconfont icon-bell"></i>
                </span>
                <span class="text">News</span>
            </div>
            <div class="nav-item">
                <span class="nav_icon">
                    <i class="iconfont icon-user"></i>
                </span>
                <span class="text">Profile</span>
            </div>
            <div class="nav-overlay"></div>
        </nav>

    </body>
</template>

<style scoped>
body {
    width: 100vw;
    height: 30vh;
    background-color: #7dbfff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav {
    height: 5em;
    width: 85%;
    max-width: 40em;
    min-width: 18em;
    background-color: #fff;
    box-shadow: 0 2em 3em 0 rgba(0, 0, 0, 0.2);
    border-radius: 2em 2em 5em 5em;
    overflow: hidden;
    border: 0.3em solid #fff;
    display: flex;
    position: relative;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 23%;
    flex-shrink: 0;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    z-index: 2;
}

.nav-item.active {
    width: 31%;
}

.nav-item.active .nav_icon {
    transform: translateY(-15px);
}

.nav-item.active .text {
    opacity: 1;
    transform: translateY(10px);
}

.nav-overlay {
    border-radius: 2vh;
    background-color: #e4f2ff;
    height: 100%;
    width: 28%;
    position: absolute;
    left: 0;
    top: 0;
    transform: 0.3s;
}

.nav_icon {
    transition: 0.3s;
}

.iconfont {
    display: block;
    color: #4298e7;
    font-size: 2em;
    transition: 0.3s;
    line-height: 1;
    transform: translateY(0.05em);
}

.text {
    display: block;
    font-weight: 600;
    font-size: 1em;
    color: #4298e7;
    opacity: 0;
    transition-duration: 0.3s;
    transform: translateY(20px);
    user-select: none;
    margin-top: -1.5em;
}
</style>
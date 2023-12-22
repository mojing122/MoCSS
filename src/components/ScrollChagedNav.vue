<template>
    <body>
        <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4382237_455boicrews.css">
        <div class="box">
            <nav id="navbar">
                <a href="#" class="brand">
                    <span><i class="iconfont icon-apple-fill brand"></i></span>
                    <span style="font-weight: bold;">Apple</span>
                </a>
                <ul>
                    <li style="--i:0" id="l1">
                        <a href="#">
                            <span style="font-weight: bold;">Home</span>
                            <span><i class="iconfont icon-home"></i></span>
                        </a>
                    </li>
                    <li style="--i:1" id="l2">
                        <a href="#">
                            <span style="font-weight: bold;">Videos</span>
                            <span><i class="iconfont icon-video"></i></span>
                        </a>
                    </li>
                    <li style="--i:2" id="l3">
                        <a href="#">
                            <span style="font-weight: bold;">Photos</span>
                            <span><i class="iconfont icon-camera"></i></span>
                        </a>
                    </li>
                    <li style="--i:3" id="l4">
                        <a href="#">
                            <span style="font-weight: bold;">Team</span>
                            <span><i class="iconfont icon-team"></i></span>
                        </a>
                    </li>
                    <li style="--i:4" id="l5">
                        <a href="#">
                            <span style="font-weight: bold;">Contact</span>
                            <span><i class="iconfont icon-mail"></i></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div style="overflow-y: auto;">
                <div class="page">
                    <p>
                        We want you to have the simplest, easiest buying experience possible. But we know you might have a
                        few questions. Read on for details about purchasing, shipping, checking order status, returns, and
                        more.
                    </p>
                    <p>
                        Check order status, track or change your order, return items and more.
                    </p>
                    <p>
                        To create an Apple ID (typically your email address) or sign in using an existing Apple ID, click
                        here(Opens in a new window). If you have made purchases through the iTunes Store, you can use the
                        same Apple ID. By using your Apple ID, you can personalize your online shopping experience. You can
                        save items you’re interested in purchasing, save a bag if you’re almost ready to place an order,
                        check the status of or change your order, check Apple Gift Card balances, and much more.
                    </p>
                    <p>
                        Additionally, your Apple ID gives you access to other Apple resources. Sign in to Your Account(Opens
                        in a new window) to begin taking advantage of them:

                        The iTunes Store, for buying music, movies, and TV shows
                        The App Store, for buying and downloading iOS and OSX applications
                        Register your Apple products online
                        Access AppleCare support for your products
                        Ordering photos and photo books with iPhoto or Aperture
                        Getting One to One personal training and other services at an Apple Store

                    </p>
                    <p>
                        We want you to have the simplest, easiest buying experience possible. But we know you might have a
                        few questions. Read on for details about purchasing, shipping, checking order status, returns, and
                        more.
                    </p>
                    <p>
                        Check order status, track or change your order, return items and more.
                    </p>
                    <p>
                        To create an Apple ID (typically your email address) or sign in using an existing Apple ID, click
                        here(Opens in a new window). If you have made purchases through the iTunes Store, you can use the
                        same Apple ID. By using your Apple ID, you can personalize your online shopping experience. You can
                        save items you’re interested in purchasing, save a bag if you’re almost ready to place an order,
                        check the status of or change your order, check Apple Gift Card balances, and much more.
                    </p>
                    <p>
                        Additionally, your Apple ID gives you access to other Apple resources. Sign in to Your Account(Opens
                        in a new window) to begin taking advantage of them:

                        The iTunes Store, for buying music, movies, and TV shows
                        The App Store, for buying and downloading iOS and OSX applications
                        Register your Apple products online
                        Access AppleCare support for your products
                        Ordering photos and photo books with iPhoto or Aperture
                        Getting One to One personal training and other services at an Apple Store

                    </p>
                    <p>
                        Check order status, track or change your order, return items and more.
                    </p>
                    <p>
                        To create an Apple ID (typically your email address) or sign in using an existing Apple ID, click
                        here(Opens in a new window). If you have made purchases through the iTunes Store, you can use the
                        same Apple ID. By using your Apple ID, you can personalize your online shopping experience. You can
                        save items you’re interested in purchasing, save a bag if you’re almost ready to place an order,
                        check the status of or change your order, check Apple Gift Card balances, and much more.
                    </p>
                    <p>
                        Additionally, your Apple ID gives you access to other Apple resources. Sign in to Your Account(Opens
                        in a new window) to begin taking advantage of them:

                        The iTunes Store, for buying music, movies, and TV shows
                        The App Store, for buying and downloading iOS and OSX applications
                        Register your Apple products online
                        Access AppleCare support for your products
                        Ordering photos and photo books with iPhoto or Aperture
                        Getting One to One personal training and other services at an Apple Store

                    </p>
                </div>
            </div>
        </div>
    </body>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    const navbar = document.getElementById("navbar");
    const parentElement = document.querySelector('.box');
    if (parentElement)
        parentElement.addEventListener("scroll", function () {
            let scrollTop = parentElement.scrollTop < 5;
            if (!scrollTop) {
                navbar?.classList.add('icon');
            } else {
                navbar?.classList.remove('icon');
            }
        })
})
</script>

<style scoped>
body {
    width: 100vw;
    padding-top: 5rem;
    background-color: rgb(14, 14, 63);
    z-index: -2;
    font-family: Arial, Helvetica, sans-serif;
}

p {
    margin: 20px;
}

a:hover {
    background-color: transparent;
}

.box {
    width: 80vw;
    height: 80vh;
    margin: auto;
    background-color: #222;
    border-radius: 0.5rem;
    border: 2px solid transparent;
    box-shadow: 0 1em 2em 0 rgba(80, 94, 144, 0.3);
    overflow-y: auto;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #222, #222), linear-gradient(90deg, #6a2daf, #102f6b);
}

.page {
    min-height: 200vh;
    background-color: #262626;
}

.box::-webkit-scrollbar {
    width: 0em;
}

nav {
    position: sticky;
    top: 0;
    width: auto;
    height: 80px;
    background-color: #fff;
    padding: 0 50px;
    transition: 0.5s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon {
    background-color: #444;
}

ul {
    display: flex;
}

ul li {
    list-style: none;
}

ul li a {
    position: relative;
    color: #333;
    padding: 5px 20px;
    font-size: 1.1em;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.icon ul li a {
    color: #fff;
}

ul li a span {
    transition: 0.5s;
    transition-delay: calc(0.05s * var(--i));
}

ul li a span:nth-child(2) {
    position: absolute;
    transform: translateY(45px);
}

.icon ul li a span:nth-child(1) {
    transform: translateY(-30px);
}

.icon ul li a span:nth-child(2) {
    transform: translateY(3px);
}

.icon-home,
.icon-video,
.icon-camera,
.icon-team,
.icon-mail {
    font-size: 1.6em;
}

.icon-home:hover,
.icon-video:hover,
.icon-camera:hover,
.icon-team:hover,
.icon-mail:hover {
    color: #0f0
}

.brand {
    position: relative;
    font-size: 1.8em;
    text-decoration: none;
    color: #333;
    padding: 5px 0;
}

.brand span {
    transition: 0.5s;
    display: block;
}

.brand span:nth-child(1) {
    position: absolute;
    transform: translateY(-100px);
    opacity: 0;
    font-size: 1.2em;
}

.icon .brand span:nth-child(1) {
    opacity: 1;
    transform: translateY(-25px);
}

.iconfont {
    color: #fff;
}

.icon .brand span:nth-child(2) {
    transform: translateY(85px);
    opacity: 0;
}


#l2,
#l3,
#l4,
#l5 {
    display: none;
}

@media (min-width: 800px) {

    #l2,
    #l3,
    #l4,
    #l5 {
        display: block;
    }
}
</style>
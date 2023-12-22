<template>
    <body>
        <div class="box">
            <p style="padding-bottom: 20px; font-size:2rem; font-weight: 800; color: #af8fef;">超链接增加炫酷的聚光灯效果</p>
            <p>
                It is spring again and the window can be left open as often as one would like. As spring comes in
                through
                the windows, so people -- <a href="#">unable to bear staying inside any longer</a> -- go outdoors.
            </p>
            <p>
                The spring outside, however, is much too cheap, for the sun shines on everything, and so does not seem
                as
                bright as that which shoots into the darkness of the house. <a href="#">Outside the sun-sloshed breeze blows
                    everywhere,</a>
                but it is not so lively as that which stirs the gloominess inside the house.
            </p>
            <p>
                Even the chirping of the birds sounds so thin and broken that the quietness of the house is needed to
                set it
                off. <a href="#">It seems that spring was always meant to be put behind a windowpane for show</a>, just like
                a
                picture
                in a
                frame.
            </p>
        </div>
    </body>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

function setLinkPositions() {
    document.querySelectorAll('a').forEach((a) => {
        const bounding = a.getBoundingClientRect();

        a.style.setProperty('--positionX', `${bounding.x}px`);
        a.style.setProperty('--positionY', `${bounding.y}px`);
    })
}

onMounted(() => {
    let Body = document.querySelector<HTMLElement>("body");
    let Box = document.querySelector<HTMLElement>(".box");
    if (Body != null) {
        Body.addEventListener('mousemove', (e: any) => {
            if (Box != null) {
                Box.style.setProperty('--x', `${e.clientX}px`);
                Box.style.setProperty('--y', `${e.clientY}px`);
            }
        })
    }

    setLinkPositions();
    window.addEventListener('resize', setLinkPositions);
})
</script>

<style scoped>
:root {
    font-size: 15px;

}

body {
    width: 100vw;
    padding-top: 10%;
    font-size: 1.2rem;
    font-family: Helvetica, sans-serif;
    background-color: #020617;
    color: #94a3b8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    --lighting-size: 100px;
    --lighting-color: #9333ea;
    --lighting-highlight-color: #d8b4fe;
}

div {
    padding: 40px;
}

.box {
    --x: 0px;
    --y: 0px;
}

p {
    font-weight: bold;
    margin-top: 5px;
    /*border-bottom: 0.2px solid rgba(100, 100, 100, 0.5);*/
}

a {
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    color: #9333ea;
    margin-top: -5px;

    background-image: radial-gradient(var(--lighting-highlight-color), var(--lighting-color), var(--lighting-color));
    background-size: var(--lighting-size) var(--lighting-size);
    background-repeat: no-repeat;
    background-position-x: calc(var(--x) - var(--positionX) - calc(var(--lighting-size) / 2));
    background-position-y: calc(var(--y) - var(--positionY) - calc(var(--lighting-size) / 2));
    background-color: var(--lighting-color);

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}
</style>
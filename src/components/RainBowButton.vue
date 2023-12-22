<template>
    <body>

        <a href="#">BUTTON</a>

    </body>
</template>

<script setup lang="ts">

</script>

<style scoped>
body {
    width: 100vw;
    height: 100vh;
    background-color: #13033c;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    position: absolute;
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 55px;
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    text-decoration: none;
    font-family: sans-serif;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    border-radius: 30px;
    background-size: 400%;
    z-index: 1;
}

a:hover {
    animation: animate 8s linear infinite;
}

a::before {
    content: '';
    position: absolute;
    inset: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
}

a:hover::before {
    filter: blur(20px);
    opacity: 0.6;
    animation: animate 8s linear infinite;

}

@keyframes animate {
    from {
        background-position: 0%;
    }

    to {
        background-position: 400%;
    }
}
</style>
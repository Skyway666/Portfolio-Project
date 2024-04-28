<template>
    <div>
        <h1 class="title">I am Lucas</h1>
        <div class="body">
            <p>
                Welcome to my Developer Portfolio!
            </p>
            <p>
                My passion for videogames led me to study game development, where I fell in love with transforming data. Since I like and am proud of my work, I created this place place to keep track of it and share it with the world.
            </p>
            <p>
                Feel free to contact me if my projects spark your interest, I'm a chatty and easy going guy who allways likes talking about development!
            </p>
            <div class="buttons">
                <sui-button color=black size=big>See CV</sui-button>
                <sui-button color=grey size=big @click="onContactMe">Contact me</sui-button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        onContactMe(){
            window.location = "mailto:lucasgaricamateu@gmail.com"
        }
    }
}
</script>


<style scoped>
    .title{
        font-size: 70px;
        padding-top: 250px;
    }
    .body{
        font-size: 18px;
        padding: 0px 35%;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 30px
    }
</style>
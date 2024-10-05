<template>
    <div class="background">
        <h1 class="title">I am Lucas</h1>
        <div>
            <p>
                Welcome to my Developer Portfolio!
            </p>
            <p>
                My passion for videogames led me to study game development, where I fell in love with transforming data. Since I like and am proud of my work, I created this place to keep track of it and share it with the world.
            </p>
            <p>
                Feel free to contact me if my projects spark your interest, I'm a chatty and easy going guy who always likes talking about development!
            </p>
            <div class="buttons">
                <sui-button color=black size=big @click="onDownloadCV">Download CV</sui-button>
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
        },
        onDownloadCV(){
            const link = document.createElement('a');
            link.href = 'downloads/Lucas Garcia Mateu - CV.pdf'; // Replace with your file path
            link.download = 'Lucas Garcia Mateu - CV.pdf'; // Optional: Set the default file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>


<style scoped>
    .background{
        max-width: 500px;
    }
    .title{
        font-size: 70px;
        margin-top: -10vh;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 30px;
    }
</style>
<template>
    <div class="background">
        <Carousel
            v-if="$isLandscape()"
            class="carousel"
            :images="$store.state.projects.map((project) => project.thumbnail)"
        />
        <div class="content">
            <!-- Title -->
            <h1 class="title">I am Lucas</h1>
            <!-- Description -->
            <div>
                <p>Welcome to my Developer Portfolio!</p>
                <p>
                    My passion for videogames led me to study game development,
                    where I fell in love with transforming data. Since I like
                    and am proud of my work, I created this place to keep track
                    of it and share it with the world.
                </p>
                <p>
                    Feel free to contact me if my projects spark your interest,
                    I'm a chatty and easy going guy who always likes talking
                    about development!
                </p>
                <!-- Buttons -->
                <div class="buttons">
                    <sui-button color="black" size="big" @click="onDownloadCV">
                        Download CV
                    </sui-button>
                    <sui-button color="grey" size="big" @click="onContactMe">
                        Contact me
                    </sui-button>
                </div>
            </div>
        </div>
        <Carousel
            class="carousel"
            :images="$store.state.projects.map((project) => project.thumbnail)"
        />
    </div>
</template>

<script>
    import Carousel from "../components/Carousel.vue";

    export default {
        methods: {
            onContactMe() {
                window.location = "mailto:lucasgaricamateu@gmail.com";
            },
            onDownloadCV() {
                const link = document.createElement("a");
                link.href = "downloads/Lucas Garcia Mateu - CV.pdf"; // Replace with your file path
                link.download = "Lucas Garcia Mateu - CV.pdf"; // Optional: Set the default file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },
        },
        components: {
            Carousel,
        },
    };
</script>

<style scoped>
    .background {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .title {
        font-size: 70px;
    }
    .carousel {
        height: 100%;
        width: 30%;
    }
    .content {
        max-width: 33%;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 30px;
    }

    @media (max-width: 480px) {
        .background {
            height: unset;
            flex-grow: 1;
            padding-top: 130px;
            padding-bottom: 130px;
            flex-direction: column;
        }
        .content {
            min-width: 90%;
        }
        .carousel {
            margin-top: 30px;
            height: 50vh;
            width: 100%;
        }
    }
</style>

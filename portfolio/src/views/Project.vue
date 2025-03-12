<template>
    <div class="background">
        <!-- Layout media -->
        <div class="graphics-section">
            <div v-for="(layoutMediaItem, index) in project.layoutMedia" :key="index" class="graphic-wrapper">
                <img v-if="layoutMediaItem.type == 'IMAGE' " :src="layoutMediaItem.src" class="graphic"/>
                <iframe v-if="layoutMediaItem.type == 'VIDEO'"  :src="layoutMediaItem.src"
                    class="graphic video" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen/>
            </div>
        </div>

        <!-- Text section -->
        <div class="text-section">
            <!-- Header -->
            <div class="header">
                <div class="header-left">
                    <!-- Title -->
                    <div class="header-title">
                        {{ project.title }}
                    </div>
                    <!-- Specifications -->
                    <div class="header-specifications">
                        <!-- Year -->
                        <div class="header-specification">
                            <sui-icon name="calendar"/>
                            <div>{{ project.specifications.year }}</div>
                        </div>
                        <!-- Duration -->
                        <div class="header-specification">
                            <sui-icon name="stopwatch"/>
                            <div>{{ project.specifications.duration }}</div>
                        </div>
                        <!-- Team Size -->
                        <div class="header-specification">
                            <sui-icon name="users"/>
                            <div>{{ project.specifications.teamSize }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Long description -->
            <div v-html="project.longDescription"/>

            <!-- Links -->
            <div class="text-section-links">
                <sui-button v-for="(linkButton, index) in project.linkButtons" @click="openLink(linkButton.link)" :key="index">
                    {{ linkButton.text }}
                </sui-button>
            </div>

            <!-- Tags -->
            <div class="text-section-tags">
                <div class="text-section-tags-label">Tags:</div>
                <sui-label v-for="(tag, index) in project.tags" :key="index">
                    {{tag}}
                </sui-label>
            </div>

            <!-- Contributions -->
            <div v-if="project.contributions.length != 0" class="text-section-title"> Contributions </div>
            <ul class="text-section-contributions">
                <li v-for="(contribution, index) in project.contributions" :key="index" v-html="contribution"/>
            </ul>
        </div>
        
        <!-- Navigation -->
        <div class="navigation">
            <sui-button v-if="projectIndex != 0" 
                class="navigation-previous"
                color="grey" size="large" icon="left arrow" 
                @click="$router.push('/project/' + getProjectName(projectIndex - 1))"/>
            <sui-button v-if="projectIndex != $store.getters.projects.length - 1" 
                class="navigation-next"
                color="grey" size="large" icon="right arrow" 
                @click="$router.push('/project/' + getProjectName(projectIndex + 1))"/>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        openLink(link){
            window.open(link);
        },
        getProjectName(projectIndex){
            return this.$store.getters.projects[projectIndex].name;
        }
    },
    computed: {
        project() {
            return this.$store.getters.projects.find(project => project.name === this.$route.params.name);
        },
        projectIndex(){
            return this.$store.getters.projects.findIndex(project => project.name === this.$route.params.name);
        }
    }
}
</script>
<style scoped>
    /*Background*/
    .background{
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-grow: 1;
    }

    /*Graphics*/
    .graphics-section{
        display: flex;
        flex-direction: column;
        width: 45%;
        gap: 20px;
        flex-shrink: 0;
    }
    .graphic-wrapper{
        display: flex;
        justify-content: flex-start;
    }
    .graphic{
        width: 90%;
        border-radius: 15px;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    }
    .video{
        aspect-ratio: 16/9;
    }

    /*Header*/
    .header{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .header-left{
        display: flex;
        flex-direction: column;
    }
    .header-title{
        font-size: 60px;
        line-height: 50px;
        height: fit-content;
        width: fit-content;
    }
    .header-specifications{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        font-size: 20px;
        gap: 30px;
    }
    .header-specification{
        display: flex;
        flex-direction: row;
    }

    /*Text*/
    .text-section{
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-grow: 1;
        gap: 20px;
    }
    .text-section-links{
        display: flex;
        flex-direction: row;
    }
    .text-section-tags{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        row-gap: 5px;
    }
    .text-section-tags-label{
        font-weight: bold;
        font-size: 15px;
        margin-right: 10px;
    }
    .text-section-title{
        font-size: 30px;
        font-weight: bold;
        margin-top: 20px;
    }
    .text-section-contributions{
        list-style-type: disc;
        padding-left: 20px;
        text-align: left;
    }

    /* Navigation */
    .navigation{
        position: fixed;
        bottom:5vh;
        left: 2.5%;
        width: 95%;
        height: 45px;
        z-index: 1;
    }
    .navigation-previous{
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
    }
    .navigation-next{
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
    }


    @media (max-width: 480px){
        .background{
            flex-direction: column-reverse;
        }
        .header{
            justify-content: center;
            margin-top: 35px;
        }
        .header-left{
            justify-content: center;
            align-items: center;
        }
        .header-title{
            text-align: center;
        }
        .graphics-section{
            width: 100%;
            margin-bottom: 20px;
        }
        .graphic-wrapper{
            display: flex;
            justify-content: center;
        }
        .navigation{
            top: 100px;
            bottom:unset;
        }
    }
</style>
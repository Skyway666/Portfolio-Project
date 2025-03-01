<template>
    <div class="background">
        <!-- Landscape graphics -->
        <div class="graphics-section" v-if="$isLandscape()">
            <img class="graphic" v-for="(layoutMediaItem, index) in project.layoutMedia" :src="layoutMediaItem" :key="index"/>
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
            <div class="text-section-title" v-if="project.contributions.length != 0"> Contributions </div>
            <ul class="text-section-contributions">
                <li v-for="(contribution, index) in project.contributions" :key="index">
                    {{ contribution }}
                </li>
            </ul>
            <!-- Portrait graphics -->
            <div class="graphics-section" v-if="!$isLandscape()">
                <img class="graphic" v-for="(layoutMediaItem, index) in project.layoutMedia" :src="layoutMediaItem" :key="index"/>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    methods: {
        openLink(link){
            window.open(link);
        }
    },
    computed: {
        project() {
            return this.$store.state.projects[this.$route.params.id];
        }
    }
}
</script>
<style scoped>
    /*Background*/
    .background{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    /*Graphics*/
    .graphics-section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 45%;
        gap: 20px;
        flex-shrink: 0;
    }
    .graphic{
        width: 90%;
        border-radius: 15px;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
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

    @media (max-width: 480px){
        .header{
            justify-content: center;
        }
        .header-left{
            justify-content: center;
            align-items: center;
        }
        .graphics-section{
            align-items: center;
            width: 100%;
        }
    }
</style>
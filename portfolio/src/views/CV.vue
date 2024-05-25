<template>
    <div class="page-background">
        <!-- Left-->
        <div class="page-column">
            <div class="profile-container">
                <p class="name">LUCAS GARCÍA MATEU</p>
                <p class="position">Game Developer</p>
                <img :src="require('@/assets/CV/LucasGarciaMateu.png')" 
                width="270px"
                height="270px"/>
            </div>

            <div class="section-container">
                <div class="section-title">Contact</div>
                <sui-list>
                    <sui-list-item icon="phone">
                        <sui-list-content>
                            <span>+34 646444233</span>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="mail">
                        <sui-list-content>
                            <a href="mailto:lucasgarciamateu@gmail.com">lucasgarciamateu@gmail.com</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://skyway666.github.io/Portfolio-Project/">Portfolio</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://github.com/Skyway666">Github</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://www.linkedin.com/in/lucas-garc%C3%ADa-mateu-517a0b160/">Linked In</a>
                        </sui-list-content>
                    </sui-list-item>
                </sui-list>
            </div>
            <div class="section-container">
                <div class="section-title" style="margin-bottom:30px">Education</div>
                <Timeline dotSize="10px" :events="education">
                    <template v-slot:timeline-event-content="slotProps">
                        <div 
                        class="timeline-event-content"
                        :style="slotProps.isLast ? 
                            'font-weight: bold; font-size:15px'
                            : 
                            ''"
                        >
                            <div>{{ slotProps.event.title }}</div>
                            <div>{{ slotProps.event.details }}</div>
                        </div>
                    </template>
                </Timeline>
            </div>
        </div>
        <!-- Center-->
        <div class="page-section">
            
        </div>
        <!-- Right-->
        <div class="page-section">

        </div>
    </div>
</template>
<script>
import Timeline from '../components/Timeline.vue';

export default {
    name: 'CV',
    components: {
        Timeline
    },
    data(){
        return {
            education: [
                {
                    title: 'Technical High School', 
                    details: '(Emperador Carles, 2014-1016)',
                    eventHeight: 50

                },
                { 
                    title: 'Bachelor’s Degree in Videogames', 
                    details: '(UPC at CITM, 2016-2020)'
                }
            ]
        }
    }
}
</script>
<style scoped>
    /*Defaults*/
    p{
        font-size: 17px;
        margin: 0;
    }
    a{
        font-size:17px;
        color: lightblue;
    }
    span{
        font-size: 17px;
    }

    /*General containers*/
    .page-background{
        height: 100vh;
        width: calc(100vh * 99/70);
        background-color: #3d3d3d;
        color: white;
        print-color-adjust: exact;
        padding: 30px 30px;
        display: flex;
        flex-direction: row;

    }

    .page-column{
        flex-basis: calc(100% / 3);
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
    }

    /*General elements*/
    .link{
        cursor: pointer;
        color: lightblue;
    }

    /*Left section*/
    .profile-container{
        text-align: left;
    }
    .name{
        font-size: 30px;
        margin: 0;
    }

    .position{
        font-size: 20px;
    }

    .section-title{
        font-size: 25px;
    }


    .section-container{
        text-align: left;
    }

    .timeline-event-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(0);
    }

    @media print{

    }


    @page{
        size: A4 landscape;
        margin: 0;
    }
</style>
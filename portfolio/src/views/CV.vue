<template>
    <div class="page-background">
        <!-- Left-->
        <div class="left-page-column">
            <div class="profile-container">
                <p class="name">LUCAS GARCÍA MATEU</p>
                <p class="position">Game Developer</p>
                <img :src="require('@/assets/CV/LucasGarciaMateu.png')" 
                width="270px"
                height="270px"/>
            </div>

            <div class="section-container" style="font-size: 17px;">
                <div class="section-title">Contact</div>
                <sui-list>
                    <sui-list-item v-for="(link, index) in links" :key="index"
                        :icon="link.icon">
                            <sui-list-content>
                                <a :href="link.href">{{link.display}}</a>
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

        <!--Right-->
        <div class="right-page-column">
            <!--Up Left-->
            <div class="text-column">
                <div class="section-container">
                <div class="section-title">Profile</div>
                <div>I'm a versatile programmer with a solid C++ base and professional experience using mainly Unity, but also Unreal and other
                    less popular game engines such as Godot and Construct.<br><br>
                    I'm interested in working either as an engine tools or gameplay programming developer.
                </div>
            </div>
            <div class="section-container">
                <div class="section-title">Professional</div>
                <div>4 years as a developer in <a href="https://www.sngular.com/es/">Sngular</a> where I went from Junior to Senior developer. 
                    <br><br>
                    I've worked in Videgame, Museum and internal tools projects, taking part in technical leading roles and participating on crucial
                    installation and business trips to the middle east.
                </div>
            </div>
            <!--Up Right-->
            </div>
            <div class="text-column">
                <div class="section-container">
                <div class="section-title">Hobbies</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div class="section-container">
                <div class="section-title">Personal</div>
                <div> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            </div>
            <hr class="solid"/>
            <!--Down Center-->
            <div class="section-container">
                <div class="section-title">Projects</div>
                <div class="projects-grid"> 
                    <div class="project" v-for="(project, index) in projects" :key="index">
                        <a class="project-title" :href="project.titleHref">{{ project.title }}</a>
                        <div>{{ project.description }}</div>
                    </div>
                </div>
            </div>
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
            links:[
                {
                    icon: "phone",
                    href: "tel:+34 646444233",
                    display: "+34 646444233"
                },
                {
                    icon: "mail",
                    href: "mailto:lucasgarciamateu@gmail.com",
                    display: "lucasgarciamateu@gmail.com"
                },
                {
                    icon: "linkify",
                    href: "https://skyway666.github.io/Portfolio-Project/",
                    display: "Portfolio"
                },
                {
                    icon: "linkify",
                    href: "https://github.com/Skyway666",
                    display: "Github"
                },
                {
                    icon: "linkify",
                    href: "https://www.linkedin.com/in/lucas-garc%C3%ADa-mateu-517a0b160/",
                    display: "Linked In"
                }
            ],
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
            ],
            projects: [
                {
                    title: "Dungeon Brawler",
                    titleHref: "https://angryfrogdev.github.io/Dungeon-Brawler/",
                    description: "Street Fighter style fighting game running in C++"
                },
                {
                    title: "Malita, Soul of a Warrior",
                    titleHref: "https://rustiktie.github.io/project-3-bcn/",
                    description: "3D BeatEmUp running in C++ self crafted engine"
                },
                {
                    title: "Mirror",
                    titleHref: "https://github.com/Skyway666/TFG-investigation",
                    description: "Reflection tool/library for C++ (Final Degree Project)"
                },
                {
                    title: "Asun",
                    titleHref: "https://dynamiccast.itch.io/asun",
                    description: "Survival beat em up Game Jam game, based on the theme 'Sorpresa', built in Unity"
                },
                {
                    title: "Bubble Ball",
                    titleHref: "https://www.youtube.com/watch?v=y2ManVDD-fM",
                    description: "Four player party game Game Jam game, based on the theme 'Water', built in Unity"
                },
                {
                    title: "Magic Gone Wrong",
                    titleHref: "https://skyway666.itch.io/magic-gone-wrong",
                    description: "'Vampire Survivor' style top down shooter, based on the theme 'Magic'"
                },
                {
                    title: "Om Nom Pirates Clans",
                    titleHref: "https://www.youtube.com/watch?v=DX_WiFLyFMI",
                    description: "Strategy mobile game with the OmNom IP in collaboration with Zeptolab"
                },
                {
                    title: "SOA",
                    titleHref: "",
                    description: "Scriptable Objects Architecture package built for Unity"
                },
                {
                    title: "Qatar Olympic and sports museum",
                    titleHref: "https://321qosm.org.qa/en/",
                    description: "Digital product for a sports themed museum in Qatar"
                },
            ]
        }
    }
}
</script>
<style scoped>
    /*Defaults*/
    p{
        margin: 0;
    }
    a{
        color: lightblue;
    }
    div{
        font-size: small;
    }
    hr.solid {
        border-top: 1px solid #ffffff;
        width: 100%;
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

    .left-page-column{
        width: calc(100% / 3);
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
    }

    .right-page-column{
        width: calc((100% / 3) * 2);
        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-content: space-between;
    }

    /*General elements*/
    .link{
        cursor: pointer;
        color: lightblue;
    }

    .section-container{
        text-align: left;
    }

    .section-title{
        font-size: 25px;
        margin-bottom:10px;
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

    .timeline-event-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(0);
    }

    /*Right section*/
    .text-column{
        width: 45%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        row-gap: 30px;
    }
    
    .projects-grid{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 30px;
    }

    .project{
        width: 32%;
    }

    .project-title{
        font-size: 17px;
        text-decoration: underline;
    }

    @media print{

    }


    @page{
        size: A4 landscape;
        margin: 0;
    }
</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [
            {
                // Projects view
                title: 'Archano',
                shortDescription: `Archerolike game themed with a cute necromancer mage`,
                thumbnail: require('@/assets/projects/ArchanoLogo.png'),

                // Detail view
                specifications: {
                    year: "2023",
                    duration: "1 month",
                    teamSize: "7"
                },
                longDescription: `<a href="https://play.google.com/store/apps/details?id=com.habby.archero&hl=es_419">Archero</a> like game themed with a cute necromancer mage. The player would charge mana by hitting the enemies with orbs while moving and then spend it unleashing devastating spell combinations when standing still. Additionally, some enemies could be revived as zombies to aid the player in his malevolent journy
          
                The game's development was a partnership with <a href="https://www.homagames.com/">HOMA</a>. It lasted for one month after which it released with a marketing campaign with the objective of analysing its metrics and check the projects viability and possible iteration points.`,
                layoutMedia:[
                    require('@/assets/projects/ArchanoLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Google Play",
                        link: 'https://play.google.com/store/apps/details?id=com.sngular.archano'
                    }
                ],
                tags: [
                    "Unity",
                    "Sngular",
                    "Programming",
                    "HOMA"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Robot Revolver',
                shortDescription: `Archero like game themed with robots in the wild west`,
                thumbnail: require('@/assets/projects/RRLogo.png'),

                // Detail view
                specifications: {
                    year: "2023",
                    duration: "1 month",
                    teamSize: "7"
                },
                longDescription: `<a href="https://play.google.com/store/apps/details?id=com.habby.archero&hl=es_419">Archero</a> like game themed with robots in the wild west. As a unique mechanic, the player would shoot while moving and reload by standing still.
          
                The game's development was a partnership with <a href="https://www.homagames.com/">HOMA</a>. It lasted for one month after which it released with a marketing campaign with the objective of analysing its metrics and check the projects viability and possible iteration points.`,
                layoutMedia:[
                    require('@/assets/projects/RRLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Google Play",
                        link: 'https://play.google.com/store/apps/details?id=com.Sngular.Revolver&pli=1'
                    }
                ],
                tags: [
                    "Unity",
                    "Sngular",
                    "Programming",
                    "HOMA"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Om Nom Sea Brawl',
                shortDescription: `Strategy mobile game with the OmNom IP in collaboration with Zeptolab`,
                thumbnail: require('@/assets/projects/ONSBLogo.png'),

                // Detail view
                specifications: {
                    year: "2021",
                    duration: "6 months",
                    teamSize: "9"
                },
                longDescription: `Strategy mobile game with the OmNom IP in collaboration with <a href="https://www.zeptolab.com/">Zeptolab</a>. The gameplay, inspired mainly in <a href="https://www.battlelegion.com/">Battle Legion</a>, allows the user to progress through puzzle like levels in which in which the positioning of units in the battlefield is key as well as the usage of powerful vodoo spells. It also features an economy system where the user can spend the resources earned by beating the levels in purchasing improvements for their army.
          
                The development lasted for 6 months, during which focus test where performed to ensure the success of the release. Unfortunatelly it was cancelled due to the metrics no reaching the expected results.`,
                layoutMedia:[
                    require('@/assets/projects/ONSBLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Video",
                        link: 'https://www.youtube.com/watch?v=DX_WiFLyFMI'
                    }
                ],
                tags: [
                    "Unity",
                    "Sngular",
                    "Programming",
                    "Zeptolab"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Dungeon Brawler',
                shortDescription: `Competitive 2D fighting game, built in C++`,
                thumbnail: require('@/assets/projects/DungeonBrawlerLogo.png'),

                // Detail view
                specifications: {
                    year: "2018",
                    duration: "3 months",
                    teamSize: "7"
                },
                longDescription: `Competitive 2D fighting game, build entirely in C++.

                We used the graphics of the Capcom classic "Dungeons and Dragons, Shadow over Mystara", but completelly re-designed the game and coded it from scratch. There are 4 playable characters, each one with 13 different moves and and two variations.`,
                layoutMedia:[
                    require('@/assets/projects/DungeonBrawlerLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://angryfrogdev.github.io/Dungeon-Brawler/'
                    }
                ],
                tags: [
                    "C++",
                    "University",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Kuroko Engine',
                shortDescription: `3D game engine built in C++`,
                thumbnail: require('@/assets/projects/KurokoLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "3 months",
                    teamSize: "7"
                },
                longDescription: `The Kuroko Engine is a 3D game engine built entirely in C++ by a team of 2 members. It uses several libraries to implement various essential systems, such as a 3D renderer, component based game object system and a resource manager.
          
                On top of that, it features a <a href="https://wren.io/">Wren</a> based scripting system, wich effectively separates the gameplay logic from the rest of systems.
          
                This project was the base for the Atlas engine, used to develop <a href="https://rustiktie.github.io/project-3-bcn/"> Malita, Soul of a Warrior </a>.`,
                layoutMedia:[
                    require('@/assets/projects/KurokoLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://skyway666.github.io/Kuroko-Engine/'
                    }
                ],
                tags: [
                    "C++",
                    "University",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Malita, Soul of a Warrior',
                shortDescription: `Fast-paced beat 'em up game inspired by the universe of Battle Angel Alita`,
                thumbnail: require('@/assets/projects/MalitaLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "3 months",
                    teamSize: "20"
                },
                longDescription: `Malita, Soul of a Warrior is a is a fast-paced beat 'em up game inspired by the universe of Battle Angel Alita. It a multidisciplinar project, and the culmination of 3 different subjects of the Bachelor’s Degree in Video Games by UPC at CITM: Engines, Project 3 and Marketing.

                The game was developed using the Atlas-Project engine, wich used the <a href="https://skyway666.github.io/Kuroko-Engine/"> Kuroko Engine </a> as a base, but was expanded and improved with the results of all the other students that participated in the "Engines" subject, adding the subsystems of Animation, UI, Sound, Shaders, Particles and Physics.

                During Project 3, the game was developed with the combined efforts of 20 people, divided in Coding, Design and Art departments. Additionally, a marketing campaign was deployed, through social media (<a href="https://twitter.com/malitathegame">Twitter</a>, <a href="https://www.instagram.com/malitagame/">Instagram</a> and <a href="https://www.youtube.com/channel/UCZKmG8wNjSxjrQ8kdyABiuA">YouTube</a>) and massive email sending. Finally, the game was published in <a href="https://typhoonstudio.itch.io/malita">Itch.io</a>.`,
                layoutMedia:[
                    require('@/assets/projects/MalitaLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://rustiktie.github.io/project-3-bcn/'
                    }
                ],
                tags: [
                    "C++",
                    "University",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Apocalypse Tycoon',
                shortDescription: `"Sims like" AI based game, built in Unity`,
                thumbnail: require('@/assets/projects/ATLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "3 months",
                    teamSize: "2"
                },
                longDescription: `Apocalypse Tycoon is a "Sims like" AI based game, built in Unity and developed by a team of 2 people.

                The object of the game is surviving 5 days on a militar base during a Zombie apocalypse, through efficient managing. There were 4 AI archtypes: Farmer, Militar, Zombie and Pig, and the player can take actions such as buying more Farmers, Militars or Pigs, upgrading the Militars, command them to collect the money droped by the zombies, etc. It features a day/night cycle, where the different AI archetypes would behave differently.`,
                layoutMedia:[
                    require('@/assets/projects/ATLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://mtorresform.wixsite.com/apocalypsetycoonupc'
                    }
                ],
                tags: [
                    "Unity",
                    "University",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Asun',
                shortDescription: `First edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish)`,
                thumbnail: require('@/assets/projects/AsunLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "1 day",
                    teamSize: "4"
                },
                longDescription: `Asun is the result of the first edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish). It was build in Unity and developed by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design. It was awarded with the price to the <a href ="https://www.citm.upc.edu/blog/1a-edicion-enero-2019/">best Design</a>, and later published to itch.io.
          
                The game is about an imprisoned Nun who is attacked by the guards and has to deffend herself using a crucifix and a holy ball. However, the guards can't be hit directly with the crucifix,  so the player needs to direct the holy ball, which is then capable of hurting the enemies. 

                The game does resemble the game jam's theme due to wordplay, since "Sor Presa" in spanish means "Prisoner Nun".`,
                layoutMedia:[
                    require('@/assets/projects/AsunLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://dynamiccast.itch.io/asun'
                    }
                ],
                tags: [
                    "Unity",
                    "GameJam",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Bubble Ball',
                shortDescription: `Second edition of the Gran CITM game jam with the theme "Water"`,
                thumbnail: require('@/assets/projects/BBLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "1 day",
                    teamSize: "4"
                },
                longDescription: `Bubble Ball is the result of the second edition of the Gran CITM game jam with the theme "Water". It was build in Unity and developed by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design.

                The game is a 4 player inverted VolleyBall game, where a bubble is the ball and fishes represent the players.`,
                layoutMedia:[
                    require('@/assets/projects/BBLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Webpage",
                        link: 'https://rogerjimbo.itch.io/bubbleball'
                    }
                ],
                tags: [
                    "Unity",
                    "GameJam",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Mirror',
                shortDescription: `Reflection system for C++`,
                thumbnail: require('@/assets/projects/MirrorLogo.png'),

                // Detail view
                specifications: {
                    year: "2019",
                    duration: "3 months",
                    teamSize: "1"
                },
                longDescription: `Mirror is a reflection system for C++, developed as my Final Degree Project.

                The system consists of an application built in C++ which reads the user header files to then generate code which once included into the user's project, can be used to access and use the reflection data.`,
                layoutMedia:[
                    require('@/assets/projects/MirrorLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Repository",
                        link:  'https://github.com/Skyway666/TFG-investigation'
                    }
                ],
                tags: [
                    "C++",
                    "University",
                    "Programming",
                    "Final Degree Project"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Advanced graphics engine',
                shortDescription: `3D graphics engine developed in the C++ QT framework by a team of 2 members`,
                thumbnail: require('@/assets/projects/AGLogo.png'),

                // Detail view
                specifications: {
                    year: "2020",
                    duration: "1 month",
                    teamSize: "2"
                },
                longDescription: `This 3D graphics engine was developed in the C++ QT framework by a team of 2 members, using a basic skeleton provided by the teacher with an openGL implementation.
 
                The main aspect of this project is the usage of a deferred renderer to implement techniques such asScreen Space Ambient Occlusion, 3D objects outline, mouse picking using textures and Depth Of Field.`,
                layoutMedia:[
                    require('@/assets/projects/AGLogo.png')
                ],
                linkButtons: [
                    {
                        text: "Repository",
                        link:  'https://github.com/Adria-F/QT-Graphics-Engine'
                    }
                ],
                tags: [
                    "C++",
                    "University",
                    "Programming"
                ],
                contributions: [

                ]
            },
            {
                // Projects view
                title: 'Swamp Chaos',
                shortDescription: `Narrative game which features multiple decisions and endings`,
                thumbnail: require('@/assets/projects/SCLogo.png'),

                // Detail view
                specifications: {
                    year: "2020",
                    duration: "1 month",
                    teamSize: "1"
                },
                longDescription: `Swamp Chaos is a narrative game which features multiple decisions and endings. It was developed using RPGMaker MV, as a delivery for the "Level Design" subject. The project was based on a one page dungeon with the same name, by Dennis Filipiak.
          
                This project showcases my ability as a game designer and creative mind in general, since the project expands on the original material, with more characters and multiple endings. On top of that, it was my first time using RPG maker, so it is also quite acomplished technically. 

                Finally, the memory generated for the game is a proof of my competence generating documentation. I believe that it is really important to do this for all projects, otherwise, important information tends to be forgotten and then it is harder to iterate down the line.`,
                layoutMedia:[
                    require('@/assets/projects/SCLogo.png')
                ],
                linkButtons: [
                    {
                        text: "LDD and Build",
                        link:  'https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s'
                    }
                ],
                tags: [
                    "RPGMaker",
                    "University",
                    "Design"
                ],
                contributions: [

                ]
            }
        ]
    }
})
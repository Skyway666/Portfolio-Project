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
                    require('@/assets/projects/ArchanoLogo.png'),
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
                    "Programming"
                ]
            },
            {
                thumbnail: require('@/assets/projects/RRLogo.png'),
                title: 'Robot Revolver',
                shortDescription: `Archero like game themed with robots in the wild west`,
                webLink: 'https://play.google.com/store/apps/details?id=com.Sngular.Revolver&pli=1'
            },
            {
                thumbnail: require('@/assets/projects/ONSBLogo.png'),
                title: 'Om Nom Sea Brawl',
                shortDescription: `Strategy mobile game with the OmNom IP in collaboration with Zeptolab`,
                webLink: 'https://www.youtube.com/watch?v=DX_WiFLyFMI'
            },
            {
                thumbnail: require('@/assets/projects/DungeonBrawlerLogo.png'),
                title: 'Dungeon Brawler',
                shortDescription: `Competitive 2D fighting game, built in C++`,
                webLink: 'https://angryfrogdev.github.io/Dungeon-Brawler/'
            },
            {
                thumbnail: require('@/assets/projects/KurokoLogo.png'),
                title: 'Kuroko Engine',
                shortDescription: `3D game engine built in C++`,
                webLink: 'https://skyway666.github.io/Kuroko-Engine/'
            },
            {
                thumbnail: require('@/assets/projects/MalitaLogo.png'),
                title: 'Malita, Soul of a Warrior',
                shortDescription: `Fast-paced beat 'em up game inspired by the universe of Battle Angel Alita`,
                webLink: 'https://rustiktie.github.io/project-3-bcn/'
            },
            {
                thumbnail: require('@/assets/projects/ATLogo.png'),
                title: 'Apocalypse Tycoon',
                shortDescription: `"Sims like" AI based game, built in Unity`,
                webLink: 'https://mtorresform.wixsite.com/apocalypsetycoonupc'
            },
            {
                thumbnail: require('@/assets/projects/AsunLogo.png'),
                title: 'Asun',
                shortDescription: `First edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish)`,
                webLink: 'https://dynamiccast.itch.io/asun'
            },
            {
                thumbnail: require('@/assets/projects/BBLogo.png'),
                title: 'Bubble Ball',
                shortDescription: `Second edition of the Gran CITM game jam with the theme "Water"`,
                webLink: 'https://rogerjimbo.itch.io/bubbleball'
            },
            {
                thumbnail: require('@/assets/projects/MirrorLogo.png'),
                title: 'Mirror',
                shortDescription: `Reflection system for C++`,
                webLink: 'https://github.com/Skyway666/TFG-investigation'
            },
            {
                thumbnail: require('@/assets/projects/AGLogo.png'),
                title: 'Advanced graphics engine',
                shortDescription: `3D graphics engine developed in the C++ QT framework by a team of 2 members`,
                webLink: 'https://github.com/Adria-F/QT-Graphics-Engine'
            },
            {
                thumbnail: require('@/assets/projects/SCLogo.png'),
                title: 'Swamp Chaos',
                shortDescription: `Narrative game which features multiple decisions and endings`,
                webLink: 'https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s'
            }
        ]
    }
})
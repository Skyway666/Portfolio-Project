import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MultiplatformPlugin } from './plugins/multiplatform.js'

import Vuex from 'vuex'
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(SuiVue);
Vue.use(MultiplatformPlugin)

const store = new Vuex.Store({
  state: {
    projects: [
      {
        imagePath: require('@/assets/projects/ArchanoLogo.png'),
        title: 'Archano',
        description: 
        `Archerolike game themed with a cute necromancer mage`,
        webLink: 'https://play.google.com/store/apps/details?id=com.sngular.archano'
      },
      {
        imagePath: require('@/assets/projects/RRLogo.png'),
        title: 'Robot Revolver',
        description: 
        `Archero like game themed with robots in the wild west`,
        webLink: 'https://play.google.com/store/apps/details?id=com.Sngular.Revolver&pli=1'
      },
      {
        imagePath: require('@/assets/projects/ONSBLogo.png'),
        title: 'Om Nom Sea Brawl',
        description: 
        `Strategy mobile game with the OmNom IP in collaboration with Zeptolab`,
        webLink: 'https://www.youtube.com/watch?v=DX_WiFLyFMI'
      },
      {
        imagePath: require('@/assets/projects/DungeonBrawlerLogo.png'),
        title: 'Dungeon Brawler',
        description: 
        `Competitive 2D fighting game, built in C++`,
        webLink: 'https://angryfrogdev.github.io/Dungeon-Brawler/'
      },
      {
        imagePath: require('@/assets/projects/KurokoLogo.png'),
        title: 'Kuroko Engine',
        description: 
        `3D game engine built in C++`,
        webLink: 'https://skyway666.github.io/Kuroko-Engine/'
      },
      {
        imagePath: require('@/assets/projects/MalitaLogo.png'),
        title: 'Malita, Soul of a Warrior',
        description: 
        `Fast-paced beat 'em up game inspired by the universe of Battle Angel Alita`,
        webLink: 'https://rustiktie.github.io/project-3-bcn/'
      },
      {
        imagePath: require('@/assets/projects/ATLogo.png'),
        title: 'Apocalypse Tycoon',
        description: 
        `"Sims like" AI based game, built in Unity`,
        webLink: 'https://mtorresform.wixsite.com/apocalypsetycoonupc'
      },
      {
        imagePath: require('@/assets/projects/AsunLogo.png'),
        title: 'Asun',
        description: 
        `First edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish)`,
        webLink: 'https://dynamiccast.itch.io/asun'
      },
      {
        imagePath: require('@/assets/projects/BBLogo.png'),
        title: 'Bubble Ball',
        description: 
        `Second edition of the Gran CITM game jam with the theme "Water"`,
        webLink: 'https://rogerjimbo.itch.io/bubbleball'
      },
      {
        imagePath: require('@/assets/projects/MirrorLogo.png'),
        title: 'Mirror',
        description: 
        `Reflection system for C++`,
        webLink: 'https://github.com/Skyway666/TFG-investigation'
      },
      {
        imagePath: require('@/assets/projects/AGLogo.png'),
        title: 'Advanced graphics engine',
        description: 
        `3D graphics engine developed in the C++ QT framework by a team of 2 members`,
        webLink: 'https://github.com/Adria-F/QT-Graphics-Engine'
      },
      {
        imagePath: require('@/assets/projects/SCLogo.png'),
        title: 'Swamp Chaos',
        description: 
        `Narrative game which features multiple decisions and endings`,
        webLink: 'https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s'
      }
    ]
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


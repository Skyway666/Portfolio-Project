<template>
  <div>
    <sui-item-group
      style="font-size: 15px; 
      text-align: left;
      line-height: 1.5;"
    >
      <sui-item v-for="(project, index) in projects" :key="index">
        <sui-item-image :src="project.imagePath"/>
        <sui-item-content>
          <sui-item-header>{{project.title}}</sui-item-header>
          <sui-item-description>
            <div v-html="project.description"/>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink(project.webLink)"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
    </sui-item-group>
    <sui-divider/>
  </div>
</template>

<script>
export default {
  name: 'ProvisionalProjectsList',
  data(){
    return {
      projects: [
        {
          imagePath: require('@/assets/DungeonBrawlerLogo.png'),
          title: 'Dungeon Brawler',
          description: 
          `Dungeon Brawler is a competitive 2D fighting game, build entirely in C++ and developed by a team of 7 members.

          We used the graphics of the Capcom classic "Dungeons and Dragons, Shadow over Mystara", but completelly re-designed the game and coded it from scratch. There are 4 playable characters, each one with 13 different moves and and two variations.`,
          webLink: 'https://angryfrogdev.github.io/Dungeon-Brawler/'
        },
        {
          imagePath: require('@/assets/KurokoLogo.png'),
          title: 'Kuroko Engine',
          description: 
          `The Kuroko Engine is a 3D game engine built entirely in C++ by a team of 2 members. It uses several libraries to implement various essential systems, such as a 3D renderer, component based game object system and a resource manager.
          
          On top of that, it features a <a href="https://wren.io/">Wren</a> based scripting system, wich effectively separates the gameplay logic from the rest of systems.
          
          This project was the base for the Atlas engine, used to develop <a href="https://rustiktie.github.io/project-3-bcn/"> Malita, Soul of a Warrior </a>.`,
          webLink: 'https://skyway666.github.io/Kuroko-Engine/'
        },
        {
          imagePath: require('@/assets/MalitaLogo.png'),
          title: 'Malita, Soul of a Warrior',
          description: 
          `Malita, Soul of a Warrior is a is a fast-paced beat 'em up game inspired by the universe of Battle Angel Alita. It a multidisciplinar project, and the culmination of 3 different subjects of the Bachelor’s Degree in Video Games by UPC at CITM: Engines, Project 3 and Marketing.

          The game was developed using the Atlas-Project engine, wich used the <a href="https://skyway666.github.io/Kuroko-Engine/"> Kuroko Engine </a> as a base, but was expanded and improved with the results of all the other students that participated in the "Engines" subject, adding the subsystems of Animation, UI, Sound, Shaders, Particles and Physics.

          During Project 3, the game was developed with the combined efforts of 20 people, divided in Coding, Design and Art departments. Additionally, a marketing campaign was deployed, through social media (<a href="https://twitter.com/malitathegame">Twitter</a>, <a href="https://www.instagram.com/malitagame/">Instagram</a> and <a href="https://www.youtube.com/channel/UCZKmG8wNjSxjrQ8kdyABiuA">YouTube</a>) and massive email sending. Finally, the game was published in <a href="https://typhoonstudio.itch.io/malita">Itch.io</a>.`,
          webLink: 'https://rustiktie.github.io/project-3-bcn/'
        },
        {
          imagePath: require('@/assets/ATLogo.png'),
          title: 'Apocalypse Tycoon',
          description: 
          `Apocalypse Tycoon is a "Sims like" AI based game, built in Unity and developed by a team of 2 people.

          The object of the game is surviving 5 days on a militar base during a Zombie apocalypse, through efficient managing. There were 4 AI archtypes: Farmer, Militar, Zombie and Pig, and the player can take actions such as buying more Farmers, Militars or Pigs, upgrading the Militars, command them to collect the money droped by the zombies, etc. It features a day/night cycle, where the different AI archetypes would behave differently.`,
          webLink: 'https://mtorresform.wixsite.com/apocalypsetycoonupc'
        },
        {
          imagePath: require('@/assets/AsunLogo.png'),
          title: 'Asun',
          description: 
          `Asun is the result of the first edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish). It was build in Unity and developed by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design. It was awarded with the price to the <a href ="https://www.citm.upc.edu/blog/1a-edicion-enero-2019/">best Design</a>, and later published to itch.io.
          
          The game is about an imprisoned Nun who is attacked by the guards and has to deffend herself using a crucifix and a holy ball. However, the guards can't be hit directly with the crucifix,  so the player needs to direct the holy ball, which is then capable of hurting the enemies. 

          The game does resemble the game jam's theme due to wordplay, since "Sor Presa" in spanish means "Prisoner Nun".`,
          webLink: 'https://dynamiccast.itch.io/asun'
        },
        {
          imagePath: require('@/assets/BBLogo.png'),
          title: 'Bubble Ball',
          description: 
          `Bubble Ball is the result of the second edition of the Gran CITM game jam with the theme "Water". It was build in Unity and developed by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design.

          The game is a 4 player inverted VolleyBall game, where a bubble is the ball and fishes represent the players.`,
          webLink: 'https://rogerjimbo.itch.io/bubbleball'
        },
        {
          imagePath: require('@/assets/MirrorLogo.png'),
          title: 'Mirror',
          description: 
          `Mirror is a reflection system for C++, developed as my Final Degree Project.

          The system consists of an application built in C++ which reads the user header files to then generate code which once included into the user's project, can be used to access and use the reflection data.`,
          webLink: 'https://github.com/Skyway666/TFG-investigation'
        },
        {
          imagePath: require('@/assets/AGLogo.png'),
          title: 'Advanced graphics engine',
          description: 
          `This 3D graphics engine was developed in the C++ QT framework by a team of 2 members, using a basic skeleton provided by the teacher with an openGL implementation.
 
          The main aspect of this project is the usage of a deferred renderer to implement techniques such asScreen Space Ambient Occlusion, 3D objects outline, mouse picking using textures and Depth Of Field.`,
          webLink: 'https://github.com/Adria-F/QT-Graphics-Engine'
        },
        {
          imagePath: require('@/assets/SCLogo.png'),
          title: 'Swamp Chaos',
          description: 
          `Swamp Chaos is a narrative game which features multiple decisions and endings. It was developed using RPGMaker MV, as a delivery for the "Level Design" subject. The project was based on a one page dungeon with the same name, by Dennis Filipiak.
          
          This project showcases my ability as a game designer and creative mind in general, since the project expands on the original material, with more characters and multiple endings. On top of that, it was my first time using RPG maker, so it is also quite acomplished technically. 

          Finally, the memory generated for the game is a proof of my competence generating documentation. I believe that it is really important to do this for all projects, otherwise, important information tends to be forgotten and then it is harder to iterate down the line.`,
          webLink: 'https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s'
        }
      ]
    }
  },
  methods:{
    openLink(link){
      window.open(link);
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>


<template>
  <div style="
      margin-left: 300px;
      margin-right: 300px;"
  >
    <sui-header size="huge" style="fontSize: 50px"> Lucas García Mateu</sui-header>
    <div
      style="fontSize: 20px; 
      text-align: center;
      line-height: 1.5;"
      padded
    >
      Wellcome to my portfolio! Here you can find the most remarkable projects that I have worked on so far (not all of them!):
    </div>
    <sui-divider/>
    <sui-item-group
      style="fontSize: 15px; 
      text-align: left;
      line-height: 1.5;"
    >
      <sui-item>
        <sui-item-image :src="require('@/assets/DungeonBrawlerLogo.png')"/>
        <sui-item-content>
          <sui-item-header>Dungeon Brawler</sui-item-header>
          <sui-item-description>
            <p>
              Dungeon Brawler is a competitive 2D fighting game, build entirely in C++ and developed by a team of 7 members.
            </p>
            <p>
              We used the graphics of the Capcom classic "Dungeons and Dragons, Shadow over Mystara", but completelly re-designed the game
              and coded it from scratch. There are 4 playable characters, each one with 13 different moves and and two variations.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://angryfrogdev.github.io/Dungeon-Brawler/')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/KurokoLogo.png')"/>
        <sui-item-content>
          <sui-item-header>Kuroko Engine</sui-item-header>
          <sui-item-description>
            <p>
              The Kuroko Engine is a 3D game engine built entirely in C++ by a team of 2 members. It uses several libraries to 
              implement various essential systems, such as a 3D renderer, component based game object system and a resource manager.
            </p>
            <p>
              On top of that, it features a <a href="https://wren.io/">Wren</a> based scripting system, wich effectively separates the 
              gameplay logic from the rest of systems. 
            </p>
            <p>
              This project was the base for the Atlas engine, used to develop <a href="https://rustiktie.github.io/project-3-bcn/"> Malita, Soul of a Warrior </a>.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://skyway666.github.io/Kuroko-Engine/')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/MalitaLogo.png')"/>
        <sui-item-content>
          <sui-item-header>Malita, Soul of a Warrior</sui-item-header>
          <sui-item-description>
            <p>
              Malita, Soul of a Warrior is a is a fast-paced beat 'em up game inspired by the universe of Battle Angel Alita. It a multidisciplinar project,
              and the culmination of 3 different subjects of the Bachelor’s Degree in Video Games by UPC at CITM: Engines, Project 3 and Marketing.
            </p>
            <p>
              The game was developed using the Atlas-Project engine, wich used the <a href="https://skyway666.github.io/Kuroko-Engine/"> Kuroko Engine </a> as a base,
              but was expanded and improved with the results of all the other students that participated in the "Engines" subject, adding the subsystems of Animation,
              UI, Sound, Shaders, Particles and Physics.
            </p>
            <p>
              During Project 3, the game was developed with the combined efforts of 20 people, divided in Coding, Design and Art departments. Additionally, a 
              marketing campaign was deployed, through social media (<a href="https://twitter.com/malitathegame">Twitter</a>, <a href="https://www.instagram.com/malitagame/">Instagram</a> and <a href="https://www.youtube.com/channel/UCZKmG8wNjSxjrQ8kdyABiuA">YouTube</a>) and massive
              email sending. Finally, the game was published in <a href="https://typhoonstudio.itch.io/malita">Itch.io</a>.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://rustiktie.github.io/project-3-bcn/')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/ATLogo.png')"/>
        <sui-item-content>
          <sui-item-header>Apocalypse Tycoon</sui-item-header>
          <sui-item-description>
            <p>
              Apocalypse Tycoon is a "Sims like" AI based game, built in Unity and developed by a team of 2 people. 
            </p>
            <p>
              The object of the game is surviving 5 days on a militar base during a Zombie apocalypse, through efficient managing.
              There were 4 AI archtypes: Farmer, Militar, Zombie and Pig, and the player can take actions such as buying more Farmers, Militars
              or Pigs, upgrading the Militars, command them to collect the money droped by the zombies, etc.
              It features a day/night cycle, where the different AI archetypes would behave differently.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://mtorresform.wixsite.com/apocalypsetycoonupc')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/AsunLogo.png')"/>
        <sui-item-content>
          <sui-item-header> Asun </sui-item-header>
          <sui-item-description>
            <p>
              Asun is the result of the first edition of the Gran CITM game jam with the theme "Surprise" ("Sorpresa" in Spanish). It was build in Unity and developed
              by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design. It was awarded with the price to the <a href ="https://www.citm.upc.edu/blog/1a-edicion-enero-2019/">best Design</a>,
              and later published to itch.io.
            </p>
            <p>
              The game is about a Nun trapped in a prison who is attacked by the guards and has to deffend herself using a crucifix and a holy ball. However, the guards
              can't be hit directly with the crucifix,  so the player needs to direct the holy ball, which is then capable of hurting the enemies. 
            </p>
            <p>
              The game does resemble the game jam's theme due to wordplay, since "Sor Presa" in spanish means "Prisoner Nun".
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://dynamiccast.itch.io/asun')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/BBLogo.png')"/>
        <sui-item-content>
          <sui-item-header> Bubble Ball </sui-item-header>
          <sui-item-description>
            <p>
              Bubble Ball is the result of the second edition of the Gran CITM game jam with the theme "Water". It was build in Unity and developed
              by 4 people in 24 hours, 2 artists and 2 coders, while we all participated in the design.
            </p>
            <p>
              The game is a 4 player inverted VolleyBall game, where a bubble is the ball and fishes represent the players.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://rogerjimbo.itch.io/bubbleball')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/MirrorLogo.png')"/>
        <sui-item-content>
          <sui-item-header> Mirror </sui-item-header>
          <sui-item-description>
            <p>
              Mirror is a reflection system for C++, developed as my Final Degree Project.
            </p>
            <p>
              The system consists of an application built in C++ which reads the user header files to then generate code which once included
              into the user's project, can be used to access and use the reflection data.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://github.com/Skyway666/TFG-investigation')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
      <sui-item>
        <sui-item-image :src="require('@/assets/AGLogo.png')"/>
        <sui-item-content>
          <sui-item-header> Advanced graphics engine </sui-item-header>
          <sui-item-description>
            <p>
              This 3D graphics engine was developed in the C++ QT framework by a team of 2 members, using a basic skeleton 
              provided by the teacher with an openGL implementation.
            </p>
            <p>
              The main aspect of this project is the usage of a deferred renderer to implement techniques such asScreen Space Ambient Occlusion, 
              3D objects outline, mouse picking using textures and Depth Of Field.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://github.com/Adria-F/QT-Graphics-Engine')"> Webpage </sui-button>
            <sui-button disabled> See more  </sui-button>
          </sui-item-extra>
        </sui-item-content>
      </sui-item>
       <sui-item>
        <sui-item-image :src="require('@/assets/SCLogo.png')"/>
        <sui-item-content>
          <sui-item-header> Swamp Chaos </sui-item-header>
          <sui-item-description>
            <p>
              Swamp Chaos is a narrative game which features multiple decisions and endings. It was developed using RPGMaker MV, as a delivery for the 
              "Level Design" subject. The project was based on a one page dungeon with the same name, by Dennis Filipiak.
            </p>
            <p>
              This project showcases my ability as a game designer and creative mind in general, since the project expands on the original material, with more
              characters and multiple endings. On top of that, it was my first time using RPG maker, so it is also quite acomplished technically. 
            </p>
            <p>
              Finally, the memory generated for the game is a proof of my competence generating documentation. I believe that it is really important
              to do this for all projects, otherwise, important information tends to be forgotten and then it is harder to iterate down the line.
            </p>
          </sui-item-description>
          <sui-item-extra>
            <sui-button @click="openLink('https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s')"> Webpage </sui-button>
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
  name: 'Home',
  props: {
    msg: String
  },
  methods:{
    openLink(link){
      window.open(link);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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


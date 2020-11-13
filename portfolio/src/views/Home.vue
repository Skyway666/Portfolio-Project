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
      Wellcome to my portfolio! Here you can find the most remarkable projects that I have worked on so far.
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
              Dungeon Brawler is a competitive 2D fighting game, build entirely in C++ by a team of 7 members.
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
    </sui-item-group>
    <sui-button-group :widths="3">
      <sui-button @click="openLink('https://angryfrogdev.github.io/Dungeon-Brawler/')"> Dungeon Brawler </sui-button>
      <sui-button @click="openLink('https://skyway666.github.io/Kuroko-Engine/')"> Kuroko Engine </sui-button>
      <sui-button @click="openLink('https://rustiktie.github.io/project-3-bcn/')"> Malita, Soul of a Warrior </sui-button>
    </sui-button-group>
    <sui-divider/>
    <sui-button-group :widths="3">
      <sui-button @click="openLink('https://mtorresform.wixsite.com/apocalypsetycoonupc')"> Apocalypse Tycoon </sui-button>
      <sui-button @click="openLink('https://dynamiccast.itch.io/asun')"> Asun </sui-button>
      <sui-button @click="openLink('https://www.youtube.com/watch?v=y2ManVDD-fM')"> Bubble Ball </sui-button>
    </sui-button-group>
    <sui-divider/>
    <sui-button-group :widths="3">
      <sui-button @click="openLink('https://github.com/Skyway666/TFG-investigation')"> Mirror </sui-button>
      <sui-button @click="openLink('https://github.com/Adria-F/QT-Graphics-Engine')"> Advanced graphics engine </sui-button>
      <sui-button @click="openLink('https://drive.google.com/drive/folders/1xC-PnGSno5CikSj15lRlQjuQ_unLwy1s')"> Swamp Chaos </sui-button>
    </sui-button-group>
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


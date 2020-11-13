<template>
  <div style="
      margin-left: 300px;
      margin-right: 300px;"
  >
    <sui-header size="huge" style="fontSize: 50px"> Lucas García Mateu</sui-header>
    <sui-segment 
      style="fontSize: 20px; 
      text-align: left;
      line-height: 1.5;"
      padded
    >
      Lucas es un programador versátil, capaz de aislar y resolver cualquier problema gracias a su 
      metodologia operativa eficiente y constante. Sin embargo, su perfíl técnico no interfiere con
      su capacidad de encontrar soluciones creativas y su sentido común a la hora de tomar acción de
      forma proactiva. Por último, tiene buenas habilidades comunicativas y es honesto, siempre se
      puede contar con él para hablar de cualquier cosa y nunca esconde los problemas con los que se 
      encuentra en el desempeño de sus tareas.
    </sui-segment>
    <sui-header size="huge" style="fontSize: 40px"> Remarkable projects</sui-header>
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


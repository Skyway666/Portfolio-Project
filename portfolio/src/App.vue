<template>
  <div id="app">
    <div v-if="$route.name !== 'CV'">
      <div v-if="$isLandscape()">
        <MainMenu/>
      </div>
      <div v-else>
        Barra de navegación movil
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import 'semantic-ui-css/semantic.min.css';

export default {
  name: 'App',
  created(){
    document.title = "Lucas García Mateu - Developer Portfolio"
  },
  components: { 
    MainMenu
  }
}
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-wrap: pretty;
    display: flex;
    justify-content: center;
  }
</style>

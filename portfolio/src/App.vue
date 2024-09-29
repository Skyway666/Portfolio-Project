<template>
  <div :class="`app ${mainViewClass}`">
    <!-- Show main menu only if the current view is not CV -->
    <div v-if="$route.name !== 'CV'" style="padding-bottom:100px">
      <!-- Desktop main menu -->
      <div v-if="$isLandscape()">
        <MainMenu/>
      </div>
      <!-- Mobile main menu -->
      <div v-else>
        Movile navigation bar
      </div>
    </div>

    <!-- Main view -->
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
  },
  computed:{
    mainViewClass(){
      return this.$route.name !== 'CV' ? "main-view" : ""; 
    }
  }
}
</script>

<style scoped>
    .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    white-space: pre-line;
  }

  .main-view{
    padding: 0% 20%;
  }

  /*Portrait*/
  @media (max-width: 480px){
    .main-view{
        padding: 0px 5%;
    }
  }
</style>

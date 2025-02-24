<template>
  <div :class="`app ${$route.meta.mainViewClass}`">
    <!-- Show main menu only if the current view is not CV -->
    <div v-if="$route.name !== 'CV'" style="padding-bottom:100px">
      <MainMenu/>
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

  .main-view-narrow{
    padding: 0% 20%;
  }
  .main-view-wide{
    padding: 0%  5%;
  }

  /*Portrait*/
  @media (max-width: 480px){
    .main-view-narrow{
        padding: 0px 5%;
    }
    .main-view-wide{
        padding: 0px 5%;
    }
  }
</style>

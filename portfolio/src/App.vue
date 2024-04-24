<template>
  <div id="app">
    <MainMenu/>
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import MainMenu from './components/MainMenu.vue'
import 'semantic-ui-css/semantic.min.css';

export default {
  name: 'App',
  components: {
    Home,
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
  color: #502c2c;
}
</style>

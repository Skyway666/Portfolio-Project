<template>
  <div id="app">
    <MainMenu/>
    <Home/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import Home from './views/Home.vue'
import 'semantic-ui-css/semantic.min.css';

export default {
  name: 'App',
  components: {
    MainMenu,
    Home
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

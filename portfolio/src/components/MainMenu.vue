<template>
  <sui-menu class="main-menu" fixed>
    <router-link class="menu-title" tag="div" to="/">
      Lucas García Mateu
    </router-link>
    <sui-menu-menu position="right">
      <router-link class="menu-button" tag="div" to="/">
        Home
      </router-link>
      <router-link class="menu-button" tag="div" to="/projects">
        Projects
      </router-link>
      <router-link class="menu-button" tag="div" to="/projects">
        Career
      </router-link>
      <router-link class="menu-button" tag="div" to="/">
        About
      </router-link>
    </sui-menu-menu>
  </sui-menu>
</template>
  
  <script>
  export default {
    name: 'MainMenu'
  }
  </script>
  

  <style scoped>
  .main-menu{
    padding: 25px 60px;
  }
  .menu-title{
    font-size: 30px;
    font-weight: bold;
    cursor: pointer
  }
  .menu-button{
    font-size: 20px;
    font-weight: bold;
    padding: 0px 25px ;
    cursor: pointer
  }
  </style>
  
  
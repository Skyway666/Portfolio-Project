<template>
  <sui-menu class="main-menu" fixed>
    <div class="menu-title">
      Lucas García Mateu
    </div>
    <sui-menu-menu position="right">
      <div class="menu-button">
        Home
      </div>
      <div class="menu-button">
        Projects
      </div>
      <div class="menu-button">
        Career
      </div>
      <div class="menu-button">
        About
      </div>
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
  }
  .menu-button{
    font-size: 20px;
    font-weight: bold;
    padding: 0px 25px ;
  }
  </style>
  
  
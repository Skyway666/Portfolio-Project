<template>
  <sui-menu class="main-menu" fixed>
    <div class="menu-title-container">
      <h2>Lucas García Mateu</h2>
    </div>
    <sui-menu-menu position="right">
      <sui-menu-item>Home</sui-menu-item>
      <sui-menu-item>Design</sui-menu-item>
      <sui-menu-item>Programming</sui-menu-item>
      <sui-menu-item>About</sui-menu-item>
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
    padding: 10px 20px
  }
  .menu-title-container{
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    width: 15%;
  }
  </style>
  
  
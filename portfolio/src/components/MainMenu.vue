<template>
  <div class="background">
    <!-- Main menu bar -->
    <sui-menu class="main-menu">
      <!-- Main menu portrait content-->
      <sui-icon v-if="!$isLandscape()" name="bars" size="big" link @click="onPortraitMenuToggled"/>

      <!-- Main menu general content-->
      <sui-menu-menu :position="namePosition">
        <router-link class="menu-title" tag="div" to="/">
          Lucas García Mateu
        </router-link>
      </sui-menu-menu>

      <!-- Main menu landscape content-->
      <sui-menu-menu v-if="$isLandscape()" position="right" >
        <router-link v-for="(menuItem, index) in menuItems" :key="index"
          class="menu-button" tag="div" :to="menuItem.to">
          {{menuItem.text}}
        </router-link>
      </sui-menu-menu>
    </sui-menu>

    <!-- Main menu portrait buttons -->
    <sui-sidebar-pushable class="menu-portrait-buttons">
      <sui-menu
        is="sui-sidebar"
        :visible="portraitMenuExpanded"
        animation="overlay"
        width="thin"
        icon="labeled"
        vertical
      >
        <sui-menu-item v-for="(menuItem, index) in menuItems" :key="index">
          <router-link class="menu-button" tag="div" :to="menuItem.to" @click.native="onPortraitMenuClicked">
            {{menuItem.text}}
          </router-link>
        </sui-menu-item>
      </sui-menu>
    </sui-sidebar-pushable>
  </div>
</template>
  
  <script>
  export default {
    name: 'MainMenu',
    data(){
      return {
        portraitMenuExpanded: false,
        menuItems: [
          {
            text: "Home",
            to: "/",
          },
                    {
            text: "Projects",
            to: "/projects",
          },
                    {
            text: "Career",
            to: "/career",
          },
                    {
            text: "About",
            to: "/about",
          }
        ]
      }
    },
    methods: {
      onPortraitMenuToggled(){
        this.portraitMenuExpanded = !this.portraitMenuExpanded;
      },
      onPortraitMenuClicked(){
        this.portraitMenuExpanded = false;
      }
    },
    computed: {
      namePosition(){
        return this.$isLandscape() ? "left" : "right";
      }
    }
  }
  </script>
  

  <style scoped>
  .background{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }
  .main-menu{
    padding: 25px 4vw;
    margin-bottom: 0px !important;
    pointer-events: all;
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
    cursor: pointer;
    pointer-events: all;
  }
  .menu-portrait-buttons{
    flex-grow: 1;
  }
  </style>
  
  
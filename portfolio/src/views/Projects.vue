<template>
    <div class="background">
        <!-- Filters -->
        <div>
            <sui-button>Filter 1</sui-button>
            <sui-button>Filter 2</sui-button>
            <sui-button>Filter 3</sui-button>
            <sui-button>Filter 4</sui-button>
        </div>
        <!-- Grid -->
        <div class="projects-grid">
            <router-link class="project" v-for="(project, index) in $store.state.projects" :key="index" 
              :to="'/project/' + index">
              <img :src="project.imagePath" class="project-image" @load="resizeImageToContainer($event)"/>
              <div class="project-overlay" >
                  <div class="project-title">{{project.title}}</div>
                  <div class="project-description">{{project.description}}</div>
              </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Projects",
  methods: {
    resizeImageToContainer(event) {
      // Get reference to the image element and its container
      const img = event.target;  
      const container = img.parentElement;
      
      // Compute their aspect ratios
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const containerRatio = container.offsetWidth / container.offsetHeight;

      // More horizontal than container, set width and adapt height
      if (imgRatio > containerRatio) 
      {
        img.style.width = '100%';
        img.style.maxHeight = '100%';
      }
      // More vertical than container, set height and adapt width
      else 
      {
        img.style.height = '100%';
        img.style.maxWidth = '100%';
      }
    }
  },
}
</script>

<style scoped>
  .background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .projects-grid{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    row-gap: 5vh;
  }
  .project{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    aspect-ratio: 16/9;
  }
  .project-title{
    font-size: 40px;
    font-weight: bold;
    line-height: normal;
  }
  .project-description{
    font-size: 18px;
  }
  .project-image{
    z-index: -1;
    position: absolute;
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
  }
  .project-overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); 
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 15px;
    padding: 0px 20px;
  }
  .project:hover .project-overlay {
    opacity: 1;
  }

  @media (max-width: 480px){
    .project{
        width: 100%;
    }
  }
</style>
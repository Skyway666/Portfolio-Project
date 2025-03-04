<template>
    <div class="background">
        <div class="filters">
            <sui-button v-for="(filter, index) in filters" :key="index"
              v-show="filterIsVisible(filter)"
              :color="filter.state ? 'black': null" 
              @click="filter.state = !filter.state">
                {{ filter.name }}
              </sui-button>
        </div>
        <!-- Grid -->
        <div class="projects-grid">
            <!-- Project -->
            <router-link class="project" v-for="(project, index) in $store.state.projects" :key="index"
              v-show="projectIsVisible(project)"
              :to="'/project/' + index">
              <!-- Image -->
              <img :src="project.thumbnail" class="project-image" @load="resizeImageToContainer($event)"/>
              <!-- Overlay -->
              <div class="project-overlay" >
                  <div class="project-title">{{project.title}}</div>
                  <div class="project-description">{{project.shortDescription}}</div>
              </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Projects",
  data(){
    return{
      filters: [
        {
          name: "Unity",
          state: true,
          isKeyProjectFilter: true
        },
        {
          name: "C++",
          state: true,
          isKeyProjectFilter: true
        },
        {
          name: "Professional",
          state: true,
          isKeyProjectFilter: true
        },
        {
          name: "Education",
          state: true,
          isKeyProjectFilter: true
        },
        {
          name: "Personal",
          state: true,
          isKeyProjectFilter: true
        },
        {
          name: "Design",
          state: true,
          isKeyProjectFilter: false
        },
        {
          name: "Art",
          state: true,
          isKeyProjectFilter: false
        }
      ],
      showKeyProjects: true
    }
  },
  methods: {
    resizeImageToContainer(event) {
      // Get reference to the image element and its container
      const img = event.target;  
      const container = img.parentElement;
      
      // Compute their aspect ratios
      const imgRatio = img.naturalWidth / img.naturalHeight;

      // Handle container being hidden
      var prevDisplayValue = container.style.display;
      container.style.display = 'block';
      const containerRatio = container.offsetWidth / container.offsetHeight;
      container.style.display = prevDisplayValue;

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
    },
    filterIsVisible(filter){
      return this.showKeyProjects ? filter.isKeyProjectFilter : true;
    },
    projectIsVisible(project){
      // Make a list with the current active filters
      var activeFilters = [];
      this.filters.forEach((filter) => {
        if(this.filterIsVisible(filter) && filter.state)
          activeFilters.push(filter.name);
      });

      // Check if some of the tags matches some of the filters
      return project.tags.some(projectTag => activeFilters.includes(projectTag));
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
    flex-grow: 1;
    justify-content: flex-start;
  }

  /*Filters*/
  .filters{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
    gap: 5px;
  }

  /*Projects*/
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
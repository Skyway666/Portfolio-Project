<template>
  <div class="background">
    <div v-for="(careerSection, index) in careerSections" :key="index">
      <div class="career-section">
        <div class="career-section-element left">
            {{careerSection.title}}
        </div>
        <div class="career-section-element right">
          <div class="milestone" v-for="(milestone, index) in careerSection.milestones" :key="index">
              {{milestone.title}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Career",
  data(){
    return{
      careerSections: [
        {
            title: "Professional",
            milestones: [
              {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              },
              {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              },
              {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              }
            ]
        },
        {
            title: "Education",
            milestones: [
              {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              },
                            {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              },
                            {
                time: "X-Y",
                title: "Title Sample",
                description: "Description Sample"
              }
            ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .background{
    padding: 0% 20%;
  }
  .career-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .career-section-element{
    width: 50%;
    text-align: initial;
  }
  .right{
    text-align: right;
  }
  .left{
    text-align: left;
    font-size: 30px;
    font-weight: bold;
  }
  .milestone{
    display: flex;
    flex-direction: column;
  }
</style>
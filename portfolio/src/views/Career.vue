<template>
  <div>
    <div v-for="(careerSection, index) in careerSections" :key="index">
      <div class="career-section">
        <div style="width: 30%">
          <div class="career-section-title">
            {{careerSection.title}}
          </div>
        </div>
        <div style="width: 70%">
          <div class="career-section-milestones" v-for="(milestone, index) in careerSection.milestones" :key="index">
            <div class="milestone">
              <div class="milestone-date">
                {{milestone.time}}
              </div>
              <div class="milestone-data">
                <div class="milestone-data-title">
                  {{milestone.title}}
                </div>
                <div>
                  {{milestone.description}}
                </div>
              </div>

            </div>
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
                time: "2020 (November) - Now",
                title: "Senior Programmer - Sngular",
                description: "I came to know of Sngular when I was hired as a freelancer to work in the 'WeirdPirates' videogame project. After 3 months, I was hired as a Junior employee.\n\nIn the span of 4 years I have worked in videogame, museum and internal tools projects as well as performed important installation trips, being promoted to Senior."
              },
              {
                time: "2020 (July - November)",
                title: "Dungeon Dome",
                description: "Prototype blockchain project consisting on creating a Dungeon Crawler experience where the characters would be NFTs using the ethereum network. Our own token was created using Solidity."
              },
              {
                time: "2020 (February - April)",
                title: "Internship - FineCortex",
                description: "As a part of my college degree I participated in an Internship working with web technology, which ended up abruptly because of COVID. The project was about the creation of a library of UI components using Vue, and the knowledge aquired during it has enabled me to build this website."
              },
            ]
        },
        {
            title: "Education",
            milestones: [
              {
                time: "2016-2020",
                title: "Bachelor’s Degree in Videogames - CITM (UPC)",
                description: "A multidisciplinary videogame degree with a strong low level programming curriculum, solid design subjects and useful artistic lessons."
              },
              {
                time: "2014-2016",
                title: "Technical Highschool - Emperador Carles",
                description: "Highschool studies before entering college, my physics and maths base."
              },
            ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .career-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .career-section-block{
    width: 50%;
  }
  .career-section-title{
    text-align: left;
    font-size: 30px;
    font-weight: bold;
  }
  .career-section-milestones{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .milestone{
    display: flex;
    flex-direction: row;
  }
  .milestone-date{
    width: 25%;
  }
  .milestone-data{
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .milestone-data-title{
    font-size: 20px;
    font-weight: bold;
    margin-bottom : 10px;
  }
</style>
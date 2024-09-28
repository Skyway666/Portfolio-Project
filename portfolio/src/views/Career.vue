<template>
  <div class="background">
    <div v-for="(careerSection, index) in careerSections" :key="index">
      <div class="career-section">
        <div class="career-section-block">
          <div class="career-section-title">
            {{careerSection.title}}
          </div>
        </div>
        <div class="career-section-block">
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
                time: "X-Y",
                title: "Title Sample",
                description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas"
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
    /*padding-left: 50%;*/
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
  }
</style>
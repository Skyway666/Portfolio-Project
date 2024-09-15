<template>
  <div class="background">

    <!-- Title -->
    <div class="main-title">Who am I?</div>
    <sui-divider/>
    <div class="main-subtitle">Besides a <b>pro</b>fessional</div>

    <!-- Origin section -->
    <div class="section">
      <div class="section-text">
        <div class="section-title">Origin</div>
        <div class="section-subtitle">Just like a superhero!</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus placerat vulputate elit sed semper. Nunc posuere faucibus nisi et vestibulum. 
          Fusce et sem urna. Donec mollis tempor dui id suscipit. Sed sed eleifend leo, et condimentum erat. 
          Donec auctor malesuada purus et consequat. Vivamus pulvinar vel nibh et aliquam. Sed dictum tortor vitae nibh aliquet condimentum. 
          Proin sagittis, orci sed interdum pulvinar, est est laoreet purus, eu placerat est leo porta leo.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20%;
  }
  .main-title{
    font-size: 50px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .main-subtitle{
    font-size: 20px;
  }
  .section{
    display: flex;
    flex-direction: row;
  }
  .section-text{
    width: 50%;
    text-align: left;
  }
  .section-title{
    font-size: 30px;
    font-weight: bold;
    padding: 15px 0px;
  }
  .section-subtitle{
    font-size: 20px;
    font-style: italic;
    padding-bottom: 20px;
  }

    /*Portrait*/
    @media (max-width: 480px){
        .background{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0px 5%;
        }
    }
</style>
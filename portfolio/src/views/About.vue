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
        <div>I was born in sunny Barcelona in 1998 (a good year for the fighting game genre... coincidence?) and lived arround it ever since. 
          My Catalan mother and Argentinian father divorced when I was 3, and I've changed houses quite frequently ever since.
          <br><br>
          I've allways liked studying and been good at it, so the plan was to go to college and become an Aeronautical Engineer. 
          However, my passion for videogames and a career guidance event when I was 17 made me suddenly change my mind. I went to college as planned, but the career of choice was
          "Videgames Design and Development" at <a href="https://www.citm.upc.edu/cat/">CITM</a>. Mama wasn't happy with it at first, but she is now. Thanks mom!
        </div>
      </div>
      <div class="section-image">      
        <img class="about-image" :src="require('@/assets/about/About_Origins.png')"/>
      </div>
    </div>

    <!-- Martial Arts section -->
    <div class="section">
      <div class="section-image">      
        <img class="about-image" :src="require('@/assets/about/About_MartialArts.png')"/>
      </div>
      <div class="section-text">
        <div class="section-title">Martial Arts</div>
        <div class="section-subtitle">The warrior's way</div>
        <div>
          I've allways liked fighting. When other kids were playing football I wanted to learn WWE moves and fight like an anime character. 
          After trying karate and fencing I settled for the martial art that my father also learnt to love: Judo.
          <br><br>
          So far I've become a black belt, however I consider myself more of a Martial Artist than a Judoka, meaning that I want to find out about the 
          reality of combat, which means being knowledgeable in all the ranges of combat. Therefore, the next step in is to learn Muay Thai!
          <br><br>
          To tag along in my martial arts journey or just see some moves, check out my <a href="https://www.youtube.com/@martialsky8678">youtube channel (Martial Sky)</a>.
        </div>
      </div>
    </div>

    <!-- Videogames section -->
    <div class="section">
      <div class="section-text">
        <div class="section-title">Videogames</div>
        <div class="section-subtitle">A series of meaningful choices</div>
        <div>
          For how important they have been in my life, I was a late bloomer when it comes to videogames. I allways was drawn to them, but I didn't get the chance to play
          on my own until I was 8. My first console was a Game Boy Advanced, which made me fell in love with Pokemon and Super Mario. I remember going to the "San Antoni" market, 
          where I exchanged my old games for new ones and the excitment of going back home with a new cartridge in my hands.
          <br><br>
          From then I had the PSP, PS2, PS3, DS, Wii and 3DS consoles. At the age of 14 I discovered League Of Legends, starting a dark chapter in my Gamer career... Finally, at 18, I decided 
          to put and end to it, since it consumed too much of my time. I wanted to keep testing my skills against other players, but without the teamplay element and shorter matches.
          <br><br> 
          I had allways been curious about fighting games, but never got passed the button mashing aspect of them, so I decided to take on the genre and learn everything about it. 
          As of today I keep at it and have so much fun while doing it!
          <br><br>
          I have another <a href="https://www.youtube.com/@theskywayshow9520">youtube channel</a> which never took off, and although 
          it is not in my plans to grow it, I go back and upload something from time to time.
        </div>
      </div>
      <div class="section-image">      
        <img class="about-image" :src="require('@/assets/about/About_Videogames.png')"/>
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
    padding: 0px 20% 50px 20%;
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
    margin-top: 30px;
  }
  .section-text{
    width: 50%;
    text-align: left;
  }
  .section-image{
    width: 50%;
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
  .about-image { 
    max-width: 90%; 
    max-height: 90%;
    margin: auto;
    display: block; 
    border-radius: 50px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
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
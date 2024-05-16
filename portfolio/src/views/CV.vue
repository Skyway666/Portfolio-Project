<template>
    <div class="page-background">
        <div class="page-section">

            <p class="name">LUCAS GARCÍA MATEU</p>
            <p class="position">Game Developer</p>
            <img :src="require('@/assets/CV/LucasGarciaMateu.png')" 
            width="200px"
            height="200px"/>

            <div class="contact-container">
                <sui-list>
                    <!-- Both -->
                    <sui-list-item icon="phone">
                        <sui-list-content>
                            <span>+34 646444233</span>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="mail">
                        <sui-list-content>
                            <a href="mailto:lucasgarciamateu@gmail.com">lucasgarciamateu@gmail.com</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://skyway666.github.io/Portfolio-Project/">Portfolio</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://github.com/Skyway666">Github</a>
                        </sui-list-content>
                    </sui-list-item>

                    <sui-list-item icon="linkify">
                        <sui-list-content>
                            <a href="https://www.linkedin.com/in/lucas-garc%C3%ADa-mateu-517a0b160/">Linked In</a>
                        </sui-list-content>
                    </sui-list-item>
                </sui-list>
            </div>
        </div>
        <div class="page-section">
            
        </div>
        <div class="page-section">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /*Defaults*/
    p{
        font-size: 17px;
        margin: 0;
    }
    a{
        font-size:17px;
        color: lightblue;
    }
    span{
        font-size: 17px;
    }

    /*General containers*/
    .page-background{
        height: 100vh;
        width: calc(100vh * 99/70);
        background-color: #3d3d3d;
        color: white;
        print-color-adjust: exact;
        padding: 30px 30px;
        display: flex;
        flex-direction: row;

    }

    .page-section{
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: calc(100% / 3);
        display: flex;
        align-items: flex-start;
        align-content: flex-end;
        flex-direction: column;
    }

    /*General elements*/
    .link{
        cursor: pointer;
        color: lightblue;
    }

    /*Left section*/
    .name{
        font-size: 30px;
        margin: 0;
    }

    .position{
        font-size: 20px;
    }

    .contact-container{
        margin-top: 30px;
        text-align: left;
    }

    @media print{

    }


    @page{
        size: A4 landscape;
        margin: 0;
    }
</style>
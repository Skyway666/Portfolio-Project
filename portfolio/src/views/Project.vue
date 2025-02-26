<template>
    <div class="background">
        <!-- Header -->
        <div class="header">
            <div class="header-left">
                <!-- Title -->
                <div class="header-title">
                    {{ project.title }}
                </div>
                <!-- Specifications -->
                <div class="header-specifications">
                    <!-- Year -->
                    <div class="header-specification">
                        <sui-icon name="calendar"/>
                        <div>{{ project.specifications.year }}</div>
                    </div>
                    <!-- Duration -->
                    <div class="header-specification">
                        <sui-icon name="stopwatch"/>
                        <div>{{ project.specifications.duration }}</div>
                    </div>
                    <!-- Team Size -->
                    <div class="header-specification">
                        <sui-icon name="users"/>
                        <div>{{ project.specifications.teamSize }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Body -->
         <div class="body">
            <div class="body-graphics">
                <img class="body-image" :src="project.imagePath"/>
            </div>
            <div class="body-text">
                {{project.description}}
            </div>
         </div>
    </div>
</template>
<script>
export default {
    computed: {
        project() {
            return this.$store.state.projects[this.$route.params.id];
        }
    }
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
    .header{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 3vh;
    }
    .header-left{
        display: flex;
        flex-direction: column;
    }
    .header-title{
        font-size: 60px;
        line-height: 50px;
        height: fit-content;
    }
    .header-specifications{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        font-size: 20px;
        gap: 30px;
    }
    .header-specification{
        display: flex;
        flex-direction: row;
    }

    .body{
        display: flex;
        flex-direction: row;
    }
    .body-graphics{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    .body-image{
        width: 90%;
    }
    .body-text{
        display: flex;
        flex-direction: column;
        width: 50%;
        text-align: left;
    }
</style>
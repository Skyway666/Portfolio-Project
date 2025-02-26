<template>
    <div>
        <h1>{{ project.title }}</h1>
        <h3>{{ project.description }}</h3>
    </div>
</template>
<script>
export default {
    computed: {
        project(){
            return this.$store.state.projects[this.$route.params.id];
        }
    }
}
</script>
<style scoped>
    
</style>
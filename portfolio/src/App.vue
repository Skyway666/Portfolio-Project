<template>
    <div :class="`app ${$route.meta.mainViewClass}`">
        <!-- Show main menu only if the current view is not CV -->
        <MainMenu v-if="$route.name !== 'CV'" />

        <!-- Main view -->
        <router-view />
    </div>
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import "semantic-ui-css/semantic.min.css";

export default {
    name: "App",
    created() {
        document.title = "Lucas García Mateu - Developer Portfolio";
        this.$store.dispatch("loadProjects");
    },
    components: {
        MainMenu,
    },
};
</script>

<style scoped>
.app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    white-space: pre-line;
}

.main-view-narrow {
    padding: 130px 20%;
}
.main-view-wide {
    padding: 130px 5%;
}

/*Portrait*/
@media (max-width: 480px) {
    .main-view-narrow {
        padding: 130px 5%;
    }
    .main-view-wide {
        padding: 130px 5%;
    }
}
</style>

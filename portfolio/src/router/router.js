import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Career from "../views/Career.vue";
import About from "../views/About.vue";
import CV from "../views/CV.vue";
import Projects from "../views/Projects.vue";
import Project from "../views/Project.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { mainViewClass: "" },
    },
    {
        path: "/projects",
        name: "projects",
        component: Projects,
        meta: { mainViewClass: "main-view-wide" },
    },
    {
        path: "/project/:name",
        name: "project",
        component: Project,
        meta: { mainViewClass: "main-view-wide" },
    },
    {
        path: "/career",
        name: "career",
        component: Career,
        meta: { mainViewClass: "main-view-narrow" },
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: { mainViewClass: "main-view-narrow" },
    },
    {
        path: "/CV",
        name: "CV",
        component: CV,
        meta: { mainViewClass: "" },
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
    // eslint-disable-next-line
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;

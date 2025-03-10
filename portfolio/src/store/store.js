import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: []
    },
    mutations: {
        setProjects(state, projects){
            state.projects = projects;
        }
    },
    actions: {
        async loadProjects({commit}){
            const response = await fetch("/content/projects/projects.json");
            const data = await response.json();
            commit('setProjects', data);
        }
    }
})
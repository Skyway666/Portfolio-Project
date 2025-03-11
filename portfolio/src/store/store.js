import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
        filters: [
            {
              name: "Unity",
              state: true,
              isKeyProjectFilter: true
            },
            {
              name: "C++",
              state: true,
              isKeyProjectFilter: true
            },
            {
              name: "Professional",
              state: true,
              isKeyProjectFilter: true
            },
            {
              name: "Education",
              state: true,
              isKeyProjectFilter: true
            },
            {
              name: "Personal",
              state: true,
              isKeyProjectFilter: true
            },
            {
              name: "Design",
              state: true,
              isKeyProjectFilter: false
            },
            {
              name: "Art",
              state: true,
              isKeyProjectFilter: false
            }
          ],
          showKeyProjects: true,
    },
    getters:{
        filters(state){
            return state.filters.filter(filter => state.showKeyProjects ? filter.isKeyProjectFilter : true)
        },
        activeFilters(state, getters){
            return getters.filters.filter(filter => filter.state);
        },
        projects(state, getters){
            return state.projects.filter(project => getters.activeFilters.some(activeFilter => project.tags.includes(activeFilter.name)))
        }
    },
    mutations: {
        setProjects(state, projects){
            state.projects = projects;
        },
        toggleFilter(state, filterName){
            const filter = state.filters.find(filter => filter.name === filterName);
            filter.state = !filter.state;
        }
    },
    actions: {
        async loadProjects({commit}){
            const response = await fetch("./content/projects/projects.json");
            const projects = await response.json();
            commit('setProjects', projects);
        }
    }
})
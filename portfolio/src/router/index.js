import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import ProvisionalProjectsList from '../views/ProvisionalProjectsList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home

  },
  {
    path:'/projects',
    name: 'projects',
    component: ProvisionalProjectsList
  },
  {
    path:'/CV',
    name: 'CV',
    component: CV
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
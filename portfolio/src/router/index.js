import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Career from '../views/Career.vue'
import About from '../views/About.vue'
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
    path:'/career',
    name: 'career',
    component: Career
  },
  {
    path:'/about',
    name: 'about',
    component: About
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
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import('../views/Bar.vue')
  },
  {
    path: '/multi',
    name: 'Multi',
    component: () => import('../views/Multiple.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
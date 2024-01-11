import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Pages/Home.vue')
    },
    {
      path: '/galerea',
      name: 'Galerea',
      component: () => import('@/views/Pages/Galerea.vue')
    },
    {
      path: '/gadaxda',
      name: 'Gadaxda',
      component: () => import('@/views/Pages/Gadaxda.vue')
    },
    
  ]
})


export default router

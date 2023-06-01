import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Pages/Home.vue')
    },
    {
      path: '/ourwork',
      name: 'ourwork',
      component: () => import('../views/Pages/OurWork.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Pages/Contact.vue')
    },
    {
      path: '/services',
      component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
      children: [
        {
          path: '',
          name: 'Custom',
          component: () => import('../views/Pages/Custom.vue')
        },
        {
          path: ':id',
          name: 'Templated',
          component: () => import('../views/Pages/Templated.vue'),
        
        }
      ]
    },
    {
      path: '/blog',
      component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
      children: [
        {
          path: ':id',
          name: 'BlogIner',
          component: () => import('../views/Pages/BlogIner.vue')
        }
      ]
    }
  ]
})


export default router

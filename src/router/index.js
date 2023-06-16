import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Pages/Home.vue')
    },
    {
      path: '/ourwork',
      name: 'Ourwork',
      component: () => import('../views/Pages/OurWork.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Pages/Contact.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
      children: [
        {
          path: 'custom',
          name: 'Custom',
          component: () => import('../views/Pages/Custom.vue')
        },
        {
          path: 'templated',
          name: 'Templated',
          component: () => import('../views/Pages/Templated.vue'),
        
        }
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
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

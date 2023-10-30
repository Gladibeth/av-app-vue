import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: ()=> import('../views/dashboard.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: ()=> import('../views/auth/sign-in.vue'),
    },
    {
      path: '/executive-summary',
      name: 'executive-summary',
      component: ()=> import('../views/executive-summary.vue'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: ()=> import('../views/panel.vue'),
    },
    
  ]
})

export default router

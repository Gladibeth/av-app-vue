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

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('isLogin');
  if (!user) {
    next('/sign-in');
  } else {
    next(); 
  }
});

export default router

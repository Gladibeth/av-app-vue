import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: ()=> import('../views/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'sign-in',
      component: ()=> import('../views/auth/sign-in.vue'),
    },
    {
      path: '/resumen-ejecutivo',
      name: 'executive-summary',
      component: ()=> import('../views/executive-summary.vue'),
    },
    {
      path: '/panel',
      name: 'panel',
      component: ()=> import('../views/panel.vue'),
    },
    {
      path: '/detalles',
      name: 'detalles',
      component: ()=> import('../views/detail.vue'),
      props: true,
      children: [
        {
          path: 'zonas',
          name: 'zonas',
          component: ()=> import('../views/detail.vue'),
          props: true,
        },
        {
          path: 'zonas/:id/almacenes',
          name: 'almacenes',
          component: ()=> import('../views/detail.vue'),
          props: true,
        },
        {
          path: 'zonas/:id/almacenes/:id/ordenes',
          name: 'ordenes',
          component: ()=> import('../views/detail.vue'),
          props: true,
        },
        {
          path: 'zonas/:id/almacenes/:id/ordenes/:id/factura',
          name: 'factura',
          component: ()=> import('../views/detail.vue'),
          props: true,
        },
      ],
    },
    
  ]
})

// router.beforeEach((to, from, next) => {
//   const user = localStorage.getItem('isLogin');
//   // const protectedPaths = ['/', '/executive-summary', '/panel'];
//   if (!user) {
//     next('/sign-in');
//   } else{
//     next(); 
//   }
// });

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:()=>import("@/pages/Home.vue")
    },
    {
      path: '/register',
      name: 'Register',
      component:()=>import("@/pages/Register.vue")
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component:()=>import("@/pages/SignIn.vue")
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component:()=>import("@/pages/DashBoard.vue")
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: () => import(/* webpackChunkName: "NoPageFound" */ '@/shared/pages/NoPageFound.vue')
  },
  ]
})



export default router

import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import SignUp from '../components/Boarding/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/signup',
      name: 'signup',
      component: SignUp,
     
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
      
    // },
    
  ]
})


export default router

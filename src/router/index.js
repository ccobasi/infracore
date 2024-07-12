import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import SignUp from '../components/Boarding/SignUp.vue'
import Login from '../components/Boarding/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/signup',
      name: 'signup',
      component: SignUp,
     
    },
    {
      path: '/signin',
      name: 'signin',
      component: Login,
     
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
      
    // },
    
  ]
})


export default router

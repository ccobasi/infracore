import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/Boarding/SignUp.vue'
import Login from '../components/Boarding/Login.vue'
import HomeView from '../components/Views/HomeView.vue'

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
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    
  ]
})


export default router

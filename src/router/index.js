import { createRouter, createWebHistory } from 'vue-router'
import Todo from '../view/ToDOList.vue'
import Profile from '../view/Profile.vue'
import Home from '../view/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

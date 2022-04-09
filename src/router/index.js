import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CommandView from '../views/CommandView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about', 
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact', 
    component: ContactView
  },
  {
    path: '/command',
    name: 'command', 
    component: CommandView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

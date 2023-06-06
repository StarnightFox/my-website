import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.base),
  routes: [
    {
      path: '/my-website/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-website/Projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/latex',
    component: () => import('../views/latex.vue'),
  },
  {
    path: '/markdown',
    component: () => import('../views/markdown.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

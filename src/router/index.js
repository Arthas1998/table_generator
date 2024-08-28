import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias:'/latex',
    component: () => import('@/views/LatexPage.vue'),
  },
  {
    path: '/markdown',
    component: () => import('@/views/MarkdownPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

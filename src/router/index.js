import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/article/:name',
      name: 'ArticleView',
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/page/:name',
      name: 'PageView',
      component: () => import('@/views/PageView.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router

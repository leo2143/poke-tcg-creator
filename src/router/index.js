import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: RootView,
    },

    {
      path: '/history',
      name: 'history',

      component: () => import('../views/HistoryView.vue'),
    },
    {
      path: '/create-card',
      name: 'create-card',

      component: () => import('../views/CreateCardView.vue'),
    },
  ],
})

export default router

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
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
        {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/history',
      name: 'history',

      component: () => import('../views/History.vue'),
    },
            {
      path: '/createCard',
      name: 'create-card',

      component: () => import('../views/CreateCardView.vue'),
    },
  ],
})

export default router

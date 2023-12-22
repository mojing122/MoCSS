import { createRouter, createWebHistory } from 'vue-router'
import FirstPageView from '../views/FirstPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPageView,
      children: [
        {
          path: 'home',
          name: 'about',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
    {
      path: '/deatil',
      name: 'deatil',
      component: () => import('../views/DeatilView.vue'),
      children: [
        {
          path: 'bottombar',
          name: 'BottomNavBar',
          component: () => import('../components/BottomNavBar.vue')
        },
        {
          path: 'colorlink',
          name: 'ColorLink',
          component: () => import('../components/ColorLink.vue')
        },
        {
          path: 'scrollchagednav',
          name: 'ScrollChagedNav',
          component: () => import('../components/ScrollChagedNav.vue')
        },
        {
          path: 'rainbowbutton',
          name: 'RainBowButton',
          component: () => import('../components/RainBowButton.vue')
        }
      ]
    }
  ]
})

export default router

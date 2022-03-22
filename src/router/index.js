
import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import dashboardRouter from './dashboardRouter.js'
import userRouter from './userRouter.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    dashboardRouter,
    userRouter,
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/other/NotFound.vue'),
      meta: {
        notLoad: true
      }
    }
  ]
})

export default router

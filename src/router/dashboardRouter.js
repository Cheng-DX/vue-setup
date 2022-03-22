import TheContainer from '@/components/layout/TheContainer.vue'

export default {
  path: '/',
  name: 'root',
  component: TheContainer,
  meta: {
    title: '根路由'
  },
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '首页'
      }
    }
  ]
}
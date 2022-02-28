import TheContainer from '@/components/layout/TheContainer.vue'

export default {
  path: '/user',
  name: 'user',
  component: TheContainer,
  meta: {
    title: '个人中心'
  },
  redirect: '/user/home',
  children: [{
    path: 'home',
    name: 'home',
    component: () => import('@/views/user/Home.vue'),
    meta: {
      title: '首页'
    }
  }, {
    path: 'settings',
    name: 'settings',
    component: () => import('@/views/user/Settings.vue'),
    meta: {
      title: '设置'
    }
  }]
}
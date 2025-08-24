import type { RouteRecordRaw } from 'vue-router'

const paths: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    name: 'index',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  },
]

export default paths

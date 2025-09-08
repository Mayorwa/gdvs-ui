import type { RouteRecordRaw } from 'vue-router'

const paths: Array<RouteRecordRaw> = [
  {
    path: '/bio',
    component: () => import('@/views/bio.vue'),
    name: 'bio',
    meta: {
      layout: 'app',
    },
  },
  {
    path: '/tree',
    component: () => import('@/views/tree.vue'),
    name: 'tree',
    meta: {
      layout: 'app',
    },
  },
  {
    path: '/timeline',
    component: () => import('@/views/timeline.vue'),
    name: 'timeline',
    meta: {
      layout: 'app',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: {
      layout: 'empty',
    },
  },
]

export default paths

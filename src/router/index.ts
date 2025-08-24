import { createRouter, createWebHistory } from 'vue-router'
import routes from './paths'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // @ts-ignore
    document.getElementById('app').scrollIntoView()
  },
})
export default router

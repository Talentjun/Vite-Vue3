import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/Home.vue'
import RouterAbout from '../components/RouterComponent/About.vue'
import NotFound from '../components/RouterComponent/NotFound.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: RouterAbout },
  { path: '/notFound', component: NotFound }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
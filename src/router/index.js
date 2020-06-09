import Vue from 'vue'
import Router from 'vue-router'
import WebPage from '@/view/web'
import MobilePage from '@/view/mobile'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/view/judge')
    },
    // pc端
    {
      path: '/web',
      name: 'WebPage',
      component: WebPage
    },
    // 手机端
    {
      path: '/mobile',
      name: 'WobilePage',
      component: MobilePage
    }
  ]
})

export default router

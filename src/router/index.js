import Vue from 'vue'
import Router from 'vue-router'
import Timer from '@/components/Timer'
import History from '@/components/History'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/timer',
      name: 'Timer',
      component: Timer
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})

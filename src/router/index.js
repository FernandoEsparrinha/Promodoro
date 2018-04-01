import Vue from 'vue'
import Router from 'vue-router'
import Timer from '@/components/Timer'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
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

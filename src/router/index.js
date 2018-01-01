import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '@/components/views/home/home'
import gameSetupComponent from '@/components/views/game-setup/game-setup'
import gamePlayComponent from "@/components/views/game-play/game-play"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeComponent
    },
    {
      path: '/setup',
      name: 'game-setup',
      component: gameSetupComponent
    },
    {
      path: '/gameplay',
      name: 'game-play',
      component: gamePlayComponent
    }
  ]
})

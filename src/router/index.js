import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '@/components/views/home/home'
import newPlayer from '@/components/views/createUsername/create-username'
import gamePlay from "@/components/views/gamePlay/game-play"

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
      path: '/newplayer',
      name: 'newplayer',
      component: newPlayer
    },

    {
      path: '/gameplay',
      name: 'game-play',
      component: gamePlay
    }
  ]
})

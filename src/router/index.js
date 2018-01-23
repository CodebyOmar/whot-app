import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/components/views/sign-in/sign-in'
import newPlayer from '@/components/views/createUsername/create-username'
import gamePlay from "@/componenets/views/gamePlay/game-play"

Vue.use(Router)

export default new Router({ 
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: signIn
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

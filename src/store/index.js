import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import state from './store.state'
import actions from './store.actions'
import mutations from './store.mutations'
import getters from './store.getters'

Vue.use(VueResource)

Vue.use(Vuex)

Vuex.Store.prototype.$http = Vue.http

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store

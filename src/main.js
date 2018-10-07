// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.App = new Vue({
  el: '#app',
  router,
  store,
  template: '<App ref="app"/>',
  components: { App }
})

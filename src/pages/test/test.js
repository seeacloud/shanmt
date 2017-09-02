import Vue from 'vue'
import Router from 'vue-router'
import XXX from './xxx.vue'

Vue.use(Router)

const routes = [
  {path: '/', component: XXX}
]

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    ttt: 'xxx'
  }
})

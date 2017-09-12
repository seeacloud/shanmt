import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import '../../../static/normal.css'
import Router from 'vue-router'
import SmtM from './SmtM.vue'
import SmtAgent from './SmtAgent.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Service from '../../components/Service.vue'
import FooterItem from '../../components/Footer.vue'
import '../../../static/iconfont/iconfont.css'

Vue.use(Router)
Vue.use(iView)

const routes = [
  {path: '/smtm', component: SmtM},
  {path: '/smtagent', component: SmtAgent}
]

const router = new Router({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    activeItem: 'products'
  },
  components: {HeaderItem, SmtAgent, SmtM, Service, FooterItem}
})

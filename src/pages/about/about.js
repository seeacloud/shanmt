import Vue from 'vue'
import VueRouter from 'vue-router'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'
import SideMenu from '../../components/SideMenu.vue'
import Banner from '../../components/Banner.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/iconfont/iconfont.css'
import SmtIntro from './SmtIntro.vue'
import '../../../static/normal.css'
import Dev from './Dev.vue'
import Service from './Service.vue'
import Contact from './Contact'

Vue.use(iView)
Vue.use(VueRouter)

const routes = [
  {path: '/intro', name: 'intro', component: SmtIntro},
  {path: '/dev', name: 'dev', component: Dev},
  {path: '/service', name: 'service', component: Service},
  {path: '/contact', name: 'contact', component: Contact}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    bannerinfo: {title: '关于山木通', imgurl: './static/img/banner-cloud.jpg', txtalign: ''},
    links: [
      {title: '选择山木通', url: '/intro', name: 'intro'},
      {title: '发展历程', url: '/dev', name: 'dev'},
      {title: '服务保障', url: '/service', name: 'service'},
      {title: '联系我们', url: '/contact', name: 'contact'}
    ],
    initial: 'intro'
  },
  components: {HeaderItem, FooterItem, SideMenu, Banner, SmtIntro, Dev, Service, Contact}
})

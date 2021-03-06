import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/iconfont/iconfont.css'
import Banner from '../../components/Banner.vue'
import MainContent from './MainContent.vue'

Vue.use(iView)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {imgurl: './static/img/satelite.jpg'}
  },
  components: {HeaderItem, FooterItem, Banner, MainContent}
})

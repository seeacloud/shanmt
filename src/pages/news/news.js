/**
 * Created by alex on 9/16/17.
 */
import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'
import MainContent from './MainContent.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/iconfont/iconfont.css'
import Banner from '../../components/Banner.vue'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {imgurl: './static/img/newsimg.jpg'}

  },
  components: {HeaderItem, FooterItem, MainContent, Banner}
})

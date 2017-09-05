import Vue from 'vue'
import TestItem from './xxx.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/iconfont/iconfont.css'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'

Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    ttt: 'sss'
  },
  components: {TestItem, HeaderItem, FooterItem}
})

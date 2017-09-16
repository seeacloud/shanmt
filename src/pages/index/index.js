import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/iconfont/iconfont.css'

Vue.use(iView)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    msg: 'geo'
  },
  components: {HeaderItem, FooterItem}
})

/**
 * Created by alex on 9/5/17.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import FooterItem from '../../components/Footer.vue'
import '../../../static/iconfont/iconfont.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    switzer: './static/img/switzerland.jpg'
  },
  components: {HeaderItem, FooterItem}
})

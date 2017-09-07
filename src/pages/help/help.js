import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import Banner from '../../components/Banner.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {title: 'help', imgurl: './static/img/banner-cloud.jpg'}
  },
  components: {HeaderItem, Banner}
})

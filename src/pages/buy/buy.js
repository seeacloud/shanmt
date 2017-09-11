import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import Banner from '../../components/Banner.vue'
import FooterItem from '../../components/Footer.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../../../static/normal.css'
import '../../../static/iconfont/iconfont.css'
import PriceCard from './PriceCard.vue'
import Service from '../../components/Service.vue'

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bannerinfo: {title: '山木通报价体系', imgurl: './static/img/banner-cloud.jpg', txtalign: ''},
    info1: {
      bg: '#F5A623',
      title: '建材家具厂家版',
      price: '9999',
      spec: [{des: '·为家具建材厂家量身定制'}, {des: '·全新的管理理念'}, {des: '·解决8大难题'}],
      link: 'xxx'
    },
    info2: {
      bg: '#2196F3',
      title: '建材家具门店版',
      price: '9999',
      spec: [{des: '·为家具建材厂家量身定制'}, {des: '·全新的管理理念'}, {des: '·解决8大难题'}],
      link: 'ssss'
    },
    info3: {
      bg: '#D19CFF',
      title: '云订货平台',
      price: '9999',
      spec: [{des: '·为家具建材厂家量身定制'}, {des: '·全新的管理理念'}, {des: '·解决8大难题'}],
      link: 'ccc'
    },
    info4: {
      bg: '#10D6E4',
      title: '云进销存',
      price: '9999',
      spec: [{des: '·为家具建材厂家量身定制'}, {des: '·全新的管理理念'}, {des: '·解决8大难题'}],
      link: 'eeee'
    }
  },
  components: {HeaderItem, Banner, FooterItem, PriceCard, Service}
})

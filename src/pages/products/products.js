import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'
import '../../../static/normal.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    activeItem: 'products'
  },
  components: {HeaderItem}
})

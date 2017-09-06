import Vue from 'vue'
import HeaderItem from '../../components/Header.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    activeItem: 'products'
  },
  components: {HeaderItem}
})

<template>
  <div class="">
    <!--<div class="con">-->
    <!--<div class="title-con">-->
    <!--<h1>解决企业8大难题</h1>-->
    <!--</div>-->
    <!--</div>-->
    <page-head :info="headinfo"></page-head>


    <sec-left :info="secinfo"></sec-left>
    <sec-right :info="secinfo2"></sec-right>
    <sec-left :info="secinfo3"></sec-left>

  </div>
</template>

<script>
  import SecLeft from '../../components/SecLeft.vue'
  import SecRight from '../../components/SecRight.vue'
  import PageHead from '../../components/PageHead.vue'
  export default {
    name: 'smtm',
    data () {
      return {
        headinfo: {title: '山木通建材家具厂家版', subtitle: '企业运营与管理完整的互联网解决方案', codeurl: './static/img/app.jpg', btn: '立即购买'},
        secinfo: {
          title: '为建材家具企业量身定做',
          subtitle: '山木通团队结合多年的行业管理经验，充分考虑企业的特点，为家具、家居、建材、木业加工生产企业量身定制。',
          captitle: '领先的企业云管理平台',
          captions: [
            {des: '山木通云管理平台电脑端功能完备，可以实现企业的产品管理、销售管理、订货管理、生产管理、库存管理、资金管理、报表中心、移动办公、微信跟踪等功能的所有操作。任意电脑，联网即可操作，无需安装，快捷高效。'}
          ],
          btn: '',
          imgurl: './static/img/laptopiphone.jpg'
        },
        secinfo2: {
          title: '',
          subtitle: '',
          captitle: '功能齐备',
          captions: [
            {des: '● 订单管理、生产管理、库存管理让企业生产经营井井有条'},
            {des: '● 资金管理、报表系统让您对企业运筹帷幄'},
            {des: '● 互联网思维让产品更好的传播'}
          ],
          btn: '',
          imgurl: './static/img/laptop-order-2.jpg'
        },
        secinfo3: {
          title: '',
          subtitle: '',
          captitle: '移动办公',
          captions: [
            {des: '山木通云管理平台电脑端功能完备，可以实现企业的产品管理、销售管理、订货管理、生产管理、库存管理、资金管理、报表中心、移动办公、微信跟踪等功能的所有操作。任意电脑，联网即可操作，无需安装，快捷高效。'}
          ],
          btn: '',
          imgurl: './static/img/iphone-produce.jpg'
        }
      }
    },
    components: {SecLeft, SecRight, PageHead}
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/common';
</style>

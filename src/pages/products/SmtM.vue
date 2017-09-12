<template>
  <div class="">
    <!--<div class="con">-->
    <!--<div class="title-con">-->
    <!--<h1>解决企业8大难题</h1>-->
    <!--</div>-->
    <!--</div>-->

    <sec-left :info="secinfo"></sec-left>
    <sec-right :info="secinfo"></sec-right>
  </div>
</template>

<script>
  import SecLeft from '../../components/SecLeft.vue'
  import SecRight from '../../components/SecRight.vue'
  export default {
    name: 'smtm',
    data () {
      return {
        secinfo: {
          title: '解决传统加工企业8大难题',
          subtitle: '',
          captitle: '拥抱变革',
          caption: '在互联网和云计算的浪潮下，传统企业要想突围，必须主动迎接变化，进行自我革新',
          btn: '',
          imgurl: './static/img/mac.png',
          push: 0
        }
      }
    },
    components: {SecLeft, SecRight}
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/common';
</style>

<template>
  <div>
    <img :src="info.imgurl" alt="" style="width:100%;">
  </div>
</template>

<script>
  export default {
    name: 'banner',
    props: ['info'],
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../static/normal';
</style>

<template>
  <div>
    <h1>this a vue component xxx</h1>
    <i-button type="primary">iView Btn</i-button>
    <img :src="url" alt=""/>
<i class="iconfont" style="font-size:64px;">&#xe66b;</i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'testitem',
    data () {
      return {
        url: './static/img/switzerland.jpg'
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $red: red;

  h1 {
    color: $red;
  }

</style>

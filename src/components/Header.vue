<template>
  <div>
    <div class="eyebrow">
      <div class="con">
        <a href="http://www.moyasz.com" target="_blank">莫亚科技旗下产品</a>
        <span class="phone">咨询电话: 0731-8556 3963</span>
      </div>
    </div>
    <div class="menu">
      <div class="con">
        <div class="menu-items">
          <a href="index.html">首页</a>
          <a href="products.html">产品</a>
          <a href="buy.html">购买</a>
          <a href="help.html">帮助</a>
          <a href="about.html">关于我们</a>
          <a href="test.html">测试</a>
        </div>
        <a href="index.html" target="_self" id="a-logo">
          <img :src="logoUrl">
        </a>
        <div class="log-items">
          <a href="" class="a-btn">立即体验</a>
          <a href="">登录</a>
          <a href="">注册</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        logoUrl: './static/img/smtlogo.jpg'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/common";

  .eyebrow {
    text-align: right;
    border-bottom: 1px solid #eeeeee;
    height: 30px;
    font-size: 12px;
    .con {
      height: 30px;
    }
    a {
      font-size: inherit;
      line-height: 30px;
    }

  }

  .phone {
    color: $smtred;
    font-size: inherit;
    line-height: 30px;
  }

  .menu {
    height: 90px;
    .con {
      position: relative;
    }
    i-button {
      display: inline-block;
      vertical-align: baseline;
    }
  }

  .menu-items {
    text-align: center;
    height: 90px;
    line-height: 90px;
    font-size: 18px;
    a {
      display: inline-block;
      margin: 0 15px;
    }
  }

  #a-logo {
    position: absolute;
    left: 0;
    top: 15px;
  }

  .log-items {
    position: absolute;
    right: 0;
    top: 0;
    height: 90px;
    a {
      font-size: 16px;
      margin: 0 5px;
      height: 30px;
      line-height: 30px;
      margin-top: 30px;
    }

    .a-btn {
      display: inline-block;
      background: $blue;
      padding: 0 15px;
      font-size: 12px;
      border-radius: 15px;
      color: #ffffff;
    }
    .a-btn:hover {
      background: $lightblue;
    }
  }

</style>

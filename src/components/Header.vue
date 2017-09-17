<template>
  <div style="background:#ffffff;">
    <div class="con">
      <div class="nav">
        <div class="logo">
          <img src="../../static/img/logo.jpg" alt=""/>
        </div>
        <div class="divsearch"><input type="text"> <i class="iconfont">&#xe600;</i></div>
        <div class="divnav">
          <a v-for="(item, index) in items" :key="index" class="navitem" :class="{activeitem:hotitem==item.title}"
             :href="item.link">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  import Vue from 'vue'

  Vue.use(Router)

  export default {
    name: 'header',
    props: ['hotitem'],
    data () {
      return {
        items: [
          {title: 'HOME', link: 'index.html'},
          {title: 'ABOUT US', link: 'about.html'},
          {title: 'PRODUCTS', link: 'products.html'},
          {title: 'NEWS', link: 'news.html'},
          {title: 'CONTACT US', link: 'contact.html'}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/normal";

  .con {
    height: 200px;
    font-size: 0;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
  }

  .nav {
    position: relative;
    padding-left: 200px;
    height: 100%;
    text-align: right;
  }

  .navitem {
    display: inline-block;
    padding: 0 0 0 80px;
    font-size: 18px;
    height: 100%;
    line-height: 70px;
    color: #333333;
  }

  .activeitem {
    color: $blue;
  }

  .navitem:hover {
    color: $blue;
  }

  .divsearch {
    position: relative;
    height: 40px;
    input[type="text"] {
      height: 45px;
      font-size: 16px;
      width: 250px;
      line-height: 38px;
      outline: none;
      padding: 0 30px 0 10px;
      margin-top: 40px;
      border: 2px solid #dddddd;
      border-radius: 3px;
    }
    .iconfont {
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 40px;
      line-height: 45px;
      font-weight: bold;
      font-size: 24px;
      color: #aaaaaa;
    }
  }

  .divnav {
    position: absolute;
    right: 0;
    bottom: 21px;
  }
</style>

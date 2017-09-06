<template>
  <div style="border-bottom:1px solid #eee;background:#fff;">
    <div class="eyebrow">
      <div class="con">
        <a href="http://www.moyasz.com" target="_blank">莫亚科技旗下产品</a>
        <span class="phone"><i class="iconfont">&#xe682;</i>咨询电话: 0731-8556 3963</span>
      </div>
    </div>
    <div class="menu">
      <div class="con">
        <div class="menu-items">

          <div v-for="(item,index) in items" :key="index" class="item-wrap" :id="item.name"
               @mouseenter="showSub($event)" @mouseleave="moveout">
            <a :href="item.link" :class="{active:activemenu==item.name}"
            >{{item.title}}</a>
            <div class="sub-menu" v-show="currentItem=='products'">
              <a v-for="(sub,index) in item.sub" :key="index" href="">{{sub.title}}</a>
            </div>
          </div>

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
    props: ['activemenu'],
    data () {
      return {
        currentItem: '',
        logoUrl: './static/img/smtlogo.jpg',
        items: [
          {name: 'index', title: '首页', link: 'index.html', sub: []},
          {
            name: 'products',
            title: '产品',
            link: 'products.html',
            sub: [
              {title: '云订货平台', link: ''},
              {title: '云进销存', link: ''},
              {title: '建材家具厂家版', link: ''},
              {title: '建材家具门店版', link: ''}
            ]
          },
          {name: 'buy', title: '购买', link: 'buy.html', sub: []},
          {name: 'help', title: '帮助', link: 'help.html', sub: []},
          {name: 'about', title: '关于我们', link: 'about.html', sub: []}
        ]
      }
    },
    methods: {
      showSub: function (e) {
        this.currentItem = e.target.id
        console.log(this.currentItem)
      },
      moveout: function () {
        this.currentItem = ''
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
    min-width:1180px;
    .con {
      height: 30px;
    }

  }



  .active {
    color: $smtred;
  }

  .phone {
    color: $smtred;
    font-size: inherit;
    line-height: 30px;
  }

  .menu {
    height: 60px;
    width: 100%;
    min-width:1180px;
    display: block;
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
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    a {
      display: inline-block;
      margin: 0 15px;
      font-size: inherit;
      line-height: 30px;
    }
  }

  .item-wrap {
    display: inline-block;
    position: relative;
  }

  @media screen and(min-width: 1650px) {
    .menu-items{
      a
      {
        font-size: 18px;
      }
    }

  }

  .sub-menu {
    width: 150px;
    background: #ffffff;
    position: absolute;
    z-index: 10;
    top: 60px;
    left: -5px;
    font-size: 0;
    line-height: 0;
    a {
      display: block;
      color: #666;
      font-size: 12px;
      margin: 0;
      padding: 0;
      line-height: 40px;
      text-align: left;
      padding-left: 15px;
      border-bottom: 1px solid #eee;
    }
    a:hover
    {
      color: $smtred;
    }
  }

  #a-logo {
    position: absolute;
    left: 0;
    top: 10px;
  }

  .log-items {
    position: absolute;
    right: 0;
    top: 0;
    height: 90px;
    a {
      font-size: 14px;
      margin: 0 5px;
      height: 30px;
      line-height: 30px;
      margin-top: 15px;
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

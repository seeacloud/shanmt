<template>
  <div v-on:mouseenter="stopAutoPlay()" @mouseleave="startAutoPlay()">
    <Carousel :autoplay-speed="5000" :autoplay="setting.autoplay" v-model="value3">
      <CarouselItem>
        <div  class="c-item" id="c-1">
          <div class="con">
            <div class="caption">
              <h1 class="title">
                山木通·建材家具厂家版
              </h1>
              <h5 class="des">
                基于移动互联网时代的在线订单跟踪处理及企业内部流程管理于一体的企业SaaS服务平台，致力于帮助企业快速构建自己专属的在线销售、库存、订货、生产、物流、资金监控平台
              </h5>
              <a href="" class="smt-btn-white">了解详情</a>
            </div>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="c-item" id="c-2">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="c-item" id="c-3">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="c-item" id="c-4">4</div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        value3: 0,
        setting: {
          autoplay: false
        }
      }
    },
    methods: {
      stopAutoPlay: function () {
//        console.log('mouse enter')
        this.setting.autoplay = false
      },
      startAutoPlay: function () {
//        console.log('mouseleave')
        this.setting.autoplay = false
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../../static/common";

  .con
  {
    height: 100%;
    position: relative;
  }
  .caption
  {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
    width: 50%;

    h1,h2,h3,h4,h5,h6
    {
      color: inherit;
    }
    h5
    {
      font-size: 16px;
    }
  }
  .c-item {
    height: 420px;
    background: skyblue;
  }

  #c-1 {
    background: url(../../../static/img/c-1.jpg) no-repeat center;
  }
</style>

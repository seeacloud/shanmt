<template>
  <div style="padding:80px 0;background:#dee6f9;">
    <div class="con">

      <Row>
        <Col span="18" offset="3">
        <h3 class="pagetitle">CONTACT US</h3>

        <div class="item" v-for="(item, index) in items" :key="index">
          <span class="title">{{item.title}}</span> {{item.des}}
        </div>

        <img src="../../../static/img/addr.jpg" alt="" class="mapimg">
        </Col>
      </Row>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'maincontent',
    data () {
      return {
        items: [
          {title: 'Company', des: 'Shenzhen GEO Serveying technology Co.,LTD'},
          {title: 'Address', des: '1402 Building B, Baotianyayuan, Xixiang street, Baoan District'},
          {title: 'Contact', des: '+86 159 2002 0677'},
          {title: 'Email', des: 'steven@szgeosurveying.com'},
          {title: 'Skype', des: 'li.steven24'},
          {title: 'Website', des: 'www.geosuv.com'}
        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/normal';

  .con {
  }

  .item {
    margin: 20px 0;
    font-size: 16px;
  }

  .title {
    display: inline-block;
    width: 100px;
    padding-left: 15px;
    border: 1px solid #cccccc;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    background: #ffffff;
  }

  .pagetitle {
    position: relative;
    line-height: 80px;
    margin-bottom: 30px;
  }

  .pagetitle:after {
    content: '';
    height: 1px;
    background: #666666;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .mapimg {
    border: 10px solid #9bc0ed;
    margin: 40px 0;
    width: 100%;
    height: auto;
  }
</style>

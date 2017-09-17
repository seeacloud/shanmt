<template>
  <div>
    <div class="con" style="padding:40px 0;">
      <Row :gutter="20">

        <Col span="8">
        <img src="../../../static/img/ctj.jpg" alt=""/>
        </Col>
        <Col span="8">
        <img src="../../../static/img/shudt.jpg" alt=""/>
        </Col>
        <Col span="8">
        <img src="../../../static/img/cehui.jpg" alt=""/>
        </Col>
      </Row>
    </div>

    <div class="con-2">
      <div class="con">
        <h4>Shenzhen GEO Surveying technology Co.,LTD</h4>
        <p><span class="foottitle">Address:</span> 1402 Building B, Baotianyayuan, Xixiang street, Baoan District</p>
        <p><span class="foottitle">Contact:</span> 86 159 2002 0677</p>
        <p><span class="foottitle">Email:</span>steven@szgeosurveying.com</p>
        <p><span class="foottitle">Skype:</span>li.steven24</p>


        <Row :gutter="20" style="margin-top:40px;">
          <Col span="8">
          <div class="card-2">
            <img src="../../../static/img/p-1.jpg" alt=""/>
          </div>
          </Col>
          <Col span="8">
          <div class="card-2">
            <img src="../../../static/img/p-2.jpg" alt=""/>
          </div>
          </Col>
          <Col span="8">
          <div class="card-2">
            <img src="../../../static/img/p-3.jpg" alt=""/>
          </div>
          </Col>
        </Row>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'maincontent',
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/normal';

  img {
    width: 100%;
  }

  h3, h4 {
    color: #ffffff;
  }

  .con-2 {
    display: block;
    background: #96c4dc;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  p {
    text-indent: 0;
    font-size: 16px;
    color: #ffffff;
    line-height: 1.2em;
    .foottitle {
      display: inline-block;
      width: 100px;
      font-size: inherit;
    }
  }

  .card-2 {
    height: 200px;
    background: #ffffff;
  }
</style>

<template>
  <div style="margin-top:60px;margin-bottom:60px;">
    <div class="con">
      <Row>
        <Col span="6" style="text-align: center;">
        <img src="../../static/img/logo.jpg" alt=""/>
        </Col>
        <Col span="15">
        <h3>Shenzhen GEO Surveying technology Co.,LTD</h3>
        <p><span class="foottitle">Address:</span> 1402 Building B, Baotianyayuan, Xixiang street, Baoan District</p>
        <p><span class="foottitle">Contact:</span> 86 159 2002 0677</p>
        <p><span class="foottitle">Email:</span>steven@szgeosurveying.com</p>
        <p><span class="foottitle">Skype:</span>li.steven24</p>
        <p>Copyright Shenzhen GEO Surveying technology Co.,LTD. All Rights Reserved</p>
        </Col>
        <Col span="3" class="sns">
        <a><i class="iconfont" style="color:#438fa9;">&#xe63d;</i></a>
        <a><i class="iconfont" style="color:#3c8a9e;">&#xe612;</i></a>
        <a><i class="iconfont" style="color:#3d5998;">&#xe620;</i></a>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import "../../static/normal";

  .con {
    border: 1px solid #dddddd;
    padding: 30px 0;
  }
  img
  {
    display: inline-block;
  }
  h1,h2,h3
  {
    color: #333;
  }

  p {
    text-indent: 0;
    font-size: 16px;
    color: #666;
    line-height: 1.5em;
    .foottitle {
      display: inline-block;
      width: 100px;
      font-size: inherit;
    }
  }
  .sns
  {
    a
    {
      display: block;
      text-align: center;
    }
    .iconfont
    {
      display: inline-block;
      font-size: 55px;
    }
  }
</style>

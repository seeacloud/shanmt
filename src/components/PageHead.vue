<template>
  <div class="container">
    <div class="con">
      <table>
        <tr>
          <td>
            <h2 class="title">{{info.title}}</h2>
            <h5>
              {{info.subtitle}}
            </h5>
            <div class="code-img">
              <img :src="info.codeurl" alt=""/>
            </div>
            <div>扫码下载山木通APP</div>
            <a href="buy.html" class="smt-btn-fill">立即购买</a>
          </td>
          <td>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'pagehead',
    props: ['info'],
    data () {
      return {}
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../static/common';
  .container
  {
    background: url(../../static/img/smt-m-banner.jpg) no-repeat center;
    height: 400px;
    color: #333;
  }

  .title
  {
    color: $blue;
  }
  .con
  {
    height: 100%;
  }
  table
  {
    height: 100%;
    width: 100%;
  }
  tr
  {
    height: 100%;
  }
  td
  {
    width: 50%;
    vertical-align: middle;
  }

  .code-img
  {
    padding: 15px 0 0 0;
    img
    {
      width: 100px;
      height: auto;
    }
  }
</style>

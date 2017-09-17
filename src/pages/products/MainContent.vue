<template>
  <div style="padding:40px 0;background:#dee6f9;">
    <div class="con">
      <Row :gutter="20">
        <Col v-for="(item,index) in items" :key="index" span="8">
        <a href="" class="card">
          <img :src="item.img" alt=""/>
          <div class="content">
            <h4 class="title">{{item.title}}</h4>
            <p>{{item.des}}</p>
          </div>

        </a>
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
          {title: 'GEO-X10 High Definition Device', img: './static/img/p-1.jpg', des: 'ip between us. Low cost is so important for the customers, but we believe our cautious and conscientious service attitude will win your trust and loyalty in the fierce compet'},
          {title: 'New! GEO-TT983 All Functional Chips', img: './static/img/p-2.jpg', des: 'ip between us. Low cost is so important for the customers, but we believe our cautious and conscientious service attitude will win your trust and loyalty in the fierce compet'},
          {title: 'GEO-TX99823 Car Auto Detect', img: './static/img/p-3.jpg', des: 'ip between us. Low cost is so important for the customers, but we believe our cautious and conscientious service attitude will win your trust and loyalty in the fierce compet'}

        ]
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../static/normal';
.card
{
  overflow: hidden;
  color: #666;
  img
  {
    width: 100%;
  }
  .title
  {
    color: #333;
  }
}
  .card:hover
  {
    color: $blue;
    .title
    {
      color: $blue;
    }
  }
  .content
  {
    padding: 20px 0;
  }
  p
  {
    text-indent: 0;
  }
</style>

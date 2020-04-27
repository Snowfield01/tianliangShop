<template>
  <div>
    <!-- <h1>我是homeContainer</h1> -->
    <!-- loop -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key='item.id'>
          <img :src='item.img_url' alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <!-- <img src="../../src/" alt=""> -->
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <!-- <span class="mui-badge">5</span> -->
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLoop();
  },
  methods: {
    getLoop() {
      this.$http
        .get("http://yapi.shangyuninfo.com/mock/121/api/getLoop")
        .then(result => {
          console.log(result);
          this.lunbotuList = result.body.message
          console.log(this.lunbotuList)
        })
        .catch();
    }
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item:nth-of-type(1) {
  background-color: red;
}
.mint-swipe-item:nth-of-type(2) {
  background-color: green;
}
.mint-swipe-item:nth-of-type(3) {
  background-color: blue;
}

 .mint-swipe-item img {
    width: 100%;
    height: 100%;
}
</style>
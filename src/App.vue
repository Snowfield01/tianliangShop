<template>
  <div class="tit">
    <!-- header -->
    <mt-header fixed title="天亮教育" ></mt-header>
    <!-- container -->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe> -->
    <router-view></router-view>
    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="homeContainer">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="memberContainer">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcarContainer">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="searchContainer">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .tit {
        padding-top: 40px;
    }
</style>
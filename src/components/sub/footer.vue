<template>
<div>
     <footer class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/index">
        <span class="mui-icon iconfont icon-shouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/lesson">
        <span class="mui-icon iconfont icon-kecheng"></span>
        <span class="mui-tab-label">课程</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mine">
        <span class="mui-icon iconfont icon-wodedangxuan"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </footer>
</div>
</template>
<script>
export default {
    props:['footers']
}
</script>
<style lang='less'>
.mui-bar.mui-bar-tab .router-link-active{
  color:#0076a4;
}
.mui-bar.mui-bar-tab{
    color:#999;
}
</style>

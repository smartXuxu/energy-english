<template>
<div class='layer'>
    <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>设置</h3>
       </header>
<main>
     <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/account_save'> 
						账号安全
					</router-link>
				</li>
                <li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/about_us'>
						关于我们
					</router-link>
				</li>
                <li class="mui-table-view-cell clearfix">
					<router-link class="mui-navigate-right " to=''>
                        版本检测
                        <i class='f_right'>当前版本v5.03</i>
					</router-link>
				</li>
     </ul>
     <button class='quit' @click='login_out()'>退出登录</button>
</main>
</div>
</template>
<script>
export default {
  name: "setting",
  data() {
    return {};
  },
  methods: {
    login_out(){
       this.$router.push("/login") 
    }
  }
};
</script>
<style scoped lang='less'>
@import url("../../assets/css/common");
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto;
}
header {
  height: 1.6rem;
  width: 100%;
  background-color: #fff;
  position: relative;
  > i {
    font-size: 0.4rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 35%;
    left: 3%;
    color: #666;
  }
  > h3 {
    color: #666;
    text-align: center;
    font-size: 0.34rem;
    line-height: 1.8rem;
  }
}
main {
    margin-top: .2rem;
    a{
        font-size:.3rem;
    }
  .f_right {
       font-size:.28rem;
    padding-right: 5%;
  }
  .quit{
      height: 0.8rem;
      line-height: .8rem;
      text-align: center;
      display: block;
      width: 90%;
      background-color: @baseColor;
      color:#fff;
      font-size:.32rem;
      border-radius: 20px;
      margin:.5rem auto 0 auto;
  }
}
</style>

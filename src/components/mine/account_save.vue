<template>
<div>
 <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>账号与安全</h3>
       </header>
<main>
     <ul class="mui-table-view">
				<li class="mui-table-view-cell ">
					<router-link class="clearfix" to='/mine/account_save'> 
						手机号
                        <i class='f_right'>152****5202</i>
					</router-link>
				</li>
                <li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/changepwd'>
						修改密码
					</router-link>
				</li>
                
     </ul>
</main>
</div>
</template>
<script>
export default {
    name:"account_save",
  data() {
    return {};
  },created(){

  }
};
</script>
<style lang='less' scoped>
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
</style>
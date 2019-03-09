<template>
<div class='layer'>
 <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>我的钱包</h3>
           <em @click='router_to()'>明细</em>
       </header>
       <main>
           <div class="content">
               <p>账户余额（元）</p>
               <h1>73.07</h1>
           </div>
           <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/withdow'>
                        <em class='iconfont icon-qianbao1'></em>
						提现
					</router-link>
				</li>
           </ul>
       </main>
</div>
</template>
<script>
export default {
  name: "my_paurse",
  data() {
    return {};
  },
  methods: {
    router_to() {
      this.$router.push("/mine/purse_detail");
    }
  }
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
.layer{
    position:fixed;
    width:100%;
    height:100%;
    background-color: #eee;
}
header {
  height: 1.6rem;
  width: 100%;
  background-color: @baseColor;
  position: relative;
  > i {
    font-size: 0.4rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 35%;
    left: 3%;
    color: #fff;
  }
  > h3 {
    color: #fff;
    text-align: center;
    font-size: 0.34rem;
    line-height: 1.8rem;
  }
  > em {
    position: absolute;
    width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    top: 30%;
    right: 3%;
    color: #fff;
  }
}
main{
    >.content{
        background-color: @baseColor;
        color:#fff;
        text-align: center;
        height: 2.6rem;

        >p{
          font-size:.26rem;  
            color:#fff; 
             padding-top: .4rem;   
        }
        >h1{
            margin-top:.2rem;
            font-size:.6rem;
            
        }
    }
    >ul{
        a{
            font-size:.3rem;
        }
        .iconfont{
             font-size:.4rem;
            color:#11aa62;
        }
    }
}
</style>

<template>
<div class='layer'>
    <header>
        <img src='../../assets/img/focus.jpg' />
        <div class="mine-h-center" @click='router_go()'>
            <em>陌上浅笑</em>
            <span>希望在这里能提高我的英语！</span>
        </div>
        <div class="mine-h-right mui-icon mui-icon-arrowright"></div>
    </header>
    <main>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/course_log'>
                        <em class='iconfont icon-kechengjilu_nor'></em>
						课程记录
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/message'>
                        <em class='iconfont icon-xiaoxi'></em>
						消息中心
					</router-link>
				</li>
                <li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/my_paurse'>
                        <em class='iconfont icon-qianbao'></em>
						我的钱包
					</router-link>
                    
				</li>
                <li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/feedback'>
                        <em class='iconfont icon-yijianfankui'></em>
						意见反馈
					</router-link>
				</li>
                <li class="mui-table-view-cell">
					<router-link class="mui-navigate-right" to='/mine/setting'>
                        <em class='iconfont icon-gear'></em>
						设置
					</router-link>
				</li>
			</ul>
    </main>
    <footers></footers>
</div>
</template>
<script>
import footers from "../sub/footer.vue";
export default {
  name: "mine",
  components: {
    footers
  },
  data() {
    return {};
  },
  methods:{
    router_go(){
      this.$router.push("/mine/mine-data")
    }
  }
};
</script>
<style lang='less'>
@import url("../../assets/css/common");
html,
body {
  background-color: #eee;
}
.layer {
  background-color: #eee;
  > header {
    background: url("../../assets/img/mine-bg.jpg") no-repeat right bottom;
    background-size: 100%;
    padding: 1rem 0.3rem;
    position: relative;
    background-color: #fff;
    > img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      vertical-align: middle;
    }
    > .mine-h-center {
      position: absolute;
      left: 2rem;
      top: 40%;
      width: 60%;
      > em {
        font-size: 0.34rem;
        display: block;
      }
      > span {
        font-size: 0.26rem;
        color: #666;
        display: block;
        .line(1);
      }
    }
    > .mine-h-right {
      position: absolute;
      right: 5%;
      top: 45%;
      font-size: 0.4rem;
      color: #666;
    }
  }
  > main {
      .mui-table-view-cell>a:not(.mui-btn){
          color:#333;
          em{
              margin-right: .2rem;
            
          }
      }
    margin-top: 0.3rem;
    .mui-table-view-cell:after {
      width: 90%;
    
    }
    .mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after{
         color:#333;
         font-size:.4rem;
    }
    .mui-table-view-cell {
      &:nth-of-type(2) {
        border-bottom: 0.3rem solid #eee;
        &:after {
          height: 0;
        }
      }
      &:before{
          height: 0;
      }
    
    }
  }
}
</style>

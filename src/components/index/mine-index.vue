<template>
<div>
<header>
  <div class="header_top iconfont icon-fanhui" @click='back_go()'>
  </div>
  <div class="header-content">
    <img src="../../assets/img/focus.jpg" alt="">
    <div class="center">
      <em>Miss Li</em>
      <span>坚持以教育为本，做良心教师</span>
    </div>
  </div>
</header>
<main>
  <h3> <em>课程</em></h3>
 <ul>
			<!-- 路由传参 -->
			<li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
            <li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
            <li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
            <li>
				<router-link  v-bind="{to:'/index/video_detail/'+1}" class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
 </ul>
</main>
</div>
</template>
<script>
//涉及路由传承
export default {
  name: "mine_index",
  data() {
    return {
      id: 0,
    };
  },
  cretated() {
    //获取url传入的值
    this.id = this.$route.params.id;
  },
  methods: {
    back_go() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>
<style lang='less' scoped>
@import url('../../assets/css/common');
header{
  height: 3.8rem;
  width:100%;
  background:url("../../assets/img/teacher_index.jpg") no-repeat center;
  background-size: cover;
  >.header_top{
    position:absolute;
    left:3%;
    top:7%;
    width: 0.8rem;
    height: 0.8rem;
    line-height: .8rem;
    padding-left: 2%;
    background-color: rgba(0,0,0,.2);
    color:#fff;
    border-radius: 50%;
    font-size:.4rem;
  }
  >.header-content{
    position:absolute;
    left:5%;
   top:14%;
   width:100%;
    >img{
      border:3px solid #fff;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      vertical-align: middle;
    }
    >.center{
   position:absolute;
    left:1.4rem;
    width:60%;
    top:10%;
    >em{
      display: block;
      font-size:.36rem;
      color:#fff;
    }
    >span{
      display:block;
      width:100%;
      .line(1);
      font-size:.24rem;
      color:#fff;
    }
    }
  }
}
main{
position:absolute;
top:3.5rem;
left: 0;
width: 100%;
background-color: #fff;
z-index:3;
border-radius: 20px 20px 0 0;
  >h3{
    height: 1rem;
    line-height: 1rem;
    font-size:.3rem;
    color:#333;
    padding-left: .4rem;
    >em{
      padding-bottom: .1rem;
      border-bottom: 3px solid @baseColor;
    }
  }
   > ul {
      width: 100%;
       padding:0 .3rem;
      > li {
        width: 46%;
        margin-left: 3%;
        display: inline-block;
        margin-bottom: .3rem;
        > a {
          display: block;
          > div {
            position: relative;
            > img {
              width: 100%;
              height: 2.3rem;
            }
            > em {
              height: 0.4rem;
              line-height: 0.4rem;
              padding: 0.01rem 0.2rem;
              background-color: rgba(0, 0, 0, 0.2);
              position: absolute;
              left: 0%;
              top: 1%;
              color: #fff;
            }
            > i {
              position: absolute;
              bottom: 3%;
              left: 3%;
              color: #fff;
              font-size: 0.24rem;
            }
          }
          > p {
            .line(1);
            font-size: 0.26rem;
          }
        }
      }
    }
}
</style>
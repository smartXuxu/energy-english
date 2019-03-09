<template>
 <div>
	<header class="row">
		<img src='../../assets/img/logo.png'/>
		<input type="search" @click='go()' placeholder="搜索课程或教师">
	</header>
	<div class='swiper'>
		<div class="link-to row">
			<router-link v-bind="{to:'/index/detail/'+1}" class="img-box">
			<img src='../../assets/img/index_s1.jpg'/>
		</router-link>
		<router-link v-bind="{to:'/index/detail/'+1}" class="img-box">
			<img src='../../assets/img/index_s2.jpg'/>
		</router-link>
		<router-link v-bind="{to:'/index/detail/'+1}" class="img-box">
			<img src='../../assets/img/index_s3.jpg'/>
		</router-link>
		</div>
		<div class="speack row">
			<em class='iconfont icon-laba001hover'></em>
			<span>2018年英语能力考人气爆款课TOP8 十月预售：</span>
		</div>
	</div>
	<!-- 新概念英语 -->
	<div class="new-concept eng">
		<p class='clearfix'>新概念英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
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
		</ul>
	</div>
	<!-- 源动力少儿英语 -->
	<div class="children-eng eng">
		<p class='clearfix'>源动力少儿英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
		</ul>
	</div>
	<!-- 源动力青少年英语 -->
	<div class="teenagers-eng eng">
		<p class='clearfix'>源动力青少年英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
		</ul>
	</div>
	<!-- 徐国章英语 -->
	<div class="xu-eng eng">
		<p class='clearfix'>徐国章英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
		</ul>
	</div>
	<!-- 源动力商务英语 -->
	<div class="business-eng eng">
		<p class='clearfix'>源动力商务英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
		</ul>
	</div> 
	<!-- 疯狂英语 -->
	<div class="crazy-eng eng">
		<p class='clearfix'>疯狂英语<router-link to='/lesson'  class="f_right">更多>></router-link></p>
		<ul class='row'>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
			<li>
				<router-link to='' class="img-box">
					<div class="eng-img">
						<img src='../../assets/img/teach.jpg'/>
						<em>miss li</em>
						<i class='iconfont icon-wodedangxuan'> 2112</i>
					</div>
					<p>Unit.2:Good Morning</p>
				</router-link>
			</li>
		</ul>
	</div> 
	<footers></footers>       
</div>
</template>

<script>
	import footers from '../sub/footer.vue';
export default {
	 name: "index",
	components:{
			footers
		},
 
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/search");
    }
    // 使用组件写底部 mui
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url("../../assets/css/common");
header {
  height: 1.6rem;
  background-color: #fff;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 0.3rem;
  padding-top: 0.3rem;
  &:before {
    content: "";
    position: absolute;
    width: 0.8rem;
    left: 43%;
    bottom: 7%;
    height: 0.8rem;
    background: url("../../assets/img/search.png") no-repeat center;
    background-size: 100%;
  }
  > img {
    margin-right: 0.2rem;
    width: 40%;
    height: 100%;
    vertical-align: middle;
  }
  > input {
    height: 0.8rem;
    margin-top: 0.4rem;
    /*改变placeholder的字体颜色*/
    &:-ms-input-placeholder {
      color: #999;
      opacity: 1;
    }
    &::-webkit-input-placeholder {
      color: #999;
      opacity: 1;
    }
  }
}
.swiper {
	background-color: #fff;
  margin-top: 0.3rem;
  padding: 0 0.3rem;
  padding-top: 1.6rem;
  > .link-to {
    > a {
      width: 32%;
      margin-right: 2%;
      > img {
        height: 1.7rem;
        width: 100%;
      }
    }
  }
  > .speack {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    position: relative;
    > em {
      margin-right: 3%;
      color: #0076a4;
      font-size: 0.4rem;
      vertical-align: middle;
    }
    > span {
      width: 80%;
      .line(1);
    }
  }
}
.eng {
	background-color: #fff;
	padding:.3rem;
	padding-top: 0;
	border-bottom: 1px solid #eee;
	>p{
	height: 1rem;
	line-height: 1rem;
	font-size:.32rem;
	color:#666;
	>a{
	font-size:.28rem;	
	}
	}
	>ul{
		width: 100%;
		>li{
			width: 33%;
			margin-right: 2%;
			>a{
				display: block;
				>div{
					position:relative;
					>img{
					width: 100%;
					height: 2rem;
					}
					>em{
						height: 0.4rem;
						line-height: 0.4rem;	
						padding:.01rem .2rem;		
						background-color: rgba(0,0,0,.2);
						position:absolute;
						left: 0%;
						top: 1%;
						color:#fff;
					}
					>i{
					position:absolute;
					bottom: 3%;
					left: 3%;
					color:#fff;
					font-size:.24rem;
					}
				}
				>p{
					.line(1);
					font-size:.26rem;
				}
			}
		}
	}
  &.new-concept {
    border-top: 0.2rem solid #eee;
  }
  &.crazy-eng{
	  padding-bottom: 1.2rem;
  }
}
</style>

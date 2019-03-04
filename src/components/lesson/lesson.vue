<template>
<div class="layer">
  <nav class='nav'>
      <ul>
          <li data-num="0" :class="show===0?'active':''"  ref="dataNum"  @click="changeEng($event,0)">
              新概念英语
          </li>
          <li data-num="1" ref="dataNum" :class="show===1?'active':''"   @click="changeEng($event,1)">
              源动力少儿英语
          </li>
          <li data-num="2" ref="dataNum"  :class="show===2?'active':''" @click="changeEng($event,2)">
              源动力青少年英语
          </li>
          <li data-num="3" ref="dataNum" :class="show===3?'active':''"   @click="changeEng($event,3)">
              徐国章英语
          </li>
           <li data-num="4" ref="dataNum" :class="show===4?'active':''"   @click="changeEng($event,4)">
              源动力商务英语
          </li>
          <li data-num="5" ref="dataNum" :class="show===5?'active':''"   @click="changeEng($event,5)">
             疯狂英语
          </li>
      </ul>
  </nav>
    <main>
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
    <footers></footers>
</div>
</template>
<script>
import footers from "../sub/footer.vue";
export default {
  name: "lesson",
  components: {
    footers
  },
  data() {
    return {
      num: 0,
      show: 0
    };
  },
  methods: {
    changeEng: function(e, num) {
      //   console.log(this.$refs.dataNum.dataset.num);
      this.show = num;
      console.log(num);
    }
  }
};
</script>
<style lang='less'>
@import url("../../assets/css/common");
.layer {
  background-color: #fff;
  > .nav {
    width: 100%;
    height: 1.6rem;

    border-top: 0.4rem solid #333;
    overflow-x: auto;
    > ul {
      width: 240%;
      height: 100%;
      line-height: 1.3rem;
      > li {
        width: 16%;
        height: 100%;
        display: inline-block;
        text-align: center;
        color: #666;
        font-size: 0.26rem;
        &.active {
          font-size: 0.34rem;
          color: #0076a4;
        }
      }
    }
  }
  > main {
    padding-bottom: 1rem;
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
}
</style>

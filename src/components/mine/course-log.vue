<template>
<div class='log'>
     <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>课程记录</h3>
       </header>
       <main>
           <nav class='nav'>
      <ul>
          <li data-index="0" :class="isshow===0?'active':''"  ref="dataNum"  @click="changeLog($event,0)">
              已学的课程
          </li>
          <li data-index="1" ref="dataNum" :class="isshow===1?'active':''"   @click="changeLog($event,1)">
              预约的课程
          </li>
          <li data-index="2" ref="dataNum"  :class="isshow===2?'active':''" @click="changeLog($event,2)">
            收藏的课程
          </li>
      </ul>
  </nav>
        <div class="content">
            <ul>
                <li>
                    <router-link v-bind="{to:'/index/video_detail/'+1}" class='flex'>
                    <div class="li-left">
                        <div class="content-header row">
                        <em>幼儿</em>
                        <span>
                            幼儿学英语之英文字母 幼儿学英语之英文字母
                        </span>
                    </div>
                    <p>讲师：金牌讲师明哲</p>
                    <h4>有效期截止：2018-09-30 12:00
                    </h4>
                    </div>
                    <div class="li-right">
                        <img src='../../assets/img/focus.jpg' />
                        <button>
                        进入学习
                    </button>
                    </div>
                    
                    </router-link>
                </li>
                 <li>
                    <router-link v-bind="{to:'/index/video_detail/'+1}" class='flex'>
                    <div class="li-left">
                        <div class="content-header row">
                        <em>幼儿</em>
                        <span>
                            幼儿学英语之英文字母 幼儿学英语之英文字母
                        </span>
                    </div>
                    <p>讲师：金牌讲师明哲</p>
                    <h4>有效期截止：2018-09-30 12:00
                    </h4>
                    </div>
                    <div class="li-right">
                        <img src='../../assets/img/focus.jpg' />
                        <button>
                        进入学习
                    </button>
                    </div>
                    
                    </router-link>
                </li>
            </ul>
        </div>

       </main>
</div>
</template>
<script>
export default {
  name: "course_log",
  data() {
    return{
      index: 0,
      isshow: 0
    }
  },
  methods: {
       changeLog: function(e,index) {
      this.isshow = index;
      console.log(index);
    }
  },
  //监听index 的变化，重绘页面
  watch: {}
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
.log{
    width:100%;
    height: 100%;
    position:fixed;
    background-color:#eee!important;
}
header {
  height: 1.6rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: #fff;

  > i {
    font-size: 0.4rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 35%;
    left: 3%;
  }
  > h3 {
    text-align: center;
    font-size: 0.34rem;
    line-height: 1.8rem;
  }
}
main{
    padding-top:1.6rem;
     > .nav {
    width: 100%;
    height: 1rem;
    background: #fff;
    overflow-x: auto;
    > ul {
      width: 100%;
      height: 100%;
      line-height: 1rem;
      > li {
         
        width: 32%;
        height: 100%;
        display: inline-block;
        text-align: center;
        color: #666;
        font-size: 0.3rem;
        &.active {
         border-bottom:2px solid @baseColor;
        }
      }
    }
  }
  >.content{
      >ul{
          margin-top: .3rem;
          background-color: #fff;
          >li{
              padding:.3rem;
              border-bottom: .3rem solid #eee;
            >a{
                >.li-left{
                    width:70%;
                >.content-header{
                        >em{
                            background-color: rgb(185, 182, 182);
                            font-size:.24rem;
                            color:#fff;
                            padding:0 .1rem;
                            border-radius: 5px;
                        }
                        >span{
                            width:70%;
                            font-size:.3rem;
                            .line(1);
                        }
                }
                >p,>h4{
                  font-size:.24rem;
                  color:#666;
                  height: 0.6rem;
                   line-height: 0.6rem;
                  .line(1);  
                }
                }
                >.li-right{
                        >img{
                            display: block;
                            width: 0.8rem;
                            height: 0.8rem;
                            border-radius: 50%;
                        }
                        >button{
                            background-color: @baseColor;
                            height: 0.4rem;
                            line-height: 0.4rem;
                            color:#fff;
                            padding:0 .2rem;
                            margin-top: .2rem;
                            font-size:.26rem;

                        }
                }
            }
          }
      }
  }
}
</style>


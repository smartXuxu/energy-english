<template>
<div>
    <header>
        <div class="detail-header">
            <em class='iconfont icon-fanhui' @click="back_go()">
            </em>
            <router-link  v-bind="{to:'/index/video_detail/'+1}" >课程详情<i class='mui-icon mui-icon-arrowright' ></i></router-link>
        </div>
         <video  controls='controls' width='100%'   preload="auto" playsinline webkit-playsinline name='media' controlsList="nodownload"  src="../../assets/img/test.mp4">
         </video>
    </header>
    <main>
       <div class="chat">
           <ul>
               <li class=''>
                    <div class="header-chat">
                        <img src='../../assets/img/focus.jpg'/>
                        <em>【讲师】Miss li</em>
                    </div>
                    <p>大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦</p>
               </li>
               <li class=''>
                    <div class="header-chat">
                        <img src='../../assets/img/focus.jpg'/>
                        <em>【讲师】Miss li</em>
                    </div>
                    <p>大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦</p>
               </li>
                <li class=''>
                    <div class="header-chat">
                        <img src='../../assets/img/focus.jpg'/>
                        <em>【讲师】Miss li</em>
                    </div>
                    <p>大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦</p>
               </li>
                <li class=''>
                    <div class="header-chat">
                        <img src='../../assets/img/focus.jpg'/>
                        <em>【讲师】Miss li</em>
                    </div>
                    <p>大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦大家有什么疑问可以加我微信哦</p>
               </li>
           </ul>
           </div> 
           <div class="bottom">
               <input type="text" placeholder='留下您的评价吧' v-model='message'>
               <em class='send'>发送</em>
           </div>
    </main>
</div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      id: "",
      message:""
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    back_go() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>
<style lang='less' >
@import url("../../assets/css/common");
.header-style {
  position: absolute;
  height: 0.88rem;
  line-height: 0.88rem;
  width: 0.88rem;
  padding-left: 3%;
  font-size: 0.4rem;
  border-radius: 50%;
  color: #fff;
  top: 30%;
  background: rgba(0, 0, 0, 0.3);
}
header {
  position: relative;
  height: 4.2rem;
  width: 100%;
  > .detail-header {
    position: absolute;
    height: 1.6rem;
    z-index: 3;
    padding-top: 0.4rem;
    width: 100%;
    > em {
      left: 3%;
      .header-style;
    }
    > a {
      right: 3%;
      .header-style;
      width: 2.2rem;
      font-size: 0.3rem;
      border-radius: 10px;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  > video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:4.2rem;
    z-index: 2;
  }
}
main {
  > .bottom {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    > input {
      width: 78%;
      margin-left: 2%;
      height: 0.8rem;
      color: #666;
      font-size: 0.3rem;
      border: none;
      border-radius: 20px;
      background-color: #eee;
      text-indent: 2em;
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
    > em {
      width: 19%;
      text-align: center;
      display: inline-block;
      font-size: 0.36rem;
    }
  }
  > .chat {
    > ul {
        background-color: #f4f4f4;
        overflow-y: scroll;
        padding:0.4rem 0.3rem 1rem 0.3rem;
      > li {
          margin-bottom: .1rem;
          >.header-chat{
              >img{
                  width: 0.8rem;
                  height: 0.8rem;
                  border-radius: 50%;
                  margin-right: .2rem;
                  vertical-align: middle;
              }
              >em{
                  font-size:.26rem;
              }
          }
          >p{
              display:inline-block;
              margin-left: 1rem;
              border-radius: 5px;
              padding:.2rem;
              background-color: #fff;
          }
      }
    }
  }
}
</style>

<template>
<div>
    <header>
        <div class="detail-header">
            <em class='iconfont icon-fanhui' @click="back_go()">
            </em>
            <h3>课程详情</h3>
            <del class='iconfont icon-shoucang11'></del>
        </div>
        <video  controls='controls' width='100%'   preload="auto" playsinline webkit-playsinline name='media' controlsList="nodownload"  src="../../assets/img/test.mp4">
         </video>
    </header>
     <mt-navbar v-model="selected">
  <mt-tab-item id="1">介绍</mt-tab-item>
  <mt-tab-item id="2">课表</mt-tab-item>
</mt-navbar>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1" class='infomation'>
      <div class="detail-header">
        <h3>
         【词汇】导学课(学习规划） 
      </h3>  
      <!-- 跳转到个人详情页面-->      
      <router-link  v-bind="{to:'/index/mine_index/'+1}">
           <img src='../../assets/img/focus.jpg' />
        <div class="mine-h-center">
            <em>资深英语顾问</em>
            <span>杜浩雅</span>
        </div>
          </router-link> 
      </div>
     <div class="info">
         <p>课程简介</p>
         <h5>
             你还在死记硬背单词读音吗?你还偷偷的在单词下面标中文字吗?你还在烦恼音标的读法吗?时下最热的英语学习法一自然拼读了解一下,这也是目前外国小朋友学习英语读音和拼字的主流方式, 看到单词就会念,听到单词就能拼的日子就在眼前啊!赶快来报名今天的课程，一起get最火的自然拼读吧！
         </h5>
     </div>
     
    
  </mt-tab-container-item>
  <mt-tab-container-item id="2" class='study-class'>
  <ul>
      <li>
          <p>导学课(学习规划）</p>
          <h3>2018-09-29 18:00-19:00</h3>
      </li>
      <li>
          <p>听力</p>
          <h3>2018-09-29 18:00-19:00</h3>
      </li>
      <li>
          <p>主观题高分字体指导</p>
          <h3>2018-09-29 18:00-19:00</h3>
      </li>
      <li>
          <p>听力</p>
          <h3>2018-09-29 18:00-19:00</h3>
      </li>
      <li>
          <p>词汇</p>
          <h3>2018-09-29 18:00-19:00</h3>
      </li>
  </ul>
  </mt-tab-container-item>
  
</mt-tab-container>
<div class="join">
         <em>￥9.90</em>
         <button @click='join()'>立即报名</button>
     </div>
</div>
</template>
<script>
// 涉及路由传承
export default {
  name: "video_detail",
  data() {
    return {
      id: 0,
      selected: "1",
      orderId: 0
    };
  },
  cretated() {
    //			获取url传入的值
    this.id = this.$route.params.id;
  },
  methods: {
    back_go() {
      this.$router.go(-1); //返回上一层
    },
    join() {
      this.$router.push({
        path: "/index/sure_order",
        query: { orderId: this.orderId }
      });
    }
  }
};
</script>
<style lang='less' scoped >
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
    > del {
      right: 3%;
      .header-style;
      font-size: 0.6rem;
      padding-left: 2%;
    }
    > h3 {
      text-align: center;
      line-height: 1rem;
      font-size: 0.34rem;
    }
  }
  > video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
.mint-navbar {
  padding-bottom: 0.1rem;
  border-bottom: 0.2rem solid #eee;
}
.mint-tab-item-label {
  font-size: 0.32rem;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0;
  position: relative;
  color: @baseColor;
  &:after {
    content: "";
    height: 3px;
    bottom: 3%;
    width: 20%;
    background-color: @baseColor;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.infomation {
  padding: 0.2rem 0.3rem 1rem 0.3rem;
  > .detail-header {
    > h3 {
      .line(1);
      font-size: 0.3rem;
      padding: 0.3rem;
    }
    > a {
      display: block;
      width: 100%;
      position: relative;
      > img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
      > .mine-h-center {
        position: absolute;
        left: 1.3rem;
        top: 15%;
        > em {
          display: block;
          font-size: 0.28rem;
        }
      }
    }
  }
  > .info {
    padding-top: 0.5rem;
    > p {
      font-size: 0.3rem;
      height: 1rem;
      line-height: 1rem;
      color: #333;
      font-weight: 700;
    }
    > h5 {
      font-size: 0.28rem;
      line-height: 0.4rem;
      color: #333;
    }
  }
}
.study-class {
  padding: 0.2rem 0.3rem 1rem 0.3rem;
  > ul {
    width: 100%;
    > li {
      width: 100%;
      padding: 0.2rem 0;
      p {
        .line(1);
        font-size: 0.28rem;
        color: #333;
        margin-bottom: 0.1rem;
      }
      > h3 {
        font-size: 0.24rem;
        color: #666;
        .line(1);
      }
    }
  }
}
.join {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  > button {
    width: 29%;
    color: #fff;
    font-size: 0.32rem;
    background-color: @baseColor;
    height: 1rem;
  }
  > em {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    color: #f50c0c;
    width: 70%;
    height: 1rem;
    display: inline-block;
    background-color: #fff;
  }
}
</style>

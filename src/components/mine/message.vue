<template>
<div>
  <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>消息中心</h3>
       </header>
       <main>
           <ul>
               <li>
                   <router-link v-bind="{to:'/mine/message_detail/'+1}" class='flex'>
                    <span class='iconfont icon-san'></span>
                    <div class="main_content">
                        <p>系统消息</p>
                        <h3>恭喜您已注册成功！</h3>
                    </div>
                   </router-link>
               </li>
           </ul>
       </main>
</div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
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
main {
  padding-top: 1.6rem;
  > ul {
    background: #fff;
    padding: 0.3rem;
    > li {
      padding: 0.3rem;
      border-bottom: 1px solid #eee;
      > a {
        > span {
            background-color: @baseColor;
            border-radius: 50%;
            width: 0.8rem;
            height: 0.8rem;
            color:#fff;
            line-height: .8rem;
            padding-left: 3%;
        }
        > div {
          width: 80%;
          >p{
              font-size:.32rem;
              color:#333;
              height: 0.6rem;
              line-height: .6rem;
          }
          >h3{
             font-size:.26rem;
              color:#666;  
          }

        }
      }
    }
  }
}
</style>

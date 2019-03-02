<template>
<div>   
    <div id="box">
       <div class="header">
            <img src='../assets/img/logo.png'/>
       </div>
       <div class="inputs">
           <input type="text" placeholder="请输入手机号" v-model='username'>
           <input type="password" placeholder="请输入密码" v-model='pwd'>
            <mt-button type="primary" size="large" class='login' @click="go()">登录</mt-button>
            <div class="apply clearfix">
                <router-link class='f_left' to="/passwordForget">忘记密码？</router-link>
                <router-link class='f_right' to="/register">立即注册</router-link>
            </div>
       </div>
       <div class="third">
           <p><span>第三方登录</span> </p>
           <div class="row">
                <img src='../assets/img/WeChat.png'/>
                 <img src='../assets/img/qq.png'/>
                  <img src='../assets/img/sina.png'/>
           </div>
       </div>
    </div>
</div>
</template>
<script>
import Vue from "vue";

export default {
  name: "login",
  data() {
     
    return {
 username:"",
      pwd:''
    };
  },
  methods: {
    go(){
  		this.$router.push('/index')
  	}
  }
};
</script>
<style lang="less" scoped>
html {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("../assets/img/login.jpg") no-repeat center;
  background-size: cover;
}
#box {
  background-color: #fff;
  > .header {
    width: 100%;
    height: 3rem;

    > img {
      width: 70%;
      display: block;
      margin: 2rem auto;
    }
  }

  .inputs {
    > .apply {
      width: 80%;
      margin:.2rem auto;
      >a{
          color:#666;
          font-size: .28rem;
      }
    }
    width: 90%;
    margin: 0 auto;
    position: relative;
    > .mint-button--primary {
      width: 90%;
      margin: 0.5rem auto;
      height: 1rem;
      line-height: 1rem;
      background-color: #0076a4;
    }
    &:after {
      content: "";
      position: absolute;
      left: 10%;
      bottom: 74%;
      height: 1px;
      width: 80%;
      background-color: #fff;
      color: #fff;
    }
    > input {
        color:#fff;
      width: 90%;
      text-indent: 1em;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.3rem;
      background-color: #d8d8d8;
      margin: 0 auto;
      border: none;
      display: block;
      border-radius: 0;
      &:last-of-type{
          margin-top: -.1rem;
      }
    }
  }
  > .third {
    > p {
      height: 1rem;
      margin-top: 1rem;
      text-align: center;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      position: relative;

      &:before {
        position: absolute;
        left: 10%;
        width: 80%;
        content: "";
        height: 1px;
        background-color: #eee;
        bottom: 50%;
        z-index: 1;
      }
      > span {
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 50%;
        color: #666;
        background-color: #fff;
        transform: translate(-50%, -50%);
      }
    }
    > div {
      margin: 0.2rem auto;
      img {
        width: 1rem;
        height: 1rem;
        margin-left: 1.2rem;
      }
    }
  }
}
</style>

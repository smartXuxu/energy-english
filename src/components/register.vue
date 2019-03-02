<template>
<div>   
    <div id="box">
       <div class="header">
            <img src='../assets/img/logo.png'/>
       </div>
        <ul class='nav row' >
            <li v-for="(item,index) in tabs" 
            :class="{active:index == num}"
             @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon"> 
            <!-- <div class="inputs " v-show=" num==0"> -->
              <div class="inputs " >
           <input type="text" placeholder="请输入手机号" v-model='username'>
           <input type="text" placeholder="请输入验证码" v-model='code' clas='code'> <em>获取验证码</em>
           <input type="password" placeholder="请输入密码" v-model='pwd'>
            <input type="password" placeholder="请再次输入密码" v-model='sure_pwd'>
            <mt-button type="primary" size="large">注册</mt-button>
            <div class="apply clearfix">
            
                <router-link class='f_right' to="/login">已有账号去登录</router-link>
            </div>
       </div>
       <!-- <div class="inputs " v-show=" num === 1">
           <input type="text" placeholder="请输入手机号" v-model='username'>
           <input type="text" placeholder="请输入验证码" v-model='code' clas='code'> <em>获取验证码</em>
           <input type="password" placeholder="请输入密码" v-model='pwd'>
            <input type="password" placeholder="请再次输入密码" v-model='sure_pwd'>
            <mt-button type="primary" size="large">注册12324</mt-button>
            <div class="apply clearfix">
                <router-link class='f_right' to="/register">已有账号去登录</router-link>
            </div>
       </div> -->
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
  name: "register",
  data() {
    return {
      username: "",
      pwd: "",
      sure_pwd:"",
      code:"",
      tabs: ["我是教师", "我是学生"],
      num: 0,
      index: 0
    };
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    // 调用的函数如果 this.num==0 证明是教师身份 发送给后台即可
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
    height: 2rem;

    > img {
      width: 70%;
      display: block;
      margin: 1rem auto;
      margin-bottom: 0;
    }
  }
  >.nav{
    width:100%;
    height: 1rem;
    line-height: 1rem;
    >li{
      text-align: center;
      width: 50%;
      font-size: .3rem;
      color: #333;
      position: relative;
      &.active{
        color:#0076a4;
        &:after{
          content:"";
           width:0;
    height:0;
    border-width:0 .2rem .2rem;
    border-style:solid;
    border-color:transparent transparent #d8d8d8;/*透明 透明  灰*/
    left:45%;
    bottom: 0;
    position:absolute;
        }
      }
    }
  }

  .inputs {
    > .apply {
      width: 80%;
      margin: 0.2rem auto;
      > a {
        color: #666;
        font-size: 0.28rem;
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
      em{
          position: absolute;
          right: 8%;
         top: 22%;
         font-size: .24rem;
         color:#0076a4;
      }
    > input {
      color: #fff;
      width: 90%;
      text-indent: 1em;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.3rem;
      background-color: #d8d8d8;
      margin: 0 auto;
      border: none;
      display: block;
      position: relative;
      border-radius: 0;
     
      &:last-of-type {
        margin-top: -0.1rem;
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

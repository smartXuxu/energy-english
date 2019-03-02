<template >
    <div>
         <div id="box">
          <mt-header title="忘记密码">
  <router-link to="/" slot="left">
    <mt-button class="mintui mintui-back" @click="back()"></mt-button>
  </router-link>
</mt-header>   
        <div class="inputs " >
           <input type="text" placeholder="请输入手机号" v-model='username'>
           <input type="text" placeholder="请输入验证码" v-model='code' clas='code'> <em>获取验证码</em>
           <input type="password" placeholder="请输入密码" v-model='pwd'>
            <input type="password" placeholder="请再次输入密码" v-model='sure_pwd'>
            <mt-button type="primary" size="large">完成</mt-button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: "passwordForget",
  data() {
    return {
      username: "",
      pwd: "",
      sure_pwd: "",
      code: ""
    };
  },
  methods:{
      back(){
          history.back(-1);
      }
  }
};
</script>
<style lang="less" scoped>
@import url(../assets/css/common);
html {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url("../assets/img/login.jpg") no-repeat center;
  background-size: cover;
}
#box {
  background-color: #fff;
  > .mint-header {
    background-color: @baseColor;
    font-size: 0.36rem;
    height: 1rem;
    line-height: 1rem;
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
    margin-top: 1rem;
    position: relative;
    > .mint-button--primary {
      width: 90%;
      margin: 0.5rem auto;
      height: 1rem;
      line-height: 1rem;
      background-color: #0076a4;
    }
    em {
      position: absolute;
      right: 8%;
      top: 22%;
      font-size: 0.24rem;
      color: #0076a4;
    }
    > input {
      color: #666;
      width: 90%;
      text-indent: 1em;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.3rem;
      margin: 0 auto;
      border: none;
      display: block;
      position: relative;
      border-radius: 0;

      &:last-of-type {
        margin-top: -0.1rem;
      }
      /*改变placeholder的字体颜色*/
      &:-ms-input-placeholder {
        color: #666;
        opacity: 1;
      }
      &::-webkit-input-placeholder{
    color: #666;opacity:1;
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
  :-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #666;
        opacity: 1;
      }

      ::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #666;
        opacity: 1;
      }
</style>


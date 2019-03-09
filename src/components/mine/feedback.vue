<template>
<div class='layer'>
<header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>意见反馈</h3>
       </header>
<main>
    <mt-radio
 title="（必选）你想反馈的问题类型"
  v-model="value"
  :options="options">
</mt-radio>
<p>请补充详细问题和意见</p>
<textarea placeholder="请输入不少于10个字的描述" v-model='text'></textarea>
<div class="inputs">
    <input type="file" value="" accept="image/*"/>
    <div class="img-box">
        <img src='../../assets/img/add-pic_03.png'/>
    </div>
</div>
<button class='submit'>提交</button>
</main>
</div>
</template>
<script>
export default {
  name: "feedback",
  data() {
    return {
      options: "",
      value: "功能异常",
      text:''
    };
  },
  created() {
    this.options = [
      {
        label: "功能异常",
        value: "功能异常"
      },
      {
        label: "产品建议",
        value: "产品建议"
      },
      {
        label: "安全建议",
        value: "安全建议"
      },
      {
        label: "其他问题",
        value: "其他问题"
      }
    ];
  },
  methods: {}
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto
}
header {
  height: 1.6rem;
  width: 100%;
  background-color: @baseColor;
  position: relative;
  > i {
    font-size: 0.4rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 35%;
    left: 3%;
    color: #fff;
  }
  > h3 {
    color: #fff;
    text-align: center;
    font-size: 0.34rem;
    line-height: 1.8rem;
  }
  > em {
    position: absolute;
    width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    top: 30%;
    right: 3%;
    color: #fff;
  }
}
main {
  .mint-radiolist-title {
    background-color: #eee;
  }
  > p {
    font-size: 12px;
    margin: 8px;
    display: block;
    color: #888;
  }
  >textarea{
      padding:.3rem;
      height: 3rem;
      font-size:.28rem;
      border:none;
  }
  >.inputs{
      position:relative;
      background: #fff;
      margin-top: -.1rem;
      >input{
          position:absolute;
          left: 3%;
          top:10%;
          width: 2rem;
          height: 2rem;
          opacity: 0;
          background-color: pink;
      }
      >.img-box{
          width: 2rem;
          height: 2rem;
          >img{
              width:100%;
          }
      }
  }
  >.submit{
      margin-top: .2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      font-size:.32rem;
      text-align: center;
      display: block;
      color:#fff;
      background-color: @baseColor;
      width: 90%;
      left: 5%;
      position:relative;

  }
}
</style>

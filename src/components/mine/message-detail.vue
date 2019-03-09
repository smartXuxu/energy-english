<template>
<div class='layer'>
     <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>消息详情</h3>
       </header>
       <main>
           <h1>
               尊敬的用户：
           </h1>
           <p>恭喜您已注册成功！</p>
       </main>

</div>
</template>
<script>
export default {
  name: "message_detail",
  data() {
    return {
      id: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
.layer {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #eee;
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
main {
  padding:.5rem .3rem;
  margin-top: 1.8rem;
  background-color: #fff;
  > h1 {
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
  }
  > p {
    text-indent: 2em;
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #666;
  }
}
</style>
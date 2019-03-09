<template>
  <div class='layer'>
      <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>关于我们</h3>
       </header> 
       <main>
           <div class="logo">
               logo
           </div>
           <h3>v5.03</h3>
           <p>
               源动力英语是一款关于英语的线上播放的app，在这里，可以学到不同种类的英语，老师可以在线解答，可以互动交流，所以要想提高自己的英语，就赶快行动起来吧！
           </p>
       </main>
</div>  
</template>

<script>
export default {
  name: "about_us",
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
@import url("../../assets/css/common");
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow-y: auto;
}
header {
  height: 1.6rem;
  width: 100%;
  background-color: #fff;
  position: relative;
  > i {
    font-size: 0.4rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 35%;
    left: 3%;
    color: #666;
  }
  > h3 {
    color: #666;
    text-align: center;
    font-size: 0.34rem;
    line-height: 1.8rem;
  }
}
main{
    margin-top:.5rem;
    div{
      width: 1.3rem;
      height: 1.3rem;  
      line-height: 1.3rem; 
      border-radius: 3px;
    background-color: @baseColor;
    color:#fff;
    margin:0 auto;
    text-align: center;
    font-size:.4rem;
    }
    >h3{
        height: 0.6rem;
        line-height: .6rem;
        text-align: center;
         font-size:.22rem;
    }
    >p{
        text-indent: 2em;
        line-height: .4rem;
        font-size:.24rem;
        padding:.3rem;
    }
}
</style>

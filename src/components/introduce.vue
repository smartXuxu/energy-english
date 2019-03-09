<template>
<div>
<mt-swipe :auto="0" >
  <mt-swipe-item>
      <img src='../assets/img/s1.jpg'/>
  </mt-swipe-item>
  <mt-swipe-item>
      <img src='../assets/img/s2.jpg'/>
      </mt-swipe-item>
  <mt-swipe-item>
      <img src='../assets/img/s3.jpg'/>
        <button @click=' change_index()'>立即进入</button>
  </mt-swipe-item>

</mt-swipe>
</div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {};
  },
  mounted(){
localStorage.setItem("start_eng",1);
if(localStorage.getItem("start_eng")){
      this.$router.push("/index")
}
  },
  methods: {
      change_index(){
          this.$router.push("/index")
      }
  }
};
</script>
<style lang='less' scoped>
.mint-swipe {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .mint-swipe-indicators{
    bottom:15%!important;
}
  .mint-swipe-items-wrap {
    width: 100%;
    height: 100%;
    position:relative;
    img {
      width: 100%;
      height: 100%;
    }
    button{
        position:fixed;
        bottom:8%;
        left:35%;
        width:30%;
        height:.8rem;
        line-height:.8rem;        
        font-size:.36rem;
        background-color: #4ABBE7;
        color:#fff;
         border: 1px solid #fff; 
        box-shadow: 0px 3px 0px 0px #999
    }
  }
}

</style>
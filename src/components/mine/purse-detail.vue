<template>
<div>
<header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'> 零钱明细</i>
</header>
<main>
    <ul>
        <li class='flex'>
            <div class="left">
                    <em>课程收入</em>
                    <i>2018-08-07 19:56:55</i>
            </div>
            <span>
                +25.90
            </span>
        </li>
         <li class='flex'>
            <div class="left">
                    <em>课程收入</em>
                    <i>2018-08-07 19:56:55</i>
            </div>
            <span>
                +25.90
            </span>
        </li>
         <li class='flex'>
            <div class="left">
                    <em>课程收入</em>
                    <i>2018-08-07 19:56:55</i>
            </div>
            <span>
                +25.90
            </span>
        </li>
         <li class='flex'>
            <div class="left">
                    <em>课程收入</em>
                    <i>2018-08-07 19:56:55</i>
            </div>
            <span>
                +25.90
            </span>
        </li>
         <li class='flex'>
            <div class="left">
                    <em>课程收入</em>
                    <i>2018-08-07 19:56:55</i>
            </div>
            <span>
                +25.90
            </span>
        </li>
    </ul>
</main>
</div>
</template>
<script>
export default {
  name: "purse_detail",
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
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  > i {
    font-size: 0.4rem;
    position: absolute;
    top: 35%;
    left: 3%;
    color: #666;
  }
}
main {
  padding-top: 1.6rem;
  > ul {
    > li {
      padding: 0.3rem;
      border-bottom: 1px solid #eee;
    >.left{
        width: 70%;
        >em{
            font-size:.3rem;
            display: block;
        }
        >i{
            font-size:.26rem;
            color:#666;
        }
    }
     >span{
            font-size:.4rem;
            color:#666;
            text-align: center;
        }
    }
  }
}
</style>
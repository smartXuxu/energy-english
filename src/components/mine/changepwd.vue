<template>
    <div class='layer'>
<header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>修改密码</h3>
       </header>
       <main>
           <input type="password" placeholder='请输入原始密码'>
            <input type="password" placeholder='请输入新密码'>
            <input type="password" placeholder='请输入确认密码'>
           <button>
               确定
           </button>
       </main>
    </div>
</template>

<script>
export default {
    name:"change_pwd",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
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
    margin-top: .2rem;
    input{
        margin-bottom: 0;
        padding-bottom: 0;
        border:none;
        border-bottom: 1px solid #eee;
/*改变placeholder的字体颜色*/
    &:-ms-input-placeholder {
      color: #999;
      opacity: 1;
    }
    &::-webkit-input-placeholder {
      color: #999;
      opacity: 1;
    }
    }
    button{
        width: 90%;
        display: block;
        height: 0.8rem;
        line-height: .8rem;
        font-size:.3rem;
        background-color: @baseColor;
        color:#fff;
        border-radius: 20px;
        text-align: center;
        margin: .5rem auto 0 auto;
    }
}
</style>

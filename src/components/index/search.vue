<template >
    <div>
        <header>
            <em class='iconfont icon-fanhui' @click='back_go()'></em>
            <input type="search" placeholder="搜索课程或教师">
            <del>搜索</del>
        </header>
    </div>
</template>
<script>
export default {
    name:"search",
    data(){
        return{

        }
    },
    methods:{
         back_go() {
      this.$router.go(-1); //返回上一层
    }
    }
}
</script>
<style lang='less'>
.header-em{
       position: absolute;
       
        top:25%;
        color:#333;
        font-size:.36rem;
}
header{
    position:fixed;
    height: 1.6rem;
    width: 100%;
    z-index:2;
    top: 0;
    left: 0;
    &:before{
        position:absolute;
       content:"";
       top:20%;
       left:16%;
       background: url("../../assets/img/search.png") no-repeat center;
       background-size: 100%;
       width: 0.8rem;
       height: 0.8rem;
    }
    >em{
        .header-em;
        left: 3%;
        font-size:.5rem;
    }
    >del{
       .header-em;
        right: 3%;
        width:.8rem;
        height: 0.8rem;
        line-height: 0.8rem;
    }
    >input[type=search]{
        height: .8rem;
        width:70%;
        position: absolute;
        left:15%;
        top:20%;
        text-indent: 2em;
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
}
</style>


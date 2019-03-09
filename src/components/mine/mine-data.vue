<template>
<div class='mine_view'>
   <header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'></i>
           <h3>个人资料</h3>
           <em>完成</em>
       </header>
       <main>
           <ul>
               <li class='head clearfix'>
                    <span>头像</span>
                    <input type="file" accept="image/*" @change="handleFile" class="hiddenInput">
                    <img  class='f_right' src="../../assets/img/focus.jpg"/>
               </li>
               <li class='nick clearfix'>
                   <span>昵称</span>
                   <input  class='f_right' placeholder='请输入您的昵称' v-model='nickname'/>
               </li>
               <li class='sex clearfix'>
                   <span>性别</span>
                   <input class='f_right' placeholder='点击选择' v-model='sex' @click="Gender=true" />
               </li>
               <li class='gender clearfix'>
                   <span>生日</span>
                   <input class='f_right' placeholder='点击选择' v-model='nickname'/>
               </li>
               <li class='hometown clearfix'>
                   <span>家乡</span>
                   <input class='f_right' placeholder='点击选择' v-model='nickname'/>
               </li>
           </ul>
           <div>
               <p>个人说明</p>
               <textarea  placeholder='请填写个人说明' v-model='text_area'></textarea>
           </div>
       </main>
       <div class="tan" v-show="Gender" @click="Gender=!Gender">
        <div class="box">
          <p @click='chooseGender($event,0)'>男</p>
          <p @click='chooseGender($event,1)'>女</p>
          <p class="clear">取消</p>
        </div>
      </div>
</div>
</template>
<script>
export default {
  name: "mine_data",
  data() {
    return {
      Gender:false,
      nickname: "",
      text_area: "",
      sex:"",
    };
  },
  methods: {
// 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
    chooseGender(e,num){
      this.sex=this.num;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/common");
html,body{
    background-color:#eee!important;
}
.mine_view{
    position:fixed;
    width:100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color:#eee;
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
  > em {
    font-size: 0.3rem;
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 40%;
    right: 3%;
  }
}
main {
  
  padding-top: 1.6rem;
  > ul {
      
      background-color:#fff;
    > li {
      height: 1rem;
      padding:0 0.3rem;
      line-height: 1rem;
      &:nth-of-type(2){
        border-bottom:.2rem solid #eee ;
      }
      > img {
        vertical-align: middle;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
      > input {
        height: 0.6rem;
        line-height: .6rem;
          text-align: right;
        /*改变placeholder的字体颜色*/
        &:-ms-input-placeholder {
          color: #999;
          opacity: 1;
        }
        &::-webkit-input-placeholder {
          color: #999;
          opacity: 1;
        }
        &.hiddenInput{
       opacity: 0;
        position:absolute;
        right:4%;
        top:12%;
        width: 0.8rem;
        height: 0.8rem;
        z-index:3;
        }
      }
    }
  }
  > div {
      p{
          height: 1rem;
          line-height: 1rem;
          padding-left:3%;
          background-color:#fff;
      }
    textarea {
      height: 3rem;
      width: 100%;
      padding: 0.3rem;
      border:none;
    }
  }
}
.tan{z-index:5;position: fixed;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0,0,0,0.3); }
  .tan .box{width: 100%;height: 3rem;position: absolute;bottom: 0;left: 0;background: #f2f2f2}
  .tan .box p{width: 100%;text-align: center;background: #ffffff;line-height: .95rem;border-bottom: .01rem solid #e8e8e8;}
  .tan .box .clear{margin-top: .15rem}
</style>
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
               <li class='gender clearfix' @click="openPicker">
                   <span>生日</span>        
                   <input class='f_right' placeholder='点击选择' v-model='birthday'/>
               </li>
                 <mt-datetime-picker
                type="date"
                ref="picker"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleConfirm"
                :startDate="startDate"
             >
        </mt-datetime-picker>
               <li class='hometown clearfix' @click='isshow()'>
                   <span>家乡</span>
                  
                   <input class='f_right' placeholder='点击选择' v-model='all' />
               </li>
                
           </ul>
           <v-distpicker type="mobile" v-show="is_show" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" ></v-distpicker>
           <div>
               <p>个人说明</p>
               <textarea  placeholder='请填写个人说明' v-model='text_area'></textarea>
           </div>
       </main>
       <div class="tan" v-show="Gender" @click="Gender=!Gender">
        <div class="box">
          <p @click='chooseGender($event,"男")'>男</p>
          <p @click='chooseGender($event,"女")'>女</p>
          <p class="clear">取消</p>
        </div>
      </div>
</div>
</template>
<script>
import { DatetimePicker,Toast,Popup,Picker  } from 'mint-ui';
export default {
  filters: {
    //时间转换
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
    name: "mine_data",
    data() {
      return {
        Gender: false,
        nickname: "",
        text_area: "",
        sex: "",
        is_show: false,
        province: "",
        city: "",
        area: "",
        all: "",
        data: "",
        pickerValue: "",
        birthday: "", //出生日期
        startDate: new Date("1968-01-01")
      };
    },
   
    methods: {
      getDate(data){
            var date = new Date(data).toLocaleString().replace(/\//g,"-");
            return data;
          },
      // 将头像显示
      handleFile: function(e) {
        let $target = e.target || e.srcElement;
        let file = $target.files[0];
        var reader = new FileReader();
        reader.onload = data => {
          let res = data.target || data.srcElement;
          this.userInfo.avatar = res.result;
        };
        reader.readAsDataURL(file);
      },
      chooseGender(e, num) {
        this.sex = num;
        console.log(this.sex);
      },
      //弹框
      isshow() {
        this.is_show = !this.is_show;
      },
      //城市的选择
      onChangeProvince(a) {
        this.province = a.value;
        this.all = this.province + "-" + this.city + "-" + this.area;
        console.log(a.value);
      },
      onChangeCity(a) {
        this.city = a.value;
        this.all = this.province + "-" + this.city + "-" + this.area;
        console.log(a.value);
      },

      onChangeArea(a) {
        this.area = a.value;
        console.log(a.value);
        this.all = this.province + "-" + this.city + "-" + this.area;
        this.is_show = !this.is_show;
      },
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(data) {
         this.birthday = new Date(data).toLocaleString().replace(/\//g,"-").substr(0,9);
        //this.birthday = getDate(data); //获取的时间为时间戳，、、//getdata是自己写的一个转换时间的方法
      }
    }
  
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/common");
html,
body {
  background-color: #eee !important;
}
.mine_view {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow-y: auto;
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
    background-color: #fff;
    > li {
      height: 1rem;
      padding: 0 0.3rem;
      line-height: 1rem;
      >span{
        font-size:.3rem;
      }
      &:nth-of-type(2) {
        border-bottom: 0.2rem solid #eee;
      }
      > img {
        vertical-align: middle;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }

      > input {
        height: 0.6rem;
        line-height: 0.6rem;
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
        &.hiddenInput {
          opacity: 0;
          position: absolute;
          right: 4%;
          top: 12%;
          width: 0.8rem;
          height: 0.8rem;
          z-index: 3;
        }
      }
    }
  }
  > div {
    p {
      height: 1rem;
      line-height: 1rem;
      padding-left: 3%;
      background-color: #fff;
    }
    textarea {
      height: 3rem;
      width: 100%;
      padding: 0.3rem;
      border: none;
    }
  }
}
.tan {
  z-index: 5;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.tan .box {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
}
.tan .box p {
  width: 100%;
  text-align: center;
  background: #ffffff;
  line-height: 0.95rem;
  border-bottom: 0.01rem solid #e8e8e8;
}
.tan .box .clear {
  margin-top: 0.15rem;
}
.distpicker-address-wrapper .address-header {
  width: 80%;
}
input[type="date"] {
  width: 90%;
  margin-bottom: 0px;
  padding: 0;
  border: none;
}
</style>
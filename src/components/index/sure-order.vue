<template >
    <div class='order-view'>
       <header>
           <i class='iconfont icon-fanhui' @click='back_go()'></i>
           <h3>确定订单</h3>
       </header>
       <main>
           <div class="order-detail row">
               <img src='../../assets/img/teach.jpg'/>
               <div class="order-content">
                   <em>新概念英语第一册</em>
                   <i>￥9.90</i>
               </div>
           </div>
           <p>小计：￥9.90</p>
           <h3>总计：￥9.90</h3>
           <div class="choose-pay">
               <p>选择支付</p>
             <ul>  <!--  data-num="0" :class="show===0?'active':''"  ref="dataNum"  -->
                   <li :class="show===0?'airpay clearfix active':'airpay clearfix'" @click='choose_pay($event,0)'>
                       <em class="iconfont icon-icon-zhifubao"></em>
                       支付宝支付
                       <i class='iconfont icon-radio-checked f_right'></i>
                   </li> 
                   <li :class="show===1?'weChat clearfix active':'weChat clearfix'" @click='choose_pay($event,1)'>
                       <em class='iconfont icon-weixinzhifu'></em>
                       微信支付
                       <i class='iconfont icon-radio-checked f_right'></i>
                   </li>
               </ul>
           </div>
       </main>
       <div class="pay">
         <em>￥9.90</em>
         <button>立即购买</button>
     </div>
    </div>
</template>
<script>
export default {
  name: "sure_order",
  data() {
    return {
      orderId: "",
      show:0,
      num:0
    };
  },
  methods: {
    back_go() {
      this.$router.go(-1); //返回上一层
    },
    choose_pay:function(e, num){
        this.show = num;
      console.log(num);
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
    console.log(this.orderId);
  }
};
</script>
<style lang='less' scoped>
@import url("../../assets/css/common");
.order-view{
    width:100%;
    height: 100%;
    position:fixed;
    background-color:#eee!important;
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
    padding-top: 1.6rem;
    >p{
        background-color: #f4f4f4;
        text-align: right;
        padding-right:3%;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size:.3rem;
        margin-bottom: .2rem;
    }
    >h3{
     background-color: #fff;
        text-align: right;
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #eee;
        padding-right:3%; 
        font-size:.24rem;  
    }
    >.choose-pay{
      background-color:#fff;
      padding:.3rem;
      padding-bottom: 0;
      >p{
          font-size: .3rem;
          color:#666;
      }
      >ul{
         >li{
            height: 1rem;
            line-height: 1rem;
            font-size:.3rem;
            color:#666;
            border-bottom: 1px solid #eee;
            &.active{
                >i{
                    color:@baseColor;
                }
            }
            &.airpay{
                em{
                 color:#02aeec;   
                }
                
            }
            &.weChat{
                em{
                     color:#42b035; 
                }
              
            }
            >em{
                font-size:.4rem;
                vertical-align: middle;
            }
            >i{
            font-size:.5rem;
            color:#999;
            }
         } 
      }  
    }
    >.order-detail{
    background-color:#fff;
    padding:.3rem;

        >img{
            width: 2.8rem;
            height: 1.8rem;

        }
        >.order-content{
            margin-left: 3%;
            padding-top: 5%;
            >em{
                display: block;
                .line(1);
                font-size:.34rem;
            }
            >i{
                display: block;
                .line(1);
                margin-top: 5%;
                color:#666;
                font-size:.26rem; 
            }
        }
    }
}
.pay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  > button {
    width: 29%;
    color: #fff;
    font-size: 0.32rem;
    background-color: @baseColor;
    height: 1rem;
  }
  > em {
    padding-left: 0.3rem;
    font-size: 0.28rem;
    color: #f50c0c;
    width: 70%;
    height: 1rem;
    display: inline-block;
    background-color: #fff;
  }
}
</style>

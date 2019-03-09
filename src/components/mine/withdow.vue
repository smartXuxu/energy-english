<template>
<div class='layer'>
<header>
           <i class='iconfont icon-fanhui' @click='$router.back(-1)'> 零钱提现</i>
</header>
<main>
     <div class="box">
            <div   :class="show===0?'air_pay row active':'air_pay row'" @click='choose_pay($event,0)'>
                <em>提现到：</em>
                <s ><i class="iconfont icon-icon-zhifubao"></i> 支付宝</s>
                <del class="iconfont icon-xuanzhong"></del>
            </div>
            <div :class="show===1?'weChat row active':'weChat row'" @click='choose_pay($event,1)' >
                <em>提现到：</em>
                <s> <i class="iconfont icon-weixinzhifu"></i>微信</s>
                <del class="iconfont icon-xuanzhong"></del>
            </div>

            <p class="total-money" data-content="￥">
                <del>提现金额</del>
                <input type="number"/>
            </p>
            <span>当前零钱余额89元，<s>全部提现</s></span>
            <button>提现</button>
        </div>
</main>
</div>
</template>
<script>
export default {
  name: "withdow",
  data() {
    return {
      show: 0,
      num: 0
    };
  },
  methods: {
    choose_pay: function(e, num) {
      this.show = num;
      console.log(num);
    }
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
}
header {
  height: 1.6rem;
  width: 100%;
  background-color: #fff;
  position: relative;
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
  margin-top: 0.2rem;
  > .box {
    background-color: #fff;
    padding: 0.3rem;
    padding-top: 0;
    > div {
      height: 1rem;
      line-height: 1rem;
      &.active {
        del {
          color: @baseColor;
        }
      }
      &.air_pay {
        i {
          color: #0eadf3;
        }
      }
      &.weChat {
        i {
          color: #42b035;
        }
      }
      > em {
        margin-right: 0.2rem;
        font-size: 0.3rem;
      }
      > s {
        width: 40%;
        > i {
          font-size: 0.5rem;
          margin-right: 0.3rem;
          vertical-align: middle;
        }
      }
      > del {
        width: 30%;
        font-size: 0.4rem;
        color: #666;
        text-align: right;
      }
    }
    > .total-money {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      position: relative;
      height: 2.1rem;
      &:after {
        content: attr(data-content);
        position: absolute;
        left: 0;
        top: 45%;
        width: 0.6rem;
        height: 0.6rem;
        z-index: 3;
        font-size: 0.5rem;
      }
      > del {
        display: block;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
      }
      > input {
        padding-left: 10%;
        width: 80%;

        border: none;
      }
    }
    > button {
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      text-align: center;
      font-size: 0.3rem;
      color: #fff;
      background-color: @baseColor;
    }
    > span {
      font-size: 0.24rem;
      height: 0.6rem;
      margin-top: 0.1rem;
      > s {
        color: @baseColor;
      }
    }
  }
}
</style>
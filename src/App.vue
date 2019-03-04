<template>
<div id='app'>
  <router-view/>
</div>

</template>

<script>
import Vue from "vue";
export default {
  name: "App",
  
};
//rem 的配置
fnResize();
window.onresize = function() {
  fnResize();
};

function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
}
window.payHtml = "";
</script>

<style>
@import "./assets/css/my_base.css";
/* @import './assets/css/all.css'; */
@import "./assets/css/public.css";
html,
body {
  background: #fff;
}
</style>

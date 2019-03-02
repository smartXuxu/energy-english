// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//iconfont 的使用
import './assets/css/font/iconfont.css'
import 'mint-ui/lib/style.css'
import './mui/css/mui.min.css'
// 引入mint-ui组件
import Mint from 'mint-ui';

Vue.config.productionTip = false;
//全局使用mint-ui
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

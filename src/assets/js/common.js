import axios from 'axios'
import Vue from 'vue'
import {
  MintUI,
  MessageBox,
  Toast
} from 'mint-ui'

axios.defaults.withCredentials = true //允许cookei跨域
axios.defaults.timeout = 50000 //请求超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

// 正则
export function vali(elem, reg, errMsg) {
  if (elem == null || elem == "" || !reg.test(elem)) {
    //将问题显示在页面上
    MessageBox.alert(errMsg);
    console.log(errMsg);
    return false;
  } else if (reg.test(elem)) { //如果验证通过		
    console.log("正确");
    return true;
  }
}

export function getDate(tm) { //时间戳转换 返回年-月-日
  var tt = new Date(tm).toLocaleString().replace(/\//g, "-");
  tt = tt.split(" ");
  return tt[0];
}

export function allDate(tm) { //时间戳转换 返回到年-月-日-分钟
  var tt = new Date(tm).toLocaleString().replace(/\//g, "-");
  tt = tt.split(" ");
  var bb = tt[0].split("-");
  var ff = tt[1].split(":");
  return (bb[0] + "年" + bb[1] + "月" + bb[2] + "日" + ff[0] + "时" + ff[1] + "分");
}

export function contrastDate(tm) {
  var tt = new Date(tm).toLocaleString().replace(/\//g, "-");
  tt = tt.split(" ");
  var bb = tt[0].split("-");
  var ff = tt[1].split(":");


  //当前时间
  var today = new Date().toLocaleString().replace(/\//g, "-");
  today = today.split(" ")

  var ago = "";
  var today1 = today[0].split("-");
  var today2 = today[1].split(":");

  var n = today1[0] - bb[0];
  var y = today1[1] - bb[1];
  var r = today1[2] - bb[2];

  if (today2[0].slice(0, 2) == "下午") {
    var Dates = Number(today2[0].slice(2)) + 12;
  } else {
    var Dates = Number(today2[0].slice(2));
  }

  if (ff[0].slice(0, 2) == "下午") {
    var ffs = Number(ff[0].slice(2)) + 12;
  } else {
    var ffs = Number(ff[0].slice(2));
  }

  var s = Dates - ffs;
  var f = today2[1] - ff[1];

  if (n != 0) {
    ago = n + "年前";
  } else if (y != 0) {
    ago = y + "月前";
  } else if (r != 0) {
    ago = r + "天前";
  } else if (s != 0) {
    ago = s + "小时前";
  } else if (f != 0) {
    ago = f + "分钟前"
  } else {
    ago = "刚刚"
  }
  return (ago)
}


export function z(plusready) {
  var webview = plus.webview.currentWebview();
  plus.key.addEventListener('backbutton', function () {
    webview.canBack(function (e) {
      if (e.canBack) {
        webview.back();
      } else {
        webview.close(); //hide,quit按手机返回键直接退出APP
        //plus.runtime.quit();
      }
    })
  });
}


//放在主页面  点击两次退出APP 点击一次退出
export function f(plusready) {
  var first = null;
  plus.key.addEventListener('backbutton', function () {
    //首次按键，提示‘再按一次退出应用’
    if (!first) {
      first = new Date().getTime();
      Toast("再按一次退出应用")
      // document.write('再按一次退出应用'); //用自定义toast提示最好
      setTimeout(function () {
        first = null;
      }, 1000);
    } else {
      if (new Date().getTime() - first < 1000) {
        plus.runtime.quit();
      }
    }
  }, false);
}

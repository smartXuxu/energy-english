import Vue from 'vue'
import Router from 'vue-router'
// import Distpicker from 'v-distpicker'

// Vue.component('v-distpicker', Distpicker)
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)
import index from '@/components/index/index'
import lesson from '@/components/lesson/lesson'
import mine from '@/components/mine/mine'
import search from '@/components/index/search'
import login from '@/components/login'
import register from '@/components/register'
import passwordForget from '@/components/passwordForget'
Vue.use(Router)
import video_detail from '@/components/index/video-detail'
import detail from '@/components/index/detail'
import mine_index from '@/components/index/mine-index'

import sure_order from '@/components/index/sure-order'
import setting from '@/components/mine/setting'
import feedback from '@/components/mine/feedback'
import my_paurse from '@/components/mine/my_paurse'
import course_log from '@/components/mine/course-log'
import message from '@/components/mine/message'
import mine_data from '@/components/mine/mine-data'
import message_detail from '@/components/mine/message-detail'
import withdow from '@/components/mine/withdow'
import purse_detail from '@/components/mine/purse-detail'
import account_save from '@/components/mine/account_save'
import about_us from '@/components/mine/about_us'
import change_pwd from '@/components/mine/changepwd'
import swiper from '@/components/introduce'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: '/swiper',
      name: "swiper",
      component: swiper
    },
    {
      path: "/swiper",
      name: "swiper",
      component: swiper
    },
    // {
    //   path: "/",
    //   redirect: '/index',
    //   name: "index",
    //   component: index
    // },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: "login",
      component: login
    },
    {
      path: '/register',
      name: "register",
      component: register
    },
    {
      path: '/passwordForget',
      name: "passwordForget",
      component: passwordForget
    },
    {
      path: '/search',
      name: "search",
      component: search
    },
    {
      path: '/lesson',
      name: "lesson",
      component: lesson
    },
    {
      path: '/mine',
      name: "mine",
      component: mine
    },
    {
      path: '/index/video_detail/:id', component: video_detail,
      name: "video_detail"
    },
    {
      path: '/index/detail/:id', component: detail,
      name: "detail"
    },
    {
      path: '/index/mine_index/:id', component: mine_index,
      name: "mine_index"
    },
    {
      path: '/index/sure_order', component: sure_order,
      name: "sure_order"
    },

    {
      path: '/mine/message',
       component: message,
      name: "message"
    },
    {
      path: '/mine/feedback',
       component: feedback,
      name: "feedback"
    }
    ,
    {
      path: '/mine/course_log',
       component: course_log,
      name: "course_log"
    }
    ,
    {
      path: '/mine/setting',
       component: setting,
      name: "setting"
    }
    ,
    {
      path: '/mine/my_paurse',
       component: my_paurse,
      name: "my_paurse"
    },
    {
      path: '/mine/mine-data',
       component: mine_data,
      name: "mine_data"
    },
    {
      path: '/mine/message_detail/:id',
       component: message_detail,
      name: "message_detail"
    },
    {
      path: '/mine/withdow',
       component:withdow,
      name: "withdow"
    },
    {
      path: '/mine/purse_detail',
       component:purse_detail,
      name: "purse_detail"
    }
    , {
      path: '/mine/account_save',
       component:account_save,
      name: "account_save"
    }
    , {
      path: '/mine/about_us',
       component:about_us,
      name: "about_us"
    }
    , {
      path: '/mine/changepwd',
       component:change_pwd,
      name: "change_pwd"
    }
  ]
})

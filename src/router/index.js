import Vue from 'vue'
import Router from 'vue-router'
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
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: '/index',
      name: "index",
      component: index
    },
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
  ]
})

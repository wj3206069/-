import Vue from 'vue'
import VueRouter from 'vue-router'


import Shop from '../pages/Shop/Shop'
import Classify from '../pages/Classify/Classify'
import Cart from '../pages/Cart/Cart'
import Search from '../pages/Search/Search'
import PersonalCenter from '../pages/PersonalCenter/PersonalCenter'


//必须声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',//去掉#
  routes:[
    {
      path:'/shop',
      component:Shop,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },{
      path: '/personalCenter',
      component: PersonalCenter,
      meta: {
        isShow: false // 标识显示底部导航
      }
    },
    {
      path:'/',
      redirect:'/shop'
    }
  ]
})
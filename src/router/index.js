/*
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-03-27 14:35:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'
// import axios from '../utils/service'
// import Wx from '@/plugins/share'
import { Dialog } from 'vant'
 
import common from './common'
import business from './business'
 
 

// const index = () => import('../views/demo/index/index') //demo 列表
Vue.use(Router)
//path: hash
//component: 组件
//redirect: noredirect
//name: 'router-name'               the name is used by <keep-alive>  (must be set!)
//hidden: true                      if 'hidden:true' will not show in the sidebar (default is false)
//children: 子路由
export const routerMap = [
  // {
  //   path: '/index',
  //   component: index,
  //   name: 'demo',
  //   hidden: true,
  //   meta: { title: 'demo', icon: 'login' }
  // }
]
  // .concat(demo)
  .concat(common)
  .concat(business)

  // 空白页面匹配必须在最后面
  .concat([{ path: '*', component: () => import('../views/mobile/common/notFound') },])

const router = new Router({
  // mode:'history',//显示隐藏#
  routes: routerMap
})
//路由全局配置title
router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  Dialog.close()
  next()
})
// 公共调用 微信方法  隐藏菜单等
router.afterEach((to, from) => {
  // Wx.hideMenu();
})
export default router

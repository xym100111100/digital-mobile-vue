/*
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-04-26 14:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\router\common.js
 */
const login = () => import('../views/mobile/login/index.vue') //login 登录
const common = [
  // requireAuth 是否需要登录权限
  // keepAlive 全局缓存
  /*  {
      path: '/entrust',
      component: entrust,
      name: '****',
      hidden: true,                       keepAlive 全局缓存  true---false
      meta: { title: '****', icon: 'entrust' ,keepAlive: true/!*,requireAuth:true*!/}
    },*/
  {
    path: '/',
    component: login,
    name: 'login',
    hidden: true,
    meta: { title: '登录', keepAlive: true }
  }, {
    path: '/home',
    component: () => import('../views/mobile/home/index.vue'),
    name: 'home',
    hidden: true,
    meta: { title: '主页', requireAuth: false, keepAlive: true }//keepAlive: true
  },  {
    path: '/mine',
    component: () => import('../views/mobile/mine/index.vue'),
    name: 'mine',
    hidden: true,
    meta: { title: '个人中心', requireAuth: true }
  }
];
export default common

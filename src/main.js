// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/service'

// 自定义工具
import auUtils from './utils/au.utils'

import storage from './plugins/storage'



import wx from 'weixin-js-sdk'
import Vant, { Form } from 'vant'
// import { Lazyload } from 'vant'
import './plugins/validate'
import './plugins/rem'
import VueLazyLoad from 'vue-lazyload'
import { Picker } from 'vant'

import { Area } from 'vant';
import { Toast } from 'vant';
import { NavBar } from 'vant';
import { Pagination } from 'vant';  //分页

Vue.use(Pagination);

Vue.use(NavBar);
import { Uploader } from 'vant';//图片上传

Vue.use(Uploader);
window.eventBus = new Vue();
import VueBus from 'vue-bus';
Vue.use(VueBus);

import { Dialog } from 'vant';
Vue.use(Dialog);
import { Icon } from 'vant';
Vue.use(Icon);
//数据联调时，需要注释掉mock
//import './mock'
import { Popup } from 'vant';

import 'vant/lib/index.css';
import './assets/sass/base/main.scss';
import './assets/sass/auu/aau.scss';

import { IndexBar, IndexAnchor } from 'vant';
// import pinyin from 'js-pinyin'
Vue.use(IndexBar).use(IndexAnchor);

Vue.use(Toast);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Area);
Vue.use(Vant);

// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

//路由拦截
router.beforeEach((to, from, next) => {



  //登录页面
  if ("/" === to.path && localStorage.getItem("userData")) {
    sessionStorage.setItem('userData', localStorage.getItem("userData"));
    next({
      path: '/home'
    })
  } else if (localStorage.getItem("userData")) {
    sessionStorage.setItem('userData', localStorage.getItem("userData"));
    next();
  } else if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('userData')) {  // 通过sessionStorage获取当前的key是否存在
      next();
    }else {
       next();

      // Dialog.confirm({
      //   message: '还未登录不能访问该页面！！',
      //   cancelButtonText:"暂不",
      //   confirmButtonText:"现在去"
      // }).then(() => {
      //   next({
      //     path: '/',
      //     query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      //   })
      // }).catch(() => {
      //   console.log(to)
      // });
    }
  }
  else {
    next();
  }
})

// Vue.use(Lazyload,{
//   error:require('./assets/images/jg.jpeg'),
//   attempt:3,
//   loading:require('./assets/images/loading.gif'),
//   listenEvents: [ 'scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove','click' ]
// });//懒加载需要手动注册
//添加全局axios
import $axios from 'axios'
Vue.prototype.axios = axios;
Vue.prototype.$axios = $axios;
Vue.prototype.storage = storage
Vue.prototype.auUtils = auUtils

Vue.prototype.wx = wx;
Vue.config.productionTip = false;
Vue.use(VueLazyLoad);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
}).$mount('#app');

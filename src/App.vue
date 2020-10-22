<!--
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-06-11 20:14:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\App.vue
 -->
<template>
  <div id='app'  >
    <transition name="fade">
      <keep-alive>
        <router-view
          class="keep-alive"
          v-if="$route.meta.keepAlive"
        ></router-view>
       <!-- v-if="$route.meta && $route.meta.keepAlive"-->
      </keep-alive>
    </transition>
    <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
   <!-- v-if="!$route.meta || ($route.meta && !$route.meta.keepAlive)"-->

  </div>

</template>
<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style scoped>
  >>> .van-nav-bar__arrow{
    font-size: 26px;
    font-weight: bold;
  }
</style>
<style lang="scss" scoped>
@import './assets/fonts/font.css';
#app {
  font-family: PingFangSC-Regular;
  // background-color: #f99;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

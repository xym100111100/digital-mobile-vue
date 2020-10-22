<!--
 * @Author: your name
 * @Date: 2020-03-30 14:20:43
 * @LastEditTime: 2020-05-18 14:59:19
 * @LastEditors: Please set LastEditors
 * @Description: 个人中心
 * @FilePath: \smart-app\src\views\mobile\mine\index.vue
 -->
 
<template>
  <div class="jcy-page">
    <header class="jcy-page-header">
      <div class="jcy-page-header-user-icon">
        <img
          height="100%"
          width="100%"
          src="../../../assets/images/tou-xiang@2x.png"
          alt=""
        />
      </div>
      <div class="jcy-page-header-user-info">
        <div class="jcy-page-header-user-info_name">admin</div>
        <div class="jcy-page-header-user-info_email">123@qq.com</div>
      </div>
      <i class="jcy-page-header-edit_icon"></i>
    </header>
    <main class="jcy-page-main">
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon1"></div>
        <div class="jcy-page-main-list-item_text">个人信息</div>
        <div class="jcy-page-main-list-item-edit_icon"></div>
      </div>
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon2"></div>
        <div class="jcy-page-main-list-item_text">修改密码</div>
        <div class="jcy-page-main-list-item-edit_icon"></div>
      </div>
      <div class="jcy-page-main-list-item">
        <div class="jcy-page-main-list-item_icon3"></div>
        <div class="jcy-page-main-list-item_text">工资条</div>
        <div class="jcy-page-main-list-item-edit_icon"></div>
      </div>
      <div class="jcy-page-footer_btn" @click="goPage('/')">退出登录</div>
    </main>
    <!-- 底部导航 -->
    <footerNav :active="4"></footerNav>
  </div>
</template>
<script>
import footerNav from "components/footerNav.vue"; // 底部导航

export default {
  components: {
    footerNav,
  },
  name: "user",
  methods: {
    goPage(url) {
      // 切记子主路由切换的时候使用replace
      this.$router.replace(url);
    },
  },
};
</script>
 
<style lang="scss" scoped>
.jcy-page {
  width: 375px;
  height: 667px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
}
.jcy-page-header {
  height: 148px;
  width: 375px;
  background: #307bc5;
  display: flex;
  align-items: center;
}
.jcy-page-header-user-icon {
  height: 70px;
  width: 70px;
  margin: 0 15px;
}
.jcy-page-header-user-info {
  flex-grow: 1;
}
.jcy-page-header-user-info_name {
  color: #ffffff;
  font-size: 16px;
  height: 22px;
}
.jcy-page-header-user-info_email {
  color: #cecccc;
  height: 20px;
  font-size: 14px;
}
.jcy-page-header-edit_icon {
  height: 30px;
  width: 30px;
  background-image: url("../../../assets/images/zuo-bian@2x.png");
  background-size: 15px;
  background-repeat: no-repeat;
}

.jcy-page-main {
  flex-grow: 1;
  margin-top: 10px;
  background: #ffffff;
  padding-top: 10PX;
}

.jcy-page-main-list-item {
  height: 51px;
  width: 360px;
  display: flex;
  margin-left: 15px;
  border-bottom: 1px #eeeeee solid;
  align-items: center;
}
.jcy-page-main-list-item_icon1,
.jcy-page-main-list-item_icon2,
.jcy-page-main-list-item_icon3 {
  height: 30px;
  width: 30px;
  margin-right: 17px;
}

.jcy-page-main-list-item_icon1 {
  background-image: url("../../../assets/images/ge-ren-xin-xi@2x.png");
  background-size: 100%;
}
.jcy-page-main-list-item_icon2 {
  background-image: url("../../../assets/images/chong-zhi-mi-ma@2x.png");
  background-size: 100%;
}
.jcy-page-main-list-item_icon3 {
  background-image: url("../../../assets/images/gong-zi-tiao@2x.png");
  background-size: 100%;
}

.jcy-page-main-list-item_text {
  flex-grow: 1;
  color: #333333;
  font-size: 14px;
}

.jcy-page-main-list-item-edit_icon {
  text-align: center;
  height: 100%;
  width: 20px;
  padding-right: 0.32rem;
  background-image: url("../../../assets/images/zhan-kai@2x.png");
  background-repeat: no-repeat;
  background-size: 8px;
  background-position: center center;
}

.jcy-page-footer_btn {
  width: 346px;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #3372b2;
  line-height: 40px;
  text-align: center;
  color: #3372b2;
  font-size: 18px;
  margin: 68px auto 0;
}

.jcy-page-footer_btn:active {
  background: rgba(225, 225, 225, 0.5);
}
</style>
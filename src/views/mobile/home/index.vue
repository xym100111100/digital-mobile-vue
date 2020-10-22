
<template>
  <div class="jcy-page">
    <header class="jcy-page-header">
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-1"></div>
        <div>我的待办</div>
      </div>
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-2"></div>
        <div>我的已办</div>
      </div>
      <div class="jcy-page-header-item">
        <div class="jcy-page-header-item-3"></div>
        <div>我的申请</div>
      </div>
    </header>
    <main class="jcy-page-main">
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-1"></div>
        <div class="jcy-page-main-item-content">
          <div>放假通知</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 端午节放假通知</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-2"></div>
        <div class="jcy-page-main-item-content">
          <div>请假通知</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 张三三请假通知</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-3"></div>
        <div class="jcy-page-main-item-content">
          <div>会议公告</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span><i> 2019年度干部述职工作总结</i>
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
      <div class="jcy-page-main-item">
        <div class="jcy-page-main-item-icon jcy-page-main-item-icon-4"></div>
        <div class="jcy-page-main-item-content">
          <div>外出公告</div>
          <div class="jcy-page-main-item-content-detail">
            <span></span
            ><i>
              政治科张与宁外出SDK包括该方式都不敢看房读书报告开发板上课水底纳瓜开发你得空公告</i
            >
          </div>
        </div>
        <div class="jcy-page-main-item-right">
          <span>1</span>
        </div>
      </div>
    </main>
    <footerNav :active="0"></footerNav>
  </div>
  <!-- 底部导航 -->
</template>

<script>
import footerNav from "components/footerNav.vue"; // 底部导航
import villages from "components/villages.vue"; // 选择乡镇
import env from "@/utils/env";
import auUtils from "@/utils/au.utils";

export default {
  components: {
    footerNav,
    villages,
  },
};
</script>

<style scoped>
.jcy-page {
  width: 375px;
  height: 667px;
  background: #ffffff;
  background-image: url("../../../assets/images/index-banner@2x.png");
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: PingFangSC-Medium, PingFang SC;
  border-top: 1px solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  background-origin: border-box;
}

.jcy-page-header {
  width: 338px;
  height: 96px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin: 138px auto 15px;
  color: #333333;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.jcy-page-header-item {
  text-align: center;
}

.jcy-page-header-item-1,
.jcy-page-header-item-2,
.jcy-page-header-item-3 {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 11px auto 7px;
}

.jcy-page-header-item-1 {
  background-image: url("../../../assets/images/wo-de-dai-ban@2x.png");
  background-size: 100%;
}

.jcy-page-header-item-2 {
  background-image: url("../../../assets/images/wo-de-yi-ban@2x.png");
  background-size: 100%;
}

.jcy-page-header-item-3 {
  background-image: url("../../../assets/images/wo-de-shen-qing@2x.png");
  background-size: 100%;
}

.jcy-page-main {
  width: 375px;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
}

.jcy-page-main-item {
  display: flex;
  height: 75px;
  width: 338px;
  box-shadow: 2px 2px 12px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 0 auto;
  align-items: center;
  margin-top: 12px;
  background: #ffffff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  font-size: 14px;
}

.jcy-page-main-item-icon {
  height: 60px;
  width: 60px;
  margin: 0 0.2rem 0 0.14rem;
}

.jcy-page-main-item-content {
  flex-grow: 1;
}

.jcy-page-main-item-content-detail {
  display: flex;
  align-items: center;
  margin-top: 14px;
}

.jcy-page-main-item-content-detail span,
.jcy-page-main-item-content-detail i {
  display: block;
  font-size: 13px;
  color: #666666;
  width: 4rem;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.jcy-page-main-item-content-detail span {
  width: 14px;
  height: 14px;
  background-image: url("../../../assets/images/tong-zhi@2x.png");
  background-size: 100%;
  margin-right: 0.15rem;
}

.jcy-page-main-item-icon-1 {
  background-image: url("../../../assets/images/fang-jia-tong-zhi@2x.png");
  background-size: 100%;
}

.jcy-page-main-item-icon-2 {
  background-image: url("../../../assets/images/qing-jia-tong-zhi@2x.png");
  background-size: 100%;
}
.jcy-page-main-item-icon-3 {
  background-image: url("../../../assets/images/hui-yi-gong-gao@2x.png");
  background-size: 100%;
}
.jcy-page-main-item-icon-4 {
  background-image: url("../../../assets/images/wai-chu-gong-gao@2x.png");
  background-size: 100%;
}

.jcy-page-main-item-right {
  height: 80%;
  width: 30px;
  padding-top: 20px;
}

.jcy-page-main-item-right span {
  display: block;
  height: 16px;
  width: 16px;
  background: #e63e3e;
  text-align: center;
  line-height: 16px;
  color: white;
  border-radius: 100%;
  font-size: 11px;
}
</style>
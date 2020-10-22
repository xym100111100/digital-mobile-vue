<template>
  <div class="jcy-page">
    <header class="jcy-page-header">工作台</header>
    <main class="jcy-page-content">
      <div
        class="jcy-page-content-item"
        :key="index"
        v-for="(item, index) in list"
      >
        <div class="jcy-page-content-item-title">{{ item.title }}</div>
        <ul>
          <li v-for="(item2, index2) in item.data" :key="index2">
            <div
              class="jcy-page-content-item-content_icon"
              :style="{ backgroundImage: 'url(' + item2.icon + ')' }"
            ></div>
            <div>{{ item2.text }}</div>
          </li>
        </ul>
      </div>
    </main>
    <!-- 底部导航 -->
    <footerNav :active="2"></footerNav>
  </div>
</template>

<script>
import footerNav from "components/footerNav.vue"; // 底部导航

export default {
  components: {
    footerNav,
  },
  data() {
    return {
      list: [
        {
          title: "个人事务",
          data: [
            {
              icon: require("../../../assets/images/ge-ren-bao-can@2x.png"),
              text: "个人报餐",
            },
            {
              icon: require("../../../assets/images/gong-gao-dong-tai@2x.png"),
              text: "公告动态",
            },
            {
              icon: require("../../../assets/images/dang-jian@2x.png"),
              text: "党建",
            },
            {
              icon: require("../../../assets/images/ji-xiao@2x.png"),
              text: "绩效",
            },
            {
              icon: require("../../../assets/images/ding-can-guan-li@2x.png"),
              text: "点餐管理",
            },
          ],
        },
        {
          title: "考勤管理",
          data: [
            {
              icon: require("../../../assets/images/qing-xiu-jia@2x.png"),
              text: "请休假",
            },
            {
              icon: require("../../../assets/images/chu-chai@2x.png"),
              text: "出差",
            },
            {
              icon: require("../../../assets/images/bu-da-ka@2x.png"),
              text: "补打卡",
            },
            {
              icon: require("../../../assets/images/yue-kao-qin@2x.png"),
              text: "月考勤",
            },
            {
              icon: require("../../../assets/images/qing-xiu-jia-guan-li@2x.png"),
              text: "请休假管理",
            },
            {
              icon: require("../../../assets/images/bu-ka-guan-li@2x.png"),
              text: "补卡管理",
            },
            {
              icon: require("../../../assets/images/yue-kao-qing-tong-ji@2x.png"),
              text: "月考勤统计",
            },
          ],
        },
        {
          title: "报账管理",
          data: [
            {
              icon: require("../../../assets/images/cha-lv-bao-xiao@2x.png"),
              text: "差旅报销",
            },
          ],
        },
        {
          title: "其他",
          data: [
            {
              icon: require("../../../assets/images/tong-xun-lu@2x.png"),
              text: "通讯录",
            },
            {
              icon: require("../../../assets/images/xun-cha-guan-li@2x.png"),
              text: "巡查管理",
            },
            {
              icon: require("../../../assets/images/she-bei-bao-xiu@2x.png"),
              text: "设备保修",
            },
            {
              icon: require("../../../assets/images/wen-jian-guan-li@2x.png"),
              text: "文件管理",
            },
            {
              icon: require("../../../assets/images/ban-gong-yong-ping@2x.png"),
              text: "办公用品",
            },
            {
              icon: require("../../../assets/images/yong-che-shen-qing@2x.png"),
              text: "用车申请",
            },
            {
              icon: require("../../../assets/images/che-liang-guan-li@2x.png"),
              text: "车辆管理",
            },
            {
              icon: require("../../../assets/images/hui-yi-shi@2x.png"),
              text: "会议室",
            },
            {
              icon: require("../../../assets/images/hui-yi-guan-li@2x.png"),
              text: "会议室管理",
            },
            {
              icon: require("../../../assets/images/zhi-ban-guan-li@2x.png"),
              text: "值班管理",
            },
          ],
        },
      ],
    };
  },
  computed: {
    reversedList() {
      let newList = [];
      this.list.map((item) => {
        item.map((item2) => {
          return {};
        });
      });
      return newList;
    },
  },
};
</script>

<style scoped >
.jcy-page-content-item {
  width: 100%;
  background: white;
}
.jcy-page-header {
  height: 40px;
  background: #307bc5;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  width: 375px;
  top: 0;
  position: fixed;
  font-size: 18px;
}
.jcy-page-content {
  padding: 40px 0;
}
.jcy-page-content-item-title {
  width: 375px;
  height: 32px;
  background: #f8f8f8;
  line-height: 32px;
  padding-left: 8px;
  color: #666666;
}

.jcy-page ul {
  width: 359px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 10px 0;
}

.jcy-page li {
  height: 80PX;
  width: 90px;
  border: 1px solid #f4f4f4;
  box-sizing: border-box;
  margin-left: -1px;
  margin-top: -1px;
  text-align: center;
  color: #333333;
}
.jcy-page li:active {
  background: rgba(225, 225, 225, 0.5);
}

.jcy-page-content-item-content_icon {
  height: 24px;
  width: 24px;
  margin: 20px auto 7px;
  background-size: 100%;
}
</style>
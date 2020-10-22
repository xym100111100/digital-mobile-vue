<!--
 * @Author: your name
 * @Date: 2020-03-20 10:45:58
 * @LastEditTime: 2020-03-30 14:25:25
 * @LastEditors: Please set LastEditors
 * @Description: 底部导航
 * @FilePath: \smart-app\src\views\mobile\home\index.vue
 -->
<template>
  <div class="auu-home__footer">
    <div class="auu-footitem" :class="{'is-active':active===0}" @click="$router.push('/home')">
      <img :src="active===0?footimgActive.home:footimg.home" class="auu-footitem__img" />
      <span class="auu-footitem__label">首页</span>
    </div>
    <div class="auu-footitem" :class="{'is-active':active===1}"  @click="$router.push('/notice')">
      <img :src="active===1?footimgActive.notice:footimg.notice" class="auu-footitem__img" />
      <span class="auu-footitem__label">公告动态</span>
    </div>
    <div class="auu-footitem" :class="{'is-active':active===2}" @click="$router.push('/workbench')">
      <img :src="active===2?footimgActive.workbench:footimg.workbench" class="auu-footitem__img" />
      <span class="auu-footitem__label">工作台</span>
    </div>
    <div class="auu-footitem" :class="{'is-active':active===3}" @click="$router.push('/calendar')">
      <img :src="active===3?footimgActive.calendar:footimg.calendar" class="auu-footitem__img" />
      <span class="auu-footitem__label">日历</span>
    </div>
      <div class="auu-footitem" :class="{'is-active':active===4}" @click="$router.push('/mine')">
      <img :src="active===4?footimgActive.mine:footimg.mine" class="auu-footitem__img" />
      <span class="auu-footitem__label">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // 底部导航图片
      footimg: {
        home: require("assets/images/foot_home.png"),
        notice: require("assets/images/notice@2x.png"),
        calendar: require("assets/images/calendar@2x.png"),
        workbench: require("assets/images/workbench@2x.png"),
        mine: require("assets/images/foot_mine.png")
      },
      footimgActive: {
        home: require("assets/images/foot_home_active.png"),
        notice: require("assets/images/notice-active@2x1.png"),
        calendar: require("assets/images/calendar-active@2x.png"),
        workbench: require("assets/images/workbench-active@2x.png"),
        mine: require("assets/images/foot_mine_active.png")
      }
    };
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {}
};
</script>

<!--
 * @Author: your name
 * @Date: 2020-03-27 14:23:01
 * @LastEditTime: 2020-03-27 14:57:07
 * @LastEditors: Please set LastEditors
 * @Description: 页面正在开发中
 * @FilePath: \smart-app\src\views\mobile\common\notFound.vue
 -->
 
<template>
  <div class="auu_h100p auu-bg-white">
    <van-nav-bar class="auu-page2__nav" title="页面正在开发中" left-arrow @click-left="auUtils.goback"></van-nav-bar>
    <img :src="require('assets/images/notFound.png')" class="s-img" />
    <div class="auu-word auu-word--large auu-word--black is-bolder auu_tc">页面正在开发中...</div>
    <div class="auu-word auu-word--info auu_tc auu_mt10">请耐心等待</div>
    <div class="auu_pd15 auu_mt30">
      <van-button plain type="info" class="auu-van-button-1 auu_w100p" @click="$router.push('/home')">返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.s-img {
  margin: 39px auto;
  width: 165px;
  display: block;
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-04-07 17:19:11
 * @LastEditTime: 2020-04-07 17:45:03
 * @LastEditors: Please set LastEditors
 * @Description: 提交成功
 * @FilePath: \tengzhou-cloud-app\src\views\mobile\common\submitSuccess.vue
 -->
 
<template>
  <div class="auu_h100p auu-bg-white">
    <van-nav-bar class="auu-page2__nav" title="提交成功" left-arrow @click-left="auUtils.goback"></van-nav-bar>
    <img :src="require('assets/images/cmn_success.png')" class="s-img" />
    <div class="auu-word s-word-success auu-word--success is-bolder auu_tc">页面提交成功!</div>
    <div class="auu-word auu-word--info auu_tc auu_mt10">您可以在我的订单中查询单详情或跟踪物流信息</div>
    <div class="auu_pd15 auu_mt30">
      <van-button
        type="info"
        class="auu-van-button-1 auu_w100p auu_mb20"
        v-if="detailPath"
        @click="$router.push(detailPath)"
      >查看详情</van-button>
      <van-button
        plain
        type="info"
        class="auu-van-button-1 auu_w100p"
        @click="$router.push('/home')"
      >返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      detailPath: ""
    };
  },
  created() {},
  mounted() {
    this.detailPath = sessionStorage.getItem("submitSuccessDetailPath");
  },
  activated() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.s-img {
  margin: 40px auto 15px;
  width: 54px;
  display: block;
}
.s-word-success {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
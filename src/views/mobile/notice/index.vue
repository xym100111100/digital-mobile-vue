<template>
  <div>
    公告动态
    <footerNav :active="1"></footerNav>
  </div>
</template>

<script>
import footerNav from "components/footerNav.vue"; // 底部导航
export default {
  components: {
    footerNav,
  },
};
</script>

<style>
</style>
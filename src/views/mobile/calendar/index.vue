<template>
  <div>
    日历
    <footerNav :active="3"></footerNav>
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
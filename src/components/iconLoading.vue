<!--
 * @Author: your name
 * @Date: 2020-04-03 14:31:46
 * @LastEditTime: 2020-04-03 14:42:16
 * @LastEditors: Please set LastEditors
 * @Description: 基于vanui的loading图标
 * @FilePath: \tengzhou-cloud-app\src\components\iconLoading.vue
 -->
 
<template>
  <div class="van-loading">
    <span class="van-loading__spinner van-loading__spinner--default " :class="[spinnerClass]">
      <svg viewBox="25 25 50 50" class="van-loading__circular">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    spinnerClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {}
};
</script>
<style lang="scss" scoped>

</style>
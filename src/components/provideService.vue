<!--
 * @Author: your name
 * @Date: 2020-04-07 16:55:01
 * @LastEditTime: 2020-04-07 16:59:21
 * @LastEditors: Please set LastEditors
 * @Description: 提供服务
 * @FilePath: \tengzhou-cloud-app\src\components\provideService.vue
 -->
 
<template>
  <div class="s-surport auu_tc auu-word--info auu-word--small">
    本服务由
    <span class="auu-word auu-word--small">@{{provider}}</span>
    提供
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    provider: {
      type: String,
    }
  },
  data() {
    return {
    
    };
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.s-surport {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 0;
}
</style>
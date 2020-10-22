<!--
 * @Author: your name
 * @Date: 2020-04-07 16:06:51
 * @LastEditTime: 2020-04-07 16:50:26
 * @LastEditors: Please set LastEditors
 * @Description:  二维码弹框
 * @FilePath: \tengzhou-cloud-app\src\components\qrcode.vue
 -->
 
 
<template>
  <div>
    <div
      class="auu-qrcode__overlay animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'fadeIn':'fadeOut']"
      @click="closeQrCode"
    ></div>
    <div
      class="auu-qrcode animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'zoomIn':'zoomOut']"
    >
      <span class="auu-qrcode__close" @click="closeQrCode">
        <van-icon name="cross" />
      </span>
      <img :src="src" class="auu-qrcode__img" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    src: {
      type: String
    }
  },
  data() {
    return {
      // 是否显示二维码弹框
      qrcode: {
        visible: false, // display
        animate: false // 动画
      },

      timer: null
    };
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {
    /**
     * @description: 打开二维码弹框
     * @param {type}
     * @return:
     */

    openQrCode() {
      clearTimeout(this.timer);
      this.qrcode.animate = true;
      this.qrcode.visible = true;
      this.$emit("update:visible", true);
    },

    /**
     * @description: 关闭二维码弹框
     * @param {type}
     * @return:
     */
    closeQrCode() {
      clearTimeout(this.timer);

      this.qrcode.animate = false;
      this.timer = setTimeout(() => {
        this.qrcode.visible = false;
        this.$emit("update:visible", false);
      }, 500);
    }
  },
  watch: {
    visible(value) {
      clearTimeout(this.timer);
      if (value) {
        this.openQrCode();
      } else {
        this.closeQrCode();
      }
    }
  }
};
</script>

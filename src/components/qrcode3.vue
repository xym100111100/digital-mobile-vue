<!--
 * @Author: your name
 * @Date: 2020-04-07 16:06:51
 * @LastEditTime: 2020-05-18 17:19:18
 * @LastEditors: Please set LastEditors
 * @Description:  二维码弹框3
 * @FilePath: \tengzhou-cloud-app\src\components\qrcode.vue
 -->
 
 
<template>
  <div>
    <div
      class="auu-qrcode3__overlay animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'fadeIn':'fadeOut']"
      @click="closeQrCode"
    ></div>
    <div
      class="auu-qrcode3 animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'zoomIn':'zoomOut']"
    >
      <span class="auu-qrcode3__close" @click="closeQrCode">
        <van-icon name="cross" />
      </span>

      <div class="auu-qrcode3__label">姓名：{{userName}}</div>
      <div class="auu-qrcode3__label">身份证：{{code}}</div>
      <div class="auu-qrcode3__twocode_wrap">
        <img :src="twocodeSrc" class="auu-qrcode3__twocode" />
        <img :src="require('assets/images/cert_temporary_signet.png')" class="auu-qrcode3__signet" />
      </div>
      <img :src="barcodeSrc" class="auu-qrcode3__barcode" />
      <div class="auu-qrcode3__barcodelabel">1542 4587 4125 3654 15</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    barcodeSrc: {
      type: String,
    },
    twocodeSrc: {
      type: String,
    },
    userName: {
      type: String,
    },
    code: {
      type: String,
    },
  },
  data() {
    return {
      // 是否显示二维码弹框
      qrcode: {
        visible: false, // display
        animate: false, // 动画
      },

      timer: null,
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
    },
  },
  watch: {
    visible(value) {
      clearTimeout(this.timer);
      if (value) {
        this.openQrCode();
      } else {
        this.closeQrCode();
      }
    },
  },
};
</script>

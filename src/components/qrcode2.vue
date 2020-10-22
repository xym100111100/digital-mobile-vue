<!--
 * @Author: your name
 * @Date: 2020-04-07 16:06:51
 * @LastEditTime: 2020-05-18 17:00:12
 * @LastEditors: Please set LastEditors
 * @Description:  二维码弹框2
 * @FilePath: \tengzhou-cloud-app\src\components\qrcode.vue
 -->
 
 
<template>
  <div>
    <div
      class="auu-qrcode2__overlay animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'fadeIn':'fadeOut']"
      @click="closeQrCode"
    ></div>
    <div
      class="auu-qrcode2 animated"
      v-show="qrcode.visible"
      :class="[qrcode.animate?'zoomIn':'zoomOut']"
    >
      <span class="auu-qrcode2__close" @click="closeQrCode">
        <van-icon name="cross" />
      </span>
    
      <img :src="barcodeSrc" class="auu-qrcode2__barcode" />
      <div class="auu-qrcode2__label">
        <span class="auu-qrcode2__label_l">4507*********130</span>
        <span class="auu-qrcode2__label_r">查看数字</span>
      </div>
      <img :src="twocodeSrc" class="auu-qrcode2__twocode" />
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
    barcodeSrc: {
      type: String
    },
    twocodeSrc: {
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

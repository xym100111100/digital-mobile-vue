<!--
 * @Author: your name
 * @Date: 2020-05-09 14:23:33
 * @LastEditTime: 2020-05-25 15:33:37
 * @LastEditors: Please set LastEditors
 * @Description: 我的消息-详情
 * @FilePath: \tengzhou-cloud-app\src\components\myMessageDetail.vue
 -->
 
<template>
  <van-popup
    v-model="visible"
    position="bottom"
    :close-on-click-overlay="false"
    @click-overlay="clickOverlay"
    :style="style"
  >
    <div class="auu-title1 auu_border--bottom auu_flex_wrap s-title">
      <span class="auu-title1__label auu_flex_1">{{title}}</span>
      <span class="auu_pdlr3 auu-word--info" @click="cancleClick" v-if="cancleable">关闭</span>
    </div>
     <van-field
      label="标题"
      :value="form.title"
       type="textarea"
      rows="1"
      autosize
      :readonly="true"
      input-align="right"
      label-class="s-field-label"
    ></van-field>
    <van-field
      label="消息类型"
      :value="formatType(form.type)"
      type="text"
      :readonly="true"
      input-align="right"
      label-class="s-field-label"
    ></van-field>
       <!-- <van-field
      label="推送人"
      :value="form.pusherName"
      type="text"
      :readonly="true"
      input-align="right"
      label-class="s-field-label"
    ></van-field> -->
    <van-field
      label="推送日期"
      :value="auUtils.formatDate(new Date(form.pusherTime),'yyyy-MM-dd HH:mm')"
      type="text"
      :readonly="true"
      input-align="right"
      label-class="s-field-label"
    ></van-field>
   
  
    <van-field
      label="内容"
      :value="form.content"
      type="textarea"
      rows="4"
      autosize
      :readonly="true"
      input-align="right"
      label-class="s-field-label"
    ></van-field>
   
  </van-popup>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: "详情"
    },

    // 是否显示取消按钮
    cancleable: {
      type: Boolean,
      default: false
    },

    // 表单数据
    form: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      style: {
        maxHeight: "90%"
      }
    };
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {
    /**
     * @description: 点击遮罩
     * @param {type}
     * @return:
     */
    clickOverlay() {
      this.$emit("update:visible", false);
    },

    /**
     * @description: 取消按钮
     * @param {type}
     * @return:
     */
    cancleClick() {
      this.$emit("update:visible", false);
    },

    

    /**
     * @description:  类型
     * @param {type} type
     * @return: {void}
     */
    formatType: function(type) {
      // type: "1", // 1咨询 2投诉 3建议
      const obj = {
        "1": "个人消息",
        "2": "公共消息",
      };
      return obj[String(type)];
    }
  }
};
</script>

<style lang="scss" scoped>
.s-title {
  margin-bottom: 3px;
}
/deep/ .s-field-label {
  width: 60px;
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-04-07 17:47:57
 * @LastEditTime: 2020-04-07 18:12:14
 * @LastEditors: Please set LastEditors
 * @Description: 支付页面
 * @FilePath: \tengzhou-cloud-app\src\views\mobile\common\payment.vue
 -->

 
<template>
  <div class="auu-page-main">
    <van-nav-bar class="auu-page2__nav" title="支付" left-arrow @click-left="auUtils.goback"></van-nav-bar>
    <div class="auu-list5">
      <div class="auu-list5__title">{{title}}</div>
    </div>

    <div class="s-payment">
      <div class="s-payment__label">支付金额</div>
      <div class="s-payment__value">
        <span class="s-payment__number">{{ammount}}</span>元
      </div>
    </div>
    <div class="s-title">支付方式</div>
    <!-- 菜单 按钮 -->
    <div class="auu-form1 s-form">
      <van-radio-group v-model="formData.payType">
        <van-field value="支付宝" :readonly="true" :left-icon="require('assets/images/pay_zfb.png')">
          <template #right-icon>
            <van-radio name="zfb"></van-radio>
          </template>
        </van-field>
        <van-field value="微信" :readonly="true" :left-icon="require('assets/images/pay_wx.png')">
          <template #right-icon>
            <van-radio name="wx"></van-radio>
          </template>
        </van-field>
        <van-field value="银行卡" :readonly="true" :left-icon="require('assets/images/pay_bank.png')">
          <template #right-icon>
            <van-radio name="bank"></van-radio>
          </template>
        </van-field>
      </van-radio-group>
    </div>
    <div class="s-btn-wrap">
      <van-button type="info" class="auu_w100p auu-van-button-1" @click="submit">确认支付</van-button>
    </div>
  </div>
</template>
<script>
import iconLoading from "components/iconLoading.vue";

export default {
  components: {
    iconLoading
  },
  data() {
    return {
      title: "特种作业操作证的考核、发证、复审（复审、换证）",

      ammount: "0.00", // 金额

      // 表单数据
      formData: {
        payType: "" // 支付方式
      }

      // 评分tag
    };
  },
  computed: {},
  created() {},

  activated() {},
  mounted() {
    this.ammount = "109.94";
  },
  methods: {
    /**
     * @description: 提交
     * @param {type}
     * @return:
     */
    submit() {
      console.log("formData:", this.formData);
      if (!this.formData.payType) {
        this.$toast.fail("请选择支付方式");
        return;
      }
    }
  }
};
</script>
 
<style lang="scss" scoped>
.s-btn-wrap {
  padding: 35px 15px 15px;
}
.s-payment {
  text-align: center;
  padding: 30px 0;
  background: #fff;
  &__label {
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }
  &__value {
    color: #fb9810;
    font-size: 16px;
  }
  &__number {
    font-size: 30px;
    margin-right: 8px;
  }
}
.s-title {
  font-size: 14px;
  line-height: 36px;
  color: #666;
  padding: 0 15px;
}
.s-form {
  /deep/ .van-icon__image {
    width: 22px;
    height: 22px;
  }
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-03-24 16:07:44
 * @LastEditTime: 2020-05-12 16:38:29
 * @LastEditors: Please set LastEditors
 * @Description: 乡镇选择
 * @FilePath: \smart-app\src\components\villages.vue
 -->
 
<template>
  <van-popup
    v-model="visible"
    position="bottom"
    :close-on-click-overlay="false"
    @click-overlay="clickOverlay"
    :style="style"
  >
    <div class="auu-title1 van-hairline--bottom auu_flex_wrap">
      <span class="auu-title1__label auu_flex_1">{{title}}</span>
      <span class="auu_pdlr3 auu-word--info" @click="cancleClick" v-if="cancleable">取消</span>
    </div>
    <div class="auu-tag-wrapper">
      <van-row gutter="10">
        <van-col span="8" v-for="item in list" :key="item.label">
          <div
            class="auu-tag"
            :class="{'is-active':activeVal===item.value}"
            @click="handelClick(item)"
          >{{item.label}}</div>
        </van-col>
      </van-row>
    </div>
  </van-popup>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    // 默认选择第一个，如果不是first，则选择id
    autoSelect: {
      type: [Boolean, String],
      default: "first",
    },

    title: {
      type: String,
      default: "选择乡镇",
    },

    // 是否显示取消按钮
    cancleable: {
      type: Boolean,
      default: false,
    },

  // 是否显示所有乡镇
    allVillages:{
       type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      // visible:false
      activeVal: "", // 当前选中的id

      style: {
        maxHeight: "90%",
      },
    };
  },
  computed: {
    list() {
      if(this.allVillages){
        return this.$store.state.villages;
      }else{
        return [
        {
            "label": "藤县",
            "value": "450422000"
        } 
    ];

      }
    },
  },
  created() {
     // 请求后台获取乡镇数据
    this.$store.dispatch("fetchVillages", (data) => {
        // 默认选择
      if (this.autoSelect === "first" && this.list.length) {
        this.handelClick(this.list[0]);
      } else if (this.autoSelect) {
        this.selectById(this.autoSelect);
      }
    });
  },
  mounted() {},
  activated() {},
  methods: {
    /**
     * @description: 点击事件
     * @param {Object} item
     * @return:
     */
    handelClick(item) {
      this.activeVal = item.value;
      this.$emit("update:visible", false);
      this.$emit("onSelect", item);
    },
    /**
     * @description: 点击遮罩
     * @param {type}
     * @return:
     */
    clickOverlay() {
      this.$emit("update:visible", false);
    },

    /**
     * @description: 使用id选择
     * @param {string} id
     * @return:
     */
    selectById(id) {
      let obj = this.list.filter((item) => item.value === id).shift();
      obj && this.handelClick(obj);
    },

    /**
     * @description: 取消按钮
     * @param {type}
     * @return:
     */
    cancleClick() {
      this.activeVal = "";
      this.$emit("update:visible", false);
      this.$emit("onSelect", null);
    },
  },
};
</script>

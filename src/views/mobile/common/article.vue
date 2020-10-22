<!--
 * @Author: your name
 * @Date: 2020-04-17 17:52:16
 * @LastEditTime: 2020-05-14 09:56:52
 * @LastEditors: Please set LastEditors
 * @Description: 文章页面（数据来源于后台系统的富文本编辑器）
 * @FilePath: \tengzhou-cloud-app\src\views\mobile\common\article.vue
 -->
 
 
<template>
  <div class="auu-page3">
    <van-nav-bar
      class="auu-page2__nav"
      title="详情"
      left-arrow
      @click-left="auUtils.goback"
    ></van-nav-bar>
    <div class="auu-article2">
      <div class="auu-article2__title">{{ title }}</div>
      <div class="auu-article2__t_prefix">
        <span>{{ source }}</span>
        <span>{{ time }}</span>
      </div>

      <!-- <div class="auu-article-editor" v-html="content"></div> -->
      <div class="auu-article-editor">
        <div class="ql-editor" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueQuillEditor from 'vue-quill-editor'
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {},
  data() {
    return {
      id: "", // 文章id
      title: "",
      source: "",
      time: "",
      content: "",
    };
  },
  created() {
    console.log("article:");
    console.log("route:", this.$route);
    this.id = this.$route.query.id;
    this.reqDetail();
  },
  mounted() {},
  activated() {},
  methods: {
    /**
     * @description: 查询文章详细
     * @param {type}
     * @return:
     */
    reqDetail() {
      this.axios
        .doPost({
          url: "all",
          loading: true, // 是否显示加载中，默认false
          // toastFail:false,// 请求出错时是否自动弹出提示，默认true
          data: {
            invokeMethod: "checkModuleInfoById",
            id: this.id,
          },
        })
        .then((res) => {
          console.log("res:", res);
          let data = res.data;

          this.content = data.content;
          this.title = data.title;
          // this.source=data.sourceName
          this.time = data.updateTime || data.createTime;
        })
        .catch((error) => {});
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
</style>
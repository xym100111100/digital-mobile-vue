<!--
 * @Author: your name
 * @Date: 2020-04-17 14:35:58
 * @LastEditTime: 2020-05-18 16:08:23
 * @LastEditors: Please set LastEditors
 * @Description: 列表组件
 * @FilePath: \tengzhou-cloud-app\src\components\list.vue
 -->

<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="auu_border--top">
    <!-- 暂无数据图片 -->
    <div class="auu-nodata" v-if="!list.length&&finished&&!error">
      <img :src="require('assets/images/no_data.png')" class="auu-nodata__img" />
      <div class="auu-nodata__label">{{nodataText}}</div>
    </div>

    <!-- 列表循环 -->
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="list.length?finishedText:''"
      :error.sync="error"
      :error-text="errorText"
      @load="onLoad"
    >
      <slot :row="item" :$index="index" v-for="(item,index) in list"></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
export default {
  components: {},
  props: {
    finishedText: {
      type: String,
      default: "没有更多了",
    },
    errorText: {
      type: String,
      default: "请求失败，点击重新加载",
    },
    nodataText: {
      type: String,
      default: "暂无数据~",
    },

    // 请求参数
    postData: {
      type: Object,
    },

    url: {
      type: String,
      default: "all",
    },

    // 是否是静态json
    isStatic: {
      type: Boolean,
      default: false,
    },

    // ajax请求过程中是否loading
    ajaxLoading: {
      type: Boolean,
      default: false,
    },

    // 请求出错时是否自动弹出提示，默认true
    toastFail: {
      type: Boolean,
      default: true,
    },

    // 筛选ajax返回的数据
    onFilterData: {
      type: Function,
      default(res) {
        return res;
      },
    },

    // 成功回调
    onSuccess: {
      type: Function,
    },

    // 失败回调
    onError: {
      type: Function,
    },
  },
  data() {
    return {
      list: [],
      loading: false, // 是否在加载中
      finished: false, // 是否全部加载完毕（没有更多了）
      refreshing: false, // 下拉刷新，是否加载中
      error: false, // 是否请求出错
      page: 0, // 当前已加载的页数
    };
  },
  computed: {
    _postData() {
      return Object.assign(
        {
          invokeMethod: "",
          rows: 10, //默认每页10条
        },
        this.postData
      );
    },
  },
  mounted() {},
  methods: {
    /**
     * @description: 滚动到底部加载
     * @param {}
     * @return:
     */
    onLoad() {},

    /**
     * @description: 下拉刷新
     * @param {type}
     * @return:
     */

    onRefresh() {},

    /**
     * @description: 请求后台 列表数据
     * @param {number} page 页数
     * @return:
     */
    reqList(page) {
      let obj = this;

      // 设置请求未出错
      obj.error = false;
      // console.log("列表0 请求页数:", page);
      let postData = this._postData;
      postData.page = page;

      this.axios
        .doPost({
          isStatic: this.isStatic, // 是否是静态json
          url: this.url,
          loading: this.ajaxLoading, // 是否显示加载中，默认false
          toastFail: this.toastFail, // 请求出错时是否自动弹出提示，默认true
          data: postData,
        })
        .then((res) => {
          // 如果筛选方法存在
          res = this.onFilterData(res);

          let data = res.data;
          console.log("成功:");
          console.log("res:", res);

          // 如果是下拉刷新，则设置下拉刷新已完成,并清空列表
          if (obj.refreshing) {
            obj.list = [];
            obj.refreshing = false;
          }

          // 添加列表数据
          (data.results || []).forEach((item) => obj.list.push(item));

          // 设置加载完毕
          obj.loading = false;

          // 设置当前页
          obj.page = data.page; // data.page是第n页的时候
          // obj.page = parseInt(data.page / data.rows) + 1; // data.page是第n条数据的时候，比如第一页是0，第2页是10，第3页是20

          // 如果已经是最后一页，设置加载完毕

          // console.log("maxPage:", Math.ceil(data.total / data.rows));
          // console.log("page:", obj.page);
          if (obj.page >= Math.ceil(data.total / data.rows)) {
            obj.finished = true;
          }

          this.onSuccess && this.onSuccess(res);
        })
        .catch((error) => {
          // res.status不为0 或者 404等都走catch
          // console.log("失败:");
          // console.log("error:", error);
          // this.$toast.fail(error.msg||error.respDesc||error.errorMessage); // 手动弹出错误提示

          // 请求错误
          obj.error = true;
          // 设置加载完毕
          obj.loading = false;

          if (obj.refreshing) {
            obj.refreshing = false;
          }

          this.onError && this.onError(error);
        });
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
</style>
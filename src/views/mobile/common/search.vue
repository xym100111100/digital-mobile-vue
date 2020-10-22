<!--
 * @Author: your name
 * @Date: 2020-03-27 15:03:34
 * @LastEditTime: 2020-05-12 09:39:15
 * @LastEditors: Please set LastEditors
 * @Description:  搜索
 * @FilePath: \smart-app\src\views\mobile\common\search.vue
 -->
 
<template>
  <div class="auu_h100p auu-bg-main">
    <van-nav-bar class="auu-page2__nav" title="搜索" left-arrow @click-left="auUtils.goback">
      <div class="auu-home-head__left" slot="right">
        <span class="van-dropdown-menu__title" @click="villages.visible=true">{{villages.name}}</span>
      </div>
    </van-nav-bar>

    <!-- 搜索框 -->
    <van-search
      class="auu-van-search-1"
      v-model="searchValue"
      show-action
      placeholder="请输入关键词"
      @search="onHandelSearch"
    >
      <template #left-icon>
        <span></span>
      </template>
      <template #action>
        <van-button type="info" size="small" @click="onHandelSearch">
          <van-icon name="search" />搜索
        </van-button>
      </template>
    </van-search>
    <!-- 搜索框 样式2 -->
    <!-- <van-search
      class="auu-van-search-1"
      v-model="searchValue"
      show-action
      placeholder="请输入关键词"
      @search="onHandelSearch"
    >
      <template #action>
        <div class="span auu-word auu_pdlr5"  @click="onHandelSearch">搜索</div>
      </template>
    </van-search> -->

    <!-- 热门搜索 -->
    <div class="auu-bg-white" v-show="active==='popular'">
      <div class="auu-title2 auu_pdlr12">热门搜索</div>
      <div class="auu-tag-wrapper auu_pt0">
        <van-row gutter="10">
          <van-col span="8"  :key="index" v-for="(item,index) in popularSearch">
            <div class="auu-tag auu-tag--info" @click="onSearchPopular(item)">{{item}}</div>
          </van-col>
        </van-row>
      </div>
    </div>

    <!-- 搜索结果列表 -->
    <van-pull-refresh
      v-model="listObj.refreshing"
      @refresh="onRefresh"
      v-show="active==='searchResult'"
    >
      <van-list
        v-model="listObj.loading"
        :finished="listObj.finished"
        :finished-text="listObj.finishedText"
        :error.sync="listObj.error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <div class="auu-bg-main">
          <div v-for="(item,index) in listObj.list" :key="index" class="auu-list2">
            <div class="auu-list2__title" @click="$router.push(item.url)">{{item.title}}</div>
            <div class="auu-list2__main">
              <van-row gutter="8">
                <van-col span="24" class="auu-list2__label">决定机构：{{item.organization}}</van-col>
                <van-col span="12" class="auu-list2__label">法定办结：{{item.statutory}}</van-col>
                <van-col span="12" class="auu-list2__label auu_tr">承诺办结：{{item.promise}}</van-col>
                <van-col span="24" class="auu-list2__label">咨询方式：{{item.consultationMethod}}</van-col>
              </van-row>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>

    <!-- 选择乡镇弹出框 -->
    <villages :visible.sync="villages.visible" @onSelect="onSelectVillages" autoSelect="first"></villages>
  </div>
</template>

<script>
import villages from "components/villages.vue"; // 选择乡镇

export default {
  components: {
    villages
  },
  data() {
    return {
      // 搜索关键词
      searchValue: "",

      active: "popular", // 显示 热门搜索（popular） 还是 搜索结果 （searchResult）

      // 热门搜索
      popularSearch: [
        "操作证考核",
        "换证",
        "办事指南",
        "公积金",
        "操作证复审",
        "就业",
        "证书"
      ],

      //乡镇
      villages: {
        visible: false, //是否显示乡镇选择框
        name: "", // 当前选择的乡镇名
        id: "" // 当前选择的乡镇id
      },

      // 搜索结果列表
      listObj: {
        list: [],
        loading: false, // 是否在加载中
        finished: true, // 是否全部加载完毕（没有更多了）=======刚进入页面，默认完成（即不自动加载）
        finishedText: "", // 完成后的提示文字，默认空
        refreshing: false, // 下拉刷新，是否加载中
        error: false, // 是否请求出错
        page: 0 // 当前已加载的页数
      }
    };
  },
  created() {},
  mounted() {
    let searchValue = this.$route.params.searchValue;
    this.searchValue =
      typeof searchValue === "string" ? searchValue.trim() : "";

    // 如果有值，执行搜索
    this.searchValue && this.query();
  },
  activated() {},
  methods: {
    /**
     * @description: 重置
     * @param {type}
     * @return:
     */
    reset() {
      // 显示热门搜索
      this.active = "popular";

      // 重置搜索结果列表
      this.listObj.list = [];
      this.listObj.loading = false;
      this.listObj.finished = true;
      this.listObj.finishedText = "";
      this.listObj.refreshing = false;
      this.listObj.error = false;
      this.listObj.page = 0;
    },

    /**
     * @description: 执行搜索
     * @param {type}
     * @return:
     */
    onHandelSearch() {
      if (this.searchValue.trim() === "") {
        // 如果是空串，则重置
        this.reset();
      } else {
        // 如果不是空串，执行搜索
        this.query();
      }
    },

    /**
     * @description: 搜索热门标签
     * @param {type}
     * @return:
     */
    onSearchPopular(item) {
      this.searchValue = item;
      this.onHandelSearch();
    },

    /**
     * @description: 选择乡镇 回调
     * @param {Object}
     * @return:
     */
    onSelectVillages(item) {
      this.villages.name = item.label;
      this.villages.id = item.value;
    },

    /**
     * @description: 从第一页开始查询后台
     * @param {type}
     * @return:
     */
    query() {
      // 显示搜索结果列表
      this.active = "searchResult";

      this.listObj.refreshing = true;
      this.onRefresh();
    },

    /**
     * @description: 滚动到底部加载
     * @param {}
     * @return:
     */
    onLoad() {
      this.reqList(this.listObj.page + 1);
    },

    /**
     * @description: 下拉刷新
     * @param {type}
     * @return:
     */
    onRefresh() {
      let obj = this.listObj;

      // 设置列表状态为未完成
      obj.finished = false;

      // 设置列表为加载状态
      obj.loading = true;

      this.reqList(1);
    },

    /**
     * @description: 请求后台 列表数据
     * @param {number} page 页数
     * @return:
     */
    reqList(page) {
      let obj = this.listObj;

      // 设置请求未出错
      obj.error = false;

      console.log("列表0 请求页数:", page);
      let queryParams = {
        page: page,
        searchValue: this.searchValue,
        villageName: this.villages.name,
        villageId: this.villages.id
      };

      console.log("queryParams:", queryParams);
      // 模拟异步请求
      setTimeout(() => {
        // 设置当前页
        obj.page = page;

        // 如果是下拉刷新，则设置下拉刷新已完成,并清空列表
        if (obj.refreshing) {
          obj.list = [];
          obj.refreshing = false;
        }

        // 模拟静态数据
        // for (let i = 0; i < 5; i++) {
        //   obj.list.push(
        //     {
        //       title: "住房公积金缴存登记账户开设",
        //       organization: "南宁住房公积金管理中心",
        //       statutory: "20个工作日",
        //       promise: "20个工作日",
        //       consultationMethod: "0772-5654578",
        //       url: "/workHall/workGuideDetail"
        //     },
        //     {
        //       title: "住房公积金缴存登记账户开设",
        //       organization: "南宁住房公积金管理中心",
        //       statutory: "20个工作日",
        //       promise: "20个工作日",
        //       consultationMethod: "0772-5654578",
        //       url: "/workHall/workGuideDetail"
        //     }
        //   );
        // }

        // 设置加载完毕
        obj.loading = false;

        // 如果已经是最后一页，设置加载完毕
        if (page > 0) {
          obj.finished = true;
          obj.finishedText = "没有更多了";
        }
      }, 1000);
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
</style>
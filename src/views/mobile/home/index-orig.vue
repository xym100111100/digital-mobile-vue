<!--
 * @Author: your name
 * @Date: 2020-03-20 10:45:58
 * @LastEditTime: 2020-05-18 11:27:29
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \smart-app\src\views\mobile\home\index.vue
 -->
<template>
  <div ref="page" class="auu-home">
    <div class="auu-home-head" :style="headObj.style">
      <div class="auu-home-head__left">
        <span
          class="van-dropdown-menu__title"
          @click="headObj.villagesVisible=true"
        >{{headObj.villagesName}}</span>
      </div>
      <div class="auu-home-head__main">
        <van-search v-model="headObj.searchVal" @search="onhandleSearch" placeholder="请输入搜索关键词">
          <template #left-icon>
            <van-icon name="search" @click="onhandleSearch" />
          </template>
        </van-search>
      </div>
      <div class="auu-home-head__prefix">
        <img :src="require('assets/images/scan.png')" class="auu-home-head__img" />
      </div>
      <div class="auu-home-head__prefix">
        <div class="auu-home-head__imgouter auu-badge" @click="$router.push('/mine/myMessage')">
          <div class="auu-badge--dot"></div>
          <img :src="require('assets/images/notice.png')" class="auu-home-head__img" />
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <footerNav :active="0"></footerNav>

    <div class="auu-home__main">
      <div class="auu-home__headbg"></div>

      <!-- 轮播图 -->
      <van-swipe ref="swipe" :autoplay="5000" class="auu-swipe">
        <van-swipe-item v-for="(img, index) in swipeImgs" :key="index">
          <img v-lazy="img" />
        </van-swipe-item>
      </van-swipe>

      <!-- 导航 -->
      <div class="auu-home__nav auu_shadow">
        <div
          class="auu-nav-item auu-nav-item--lg"
          v-for="(item,index) in navData"
          :key="index"
          @click="linkTo(item)"
        >
          <img :src="item.img" class="auu-nav-item__img" />
          <span class="auu-nav-item__label">{{item.name}}</span>
        </div>
      </div>

      <!-- 我的证照 -->
      <div class="auu-home__item">
        <van-cell title="我的证照">
          <template>
            <span @click="$router.push({ path: '/myCertificate' })">更多</span>
          </template>
        </van-cell>
        <div class="auu-home__item-inner">
          <div class="auu-home__cards">
            <div class="auu_dpib">
              <div class="auu-card auu-bg-linear1">
                <div class="auu-card__left">
                  <img
                    :src="require('assets/images/cert_social_insurance.png')"
                    class="auu-card__l_img"
                  />
                </div>
                <div class="auu-card__main">
                  <div class="auu-card__m_title">电子社保卡</div>
                  <div class="auu-card__m_code">—————</div>
                  <div class="auu-card__m_label">个人缴存查询</div>
                </div>
                <div class="auu-card__right">
                  <div class="auu-card__r_btn1" @click="$router.push('/socialSecurityCard')">证件详情</div>
                </div>
              </div>
            </div>
            <div class="auu_dpib">
              <div class="auu-card auu-bg-linear2">
                <div class="auu-card__left">
                  <img :src="require('assets/images/cert_idcard.png')" class="auu-card__l_img" />
                </div>
                <div class="auu-card__main">
                  <div class="auu-card__m_title">居民电子身份证明</div>
                  <div class="auu-card__m_code">—————</div>
                  <div class="auu-card__m_label">身份证办理进度</div>
                </div>
                <div class="auu-card__right">
                  <div class="auu-card__r_btn1" @click="$router.push('/identityCard')">证件详情</div>
                </div>
              </div>
            </div>
            <div class="auu_dpib">
              <div class="auu-card auu-bg-linear3">
                <div class="auu-card__left">
                  <img :src="require('assets/images/cert_driver.png')" class="auu-card__l_img" />
                </div>
                <div class="auu-card__main">
                  <div class="auu-card__m_title">驾驶证电子信息</div>
                  <div class="auu-card__m_code">—————</div>
                  <div class="auu-card__m_label">&nbsp;</div>
                </div>
                <div class="auu-card__right">
                  <div class="auu-card__r_btn1" @click="$router.push('/driverLicense')">证件详情</div>
                </div>
              </div>
            </div>
            <div class="auu_dpib">
              <div class="auu-card auu-bg-linear4">
                <div class="auu-card__left">
                  <img :src="require('assets/images/cert_driver2.png')" class="auu-card__l_img" />
                </div>
                <div class="auu-card__main">
                  <div class="auu-card__m_title">行驶证电子信息</div>
                  <div class="auu-card__m_code">—————</div>
                  <div class="auu-card__m_label">&nbsp;</div>
                </div>
                <div class="auu-card__right">
                  <div class="auu-card__r_btn1" @click="$router.push('/drivingLicense')">证件详情</div>
                </div>
              </div>
            </div>
            <div class="auu_dpib">
              <div class="auu-card auu-bg-linear5">
                <div class="auu-card__left">
                  <img
                    :src="require('assets/images/cert_accumulation.png')"
                    class="auu-card__l_img"
                  />
                </div>
                <div class="auu-card__main">
                  <div class="auu-card__m_title">公积金卡</div>
                  <div class="auu-card__m_code">—————</div>
                  <div class="auu-card__m_label">&nbsp;</div>
                </div>
                <div class="auu-card__right">
                  <div class="auu-card__r_btn1" @click="$router.push('/accumulation')">证件详情</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 政务公开 -->
      <div class="auu-home__item">
        <van-cell title="政务公开">
          <template>
            <span @click="$router.push('/govAffairsPublic')">更多</span>
          </template>
        </van-cell>
        <div class="auu-home__item-inner">
          <div
            class="auu-text-line"
            v-for="(item,index) in govAffairsData"
            :key="index"
            @click="linkTo(item)"
          >{{item.title}}</div>
        </div>
      </div>

      <!-- 疫情专区 -->
      <div class="auu-home__item">
        <van-cell title="疫情专区"></van-cell>
        <div class="auu-home__item-inner">
          <van-row gutter="10">
            <van-col
              span="12"
              v-for="(item,index) in epidemicData"
              :key="index"
              @click="linkTo(item)"
            >
              <div class="auu-nav-item2">
                <img :src="item.img" class="auu-nav-item2__img" />
                <span class="auu-nav-item2__label">{{item.name}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <!-- 便民服务 -->
      <div class="auu-home__item auu-home__item--recent">
        <van-cell title="便民服务"></van-cell>
        <div class="auu-home__item-inner">
          <!-- <van-swipe
            :autoplay="0"
            :loop="false"
            class="auu-home__swipe1 auu-vant-swipe--indicator-rect"
          >
            <van-swipe-item>
              <div class="auu_flex_wrap">
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_accumulation.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">公积金</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">社保</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_health_card.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">电子健康卡</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_medical_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">城乡居民医保</span>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="auu_flex_wrap">
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_accumulation.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">公积金2</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">社保2</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_health_card.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">电子健康卡2</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_medical_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">城乡居民医保2</span>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="auu_flex_wrap">
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_accumulation.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">公积金3</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">社保3</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_health_card.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">电子健康卡3</span>
                </div>
                <div class="auu-nav-item auu-nav-item--large">
                  <img
                    :src="require('assets/images/recent_medical_insurance.png')"
                    class="auu-nav-item__img"
                  />
                  <span class="auu-nav-item__label">城乡居民医保3</span>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>-->

          <van-row gutter="10">
            <van-col span="12" v-for="(item,index) in convData" :key="index" @click="linkTo(item)">
              <div class="auu-nav-item2">
                <img :src="item.img" class="auu-nav-item2__img" />
                <span class="auu-nav-item2__label2">
                  {{item.name}}
                  <span class="auu-nav-item2__prefix">{{item.label}}</span>
                </span>
              </div>
            </van-col>
          </van-row>

          <van-swipe
            :autoplay="0"
            :loop="false"
            class="auu-home__swipe2 auu-vant-swipe--indicator-rect"
          >
            <van-swipe-item v-for="(item,index) in convSwipe" :key="index">
              <img v-lazy="item.img" @click="linkTo(item)" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <!-- 电子税务局 -->
      <div class="auu-home__item">
        <van-cell title="电子税务局"></van-cell>
        <div class="auu-home__item-inner">
          <van-row gutter="10">
            <van-col span="12" v-for="(item,index) in taxData" :key="index" @click="linkTo(item)">
              <div class="auu-nav-item2">
                <img :src="item.img" class="auu-nav-item2__img" />
                <span class="auu-nav-item2__label">{{item.name}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <!-- 公积金 -->
      <div class="auu-home__item">
        <van-cell title="公积金"></van-cell>
        <div class="auu-home__item-inner">
          <van-row gutter="10">
            <van-col
              span="12"
              v-for="(item,index) in accumulationData"
              :key="index"
              @click="linkTo(item)"
            >
              <div class="auu-nav-item2">
                <img :src="item.img" class="auu-nav-item2__img" />
                <span class="auu-nav-item2__label">{{item.name}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <!-- 证件办理 -->
      <div class="auu-home__item">
        <van-cell title="证件办理"></van-cell>
        <div class="auu-home__item-inner">
          <van-row gutter="10">
            <van-col span="12" v-for="(item,index) in certData" :key="index" @click="linkTo(item)">
              <div class="auu-nav-item2">
                <img :src="item.img" class="auu-nav-item2__img" />
                <span class="auu-nav-item2__label">{{item.name}}</span>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>

    <!-- 选择乡镇弹出框 -->
    <villages
      :visible.sync="headObj.villagesVisible"
      @onSelect="onSelectVillages"
      autoSelect="first"
    ></villages>
  </div>
</template>

<script>
import footerNav from "components/footerNav.vue"; // 底部导航
import villages from "components/villages.vue"; // 选择乡镇
export default {
  components: {
    footerNav,
    villages
  },
  data() {
    return {
      //头部
      headObj: {
        searchVal: "", // 搜索框的值
        villagesVisible: false, //是否显示乡镇选择框
        villagesName: "", // 当前选择的乡镇名
        villagesId: "", // 当前选择的乡镇id

        style: {
          background: "rgba(55, 135, 241, 0)"
        }
      },

      // 轮播图
      swipeImgs: [
        require("assets/images/swipe_01.png"),
        require("assets/images/swipe_02.jpg"),
        require("assets/images/swipe_03.jpg"),
        require("assets/images/swipe_04.jpg")
      ],

      // 导航
      navData: [
        {
          img: require("assets/images/nav_work.png"),
          name: "办事大厅",
          url: "/workHall", // 内部链接
          // url:'/home', // 内部链接
          outerUrl: "" // 外部链接
          // outerUrl: "https://www.baidu.com/"
        },
        {
          img: require("assets/images/nav_query_work.png"),
          name: "办件查询",
          url: "/myWork/queryWork" // 内部链接
        },
        {
          img: require("assets/images/nav_advisory.png"),
          name: "咨询投诉",
          url: "/consultingComplaints"
        },
        {
          img: require("assets/images/nav_12315.png"),
          name: "12345"
        }
      ],

      // 政务公开
      govAffairsData: [
        // {
        //   title: "藤县大数据发展局暂停各类公共资源现场交易活动",
        //   url: "/govAffairsPublic/detail"
        // },
        // {
        //   title: "藤县召开2020年政法工作电视电话会议",
        //   url: "/govAffairsPublic/detail"
        // }
      ],

      // 疫情专区
      epidemicData: [
        {
          img: require("assets/images/epidemic_platform.png"),
          name: "广西健康码管理平台"
        },
        {
          img: require("assets/images/epidemic_ctrl_collect.png"),
          name: "防控线索征集"
        },
        {
          img: require("assets/images/epidemic_help_collect.png"),
          name: "感染者求助征集"
        },
        {
          img: require("assets/images/epidemic_ctrl.png"),
          name: "疫情防控"
        },
        {
          img: require("assets/images/epidemic_people_query.png"),
          name: "广西密切人员查询"
        }
      ],
      // 便民服务
      convData: [
        {
          img: require("assets/images/conv_accumulation.png"),
          name: "公积金",
          label: "公积金查询 | 办事咨讯"
        },
        {
          img: require("assets/images/conv_social_security.png"),
          name: "社保",
          label: "电子社保卡 | 社保查询"
        },
        {
          img: require("assets/images/conv_medical_insurance.png"),
          name: "医保",
          label: "医保查询"
        },
        {
          img: require("assets/images/conv_payment.png"),
          name: "生活缴费",
          label: "水费 | 电费 | 天燃气"
        },
        {
          img: require("assets/images/conv_recharge.png"),
          name: "充值中心",
          label: "话费充值"
        },
        {
          img: require("assets/images/conv_traffic.png"),
          name: "交通违法处理",
          label: "交通处理"
        }
      ],

      // 便民服务 轮播
      convSwipe: [
        {
          img: require("assets/images/recent_swipe_01.png")
        },
        {
          img: require("assets/images/recent_swipe_02.png")
        },
        {
          img: require("assets/images/recent_swipe_03.png")
        }
      ],

      // 电子税务局
      taxData: [
        {
          img: require("assets/images/tax_taxpayer_info.png"),
          name: "纳税人信息"
        },
        {
          img: require("assets/images/tax_added1.png"),
          name: "增值税小规模纳税…"
        },
        {
          img: require("assets/images/tax_bill.png"),
          name: "发票领用"
        },
        {
          img: require("assets/images/tax_added2.png"),
          name: "增值税一般纳税人…"
        },
        {
          img: require("assets/images/tax_account.png"),
          name: "存款账户账号报告"
        },
        {
          img: require("assets/images/tax_apply.png"),
          name: "文化事业建设费申报"
        }
      ],

      // 公积金
      accumulationData: [
        {
          img: require("assets/images/accumulation_payment_query.png"),
          name: "个人缴存查询"
        }
      ],

      // 证件办理
      certData: [
        {
          img: require("assets/images/certificate_progress.png"),
          name: "身份证办理进度"
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.reqDetail();

   this.bindEvents()
  },
  activated() {},
  beforeDestroy() {
    this.unbindEvents()
  },
  methods: {
    /**
     * @description:  绑定事件
     * @param {type} params
     * @return: {void}
     */
    bindEvents: function() {
      this.$el.addEventListener("scroll", this.handleScroll, false);
    },

    /**
     * @description:  解绑事件
     * @param {type} params
     * @return: {void}
     */
    unbindEvents: function() {
      this.$el.removeEventListener("scroll", this.handleScroll,);
    },

    /**
     * @description: 屏幕滚动触发事件
     * @param {type}
     * @return:
     */
    handleScroll(e) {
      // 设置头部的透明度
      let scrollTop = e.target.scrollTop;
      let winW = document.body.clientWidth; // 屏幕宽度
      let h = (38 * winW) / 375;
      let opacity = (scrollTop - h) / h;
      opacity = opacity < 1 ? opacity : 1;
      this.headObj.style.background = `rgba(55, 135, 241, ${opacity})`;
    },

    /**
     * @description: 选择乡镇 回调
     * @param {Object}
     * @return:
     */
    onSelectVillages(item) {
      this.headObj.villagesName = item.label;
      this.headObj.villagesId = item.value;
    },

    /**
     * @description: 跳转到页面
     * @param {type}
     * @return:
     */
    linkTo(item) {
      if (item.url) {
        this.$router.push(item.url);
      } else if (item.outerUrl) {
        window.location.href = item.outerUrl;
      } else {
        // this.$toast("正在建设中...");
        this.$router.push("/notFound");
      }
    },

    /**
     * @description: 搜索
     * @param {type}
     * @return:
     */

    onhandleSearch() {
      this.$router.push({
        name: "search",
        params: {
          searchValue: this.headObj.searchVal
        }
      });
    },

    /**
     * @description: 请求后台获取数据
     * @param {type}
     * @return:
     */
    reqDetail() {
      let userData = this.auUtils.getUserData(); // 当前用户信息
      console.log(" userData :", userData);

      let obj = {
        // userId: userData.id,
        // invokeMethod: "selectTaskToDoByDataGrid2",
        // page: 1,
        // size: 10
      };
      this.axios
        .doPost({
          isStatic: true, // 是否是静态json
          url: "home",
          loading: true, // 是否显示加载中，默认false
          // toastFail:false,// 请求出错时是否自动弹出提示，默认true
          data: obj
        })
        .then(res => {
          let data = res.data;
          console.log("成功:");
          console.log("res:", res);

          // 政务公开
          this.govAffairsData = data.govAffairsData;

          // res.status为0才会走then方法
          // 返回格式
          // res = { status: 0, msg: "获取我的待办数据成功", data: {} };

          // this.$toast.clear();  // 手动清除loading
          // this.$toast.success(res.msg); // 成功提示（查询不需要成功提示，添加、删除、修改需要）
        })
        .catch(error => {
          // res.status不为0 或者 404等都走catch
          console.log("失败:");

          console.log("error:", error);
          // this.$toast.clear(); // 手动清除loading
          // this.$toast.fail(error.msg||error.respDesc||error.errorMessage); // 手动弹出错误提示

          // 后台报错返回
          // error = {
          //   respDesc: "服务调用异常，请联系管理员！",
          //   respCode: "9999",
          //   msg: ''
          // };

          // 404 返回
          // error = {
          //   errorMessage: "网络开小差了~~~请您稍后刷新~~~",
          //   errorCode: 404
          // };
        });
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.auu-home {
  overflow: auto;
}
</style>
<!--
 * @Author: your name
 * @Date: 2020-04-07 18:26:27
 * @LastEditTime: 2020-04-08 11:19:27
 * @LastEditors: Please set LastEditors
 * @Description: 启动页
 * @FilePath: \tengzhou-cloud-app\src\views\mobile\common\startup.vue
 -->
 
 
<template>
  <!-- 轮播图 -->
  <van-swipe :autoplay="0" :loop="false" class="s-swipe">
    <van-swipe-item v-for="(img, index) in swipeImgs" :key="index">
      <img v-lazy="img" />
      <van-button
        v-if="index===swipeImgs.length-1"
        plain
        round
        size="small"
        type="info"
        class="s-swipe__btn"
        :class="btnClass"
        @click="$router.push('/home')"
      >立即体验</van-button>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // 轮播图
      swipeImgs: [],

      // 按钮class 控制宽屏和竖屏下的位置
      btnClass: "",

      // 不同规格图片集合
      imgs: {
        _640_960: [
          require("assets/images/startup/640_960/01.png"),
          require("assets/images/startup/640_960/02.png"),
          require("assets/images/startup/640_960/03.png"),
          require("assets/images/startup/640_960/04.png")
        ],
        _640_1136: [
          require("assets/images/startup/640_1136/01.png"),
          require("assets/images/startup/640_1136/02.png"),
          require("assets/images/startup/640_1136/03.png"),
          require("assets/images/startup/640_1136/04.png")
        ],
        _750_1334: [
          require("assets/images/startup/750_1334/01.png"),
          require("assets/images/startup/750_1334/02.png"),
          require("assets/images/startup/750_1334/03.png"),
          require("assets/images/startup/750_1334/04.png")
        ],
        _1242_2208: [
          require("assets/images/startup/1242_2208/01.png"),
          require("assets/images/startup/1242_2208/02.png"),
          require("assets/images/startup/1242_2208/03.png"),
          require("assets/images/startup/1242_2208/04.png")
        ],
        _2208_1242: [
          require("assets/images/startup/2208_1242/01.png"),
          require("assets/images/startup/2208_1242/02.png"),
          require("assets/images/startup/2208_1242/03.png"),
          require("assets/images/startup/2208_1242/04.png")
        ]
      },

      // 规格信息
      specs: {
        _640_960: {
          width: 640,
          height: 960,
          scale: 640 / 960
        },
        _640_1136: {
          width: 640,
          height: 1136,
          scale: 640 / 1136
        },
        _750_1334: {
          width: 750,
          height: 1334,
          scale: 750 / 1334
        },
        _1242_2208: {
          width: 1242,
          height: 2208,
          scale: 1242 / 2208
        },
        _2208_1242: {
          width: 2208,
          height: 1242,
          scale: 2208 / 1242
        }
      }
    };
  },
  computed: {},
  created() {
    this.chooseImgs();
  },

  activated() {},
  mounted() {
    this.bindEvents();
  },
  methods: {
    /**
     * @description: 根据屏幕宽高选择图片
     * @param {type}
     * @return:
     */
    chooseImgs() {
      // console.log("clientWidth:", document.body.clientWidth);
      // console.log("clientHeight:", document.body.clientHeight);
      let w = document.body.clientWidth;
      let h = document.body.clientHeight;
      let scale = w / h;
      // console.log("scale:", scale);

      this.btnClass = scale < 1 ? "s-btn--1" : "s-btn--2";

      // console.log("this.specs:", this.specs.scale);
      let entries = Object.entries(this.specs); // es6 遍历对象的键名和键值 可直接打印 // [[a,1] [b,2]]  //区别于arr.entries

      let obj = {};
      for (const iterator of entries) {
        // console.log("iterator:", iterator);
        // console.log("iterator.scale:", iterator[1].scale);
        if (scale > 1 && iterator[1].scale > 1) {
          // 如果是宽屏，只有一种选择
          obj.prop = iterator[0];
          obj.scale = iterator[1].scale;
        } else {
          // 如果是竖屏

          // 图片宽度大于屏幕宽度
          if (iterator[1].width > w) {
            if (obj.scale) {
              // 比例存在，比较两个比例的和屏幕宽高比那个更接近

              // 如果值更小则替换
              if (
                Math.abs(obj.scale - scale) >
                Math.abs(iterator[1].scale - scale)
              ) {
                obj.prop = iterator[0];
                obj.scale = iterator[1].scale;
              }
            } else {
              // 比例不存在
              obj.scale = iterator[1].scale;
            }
          }
        }
      }

      // 如果obj没有值，说明设备太大，选择最大规格的图片（宽屏）
      if (!obj.prop) {
        obj.prop = "_1242_2208";
      }
      console.log(obj.prop);

      if (this.imgs[obj.prop]) {
        this.swipeImgs = this.imgs[obj.prop];
      }
    },

    /**
     * @description: 绑定事件
     * @param {type}
     * @return:
     */

    bindEvents() {
      let debounce = this.auUtils.debounce();
      window.addEventListener("resize", e => {
        debounce(this.chooseImgs, 500);
      });
    }
  }
};
</script>
 
<style lang="scss" scoped>
.s-swipe {
  width: 100%;
  height: 100%;
  /deep/ .van-swipe-item {
    width: 100%;
    height: 100%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  /deep/ .van-swipe__indicator--active {
    width: 12px;
    border-radius: 3px;
  }

  /deep/ .van-swipe-item {
    position: relative;
  }
  &__btn {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2em;
  }
}

// 竖屏下的按钮位置
.s-btn--1 {
  bottom: 40px;
}
// 横屏下的按钮位置
.s-btn--2 {
  bottom: 25px;
}
</style>
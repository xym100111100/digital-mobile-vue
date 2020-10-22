/*
 * @Author: your name
 * @Date: 2020-03-20 17:54:39
 * @LastEditTime: 2020-05-25 09:29:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \smart-app\src\utils\au.utils.js
 */


const auUtils = {
  /**
     * @description: 返回上一页
     * @param {type} 
     * @return: 
     */
  goback() {
    window.history.go(-1)
  },

  /**
   * @description: 从sessionStorage里面获取登录信息
   * @param {type} 
   * @return: 
   */
  getUserData() {
    let userData;
    try {
      userData = JSON.parse(sessionStorage.getItem("userData"));
    } catch (e) {
      userData = {};
    }
    userData = userData || {}
    return userData;
  },

  /**
 * @description: 更新用户信息
 * @param {type} 
 * @return: 
 */
  updateUserData(axios) {
    const userData = auUtils.getUserData()
    return new Promise((resolve, reject) => {
      let obj = {
        id: userData.id,
      }
      obj.invokeMethod = userData.userName ? 'getUserInfo' : 'getLegalInfo'

      axios
        .doPost({
          url: "all",
          loading: true, // 是否显示加载中，默认false
          data: obj
        })
        .then(res => {
          let data = res.data;
          sessionStorage.setItem("userData", JSON.stringify(data));
          localStorage.setItem("userData", JSON.stringify(data));
          resolve(res)
        })
        .catch(error => {
          reject()
        });
    })

  },

  /**
   * @description: 深拷贝对象
   * @param {Object|Array} param 
   * @return: 
   */
  clone(param) {
    return JSON.parse(JSON.stringify(param));
  },

  /**
        * @description: 防抖
        * @return:{Function}
        * @param {Function} return.method
        * @param {number} return.delay 清除定时器的时间间隔
        * @example: var fn=debounce(); window.onresize=function(){fn(method,delay);};
        */
  'debounce': function () {
    var timer = null;

    return function (method, delay) {
      var context = this;
      var args = arguments;

      clearTimeout(timer);
      timer = setTimeout(function () {
        method.apply(context, args);
      }, delay);
    };
  },

  /**
   * @description: 固定时间必须执行
   * @return:{Function}
   * @param {Function} return.method
   * @param {number} return.delay 清除定时器的时间间隔
   * @param {number} return.duration 固定执行的时间间隔
   * @example: var fn=throttle(); window.onresize=function(){fn(method,delay,duration);};
   */
  'throttle': function () {
    var timer = null;
    var begin = new Date();

    return function (method, delay, duration) {
      var context = this;
      var args = arguments;
      var current = new Date();

      clearTimeout(timer);
      if (current - begin >= duration) {
        method.apply(context, args);
        begin = current;
      } else {
        timer = setTimeout(function () {
          method.apply(context, args);
        }, delay);
      }
    };
  },


  /**
   * @description: 格式化日期
   * @param {Date} 日期对象
   * @param {string=} formater 格式化模板
   * @return:
   */
  'formatDate': function (date, formater) {
    formater = formater || 'yyyy-MM-dd';
    date = date instanceof Date ? date : new Date(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var fullMonth = m < 10 ? '0' + m : m;
    var d = date.getDate();
    var fullDate = d < 10 ? '0' + d : d;
    var h = date.getHours();
    var fullHours = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    var fullMinute = minute < 10 ? '0' + minute : minute;
    var second = date.getSeconds();
    var fullSecond = second < 10 ? '0' + second : second;
    var weekdayIndex = date.getDay();// 获取星期
    var weekday = ['日', '一', '二', '三', '四', '五', '六'];
    var curWeek = weekday[weekdayIndex];
    var result = formater;

    if (/yyyy/g.test(result)) {
      result = result.replace(/yyyy/g, y);
    }
    if (/MM/g.test(result)) {
      result = result.replace(/MM/g, fullMonth);
    } else {
      result = result.replace(/M/g, m);
    }
    if (/dd/g.test(result)) {
      result = result.replace(/dd/g, fullDate);
    } else {
      result = result.replace(/d/g, d);
    }
    if (/HH/g.test(result)) {
      result = result.replace(/HH/g, fullHours);
    } else {
      result = result.replace(/H/g, h);
    }
    if (/mm/g.test(result)) {
      result = result.replace(/mm/g, fullMinute);
    } else {
      result = result.replace(/m/g, minute);
    }
    if (/ss/g.test(result)) {
      result = result.replace(/ss/g, fullSecond);
    } else {
      result = result.replace(/s/g, second);
    }
    if (/w/g.test(result)) {
      result = result.replace(/w/g, curWeek);
    }
    return result;
  },

  /**
     * @description: 格式化身份证号码/名称
     * @param {string} param  //传入的字符串
     * @param {number} number //保留显示的数量
     * @return:
     */
  codeFormat(param, number) {
    let num = param.length - number
    let code = param.slice(num)
    let n = '*'
    for (let i = 0; i < num - 1; i++) {
      n = n + '*'
    }
    return n + code
  }
};

export default auUtils;

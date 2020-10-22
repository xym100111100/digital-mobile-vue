/* date: 2018/07/19 16:45:49 author: guochao content: 服务请求 加密 解密 email: guochao@yinyin360.com */

/*
插件自带的验证规则：
after{target} - 比target要大的一个合法日期，格式(DD/MM/YYYY)
alpha - 只包含英文字符
alpha_dash - 可以包含英文、数字、下划线、破折号
alpha_num - 可以包含英文和数字
before:{target} - 和after相反
between:{min},{max} - 在min和max之间的数字
confirmed:{target} - 必须和target一样
date_between:{min,max} - 日期在min和max之间
date_format:{format} - 合法的format格式化日期
decimal:{decimals?} - 数字，而且是decimals进制
digits:{length} - 长度为length的数字
dimensions:{width},{height} - 符合宽高规定的图片
email - 邮箱
ext:[extensions] - 后缀名
image - 图片
in:[list] - 包含在数组list内的值
ip - ipv4地址
max:{length} - 最大长度为length的字符
mimes:[list] - 文件类型
min - max相反
mot_in - in相反
numeric - 只允许数字
regex:{pattern} - 值必须符合正则pattern
required - 不解释
size:{kb} - 文件大小不超过
url:{domain?} - (指定域名的)url
 */

import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

//配置
const config = {
  delay: 10,
  events: 'blur',
  locale: 'zh_CN',
  errorBagName: 'errors',
  strict: true
}
Vue.use(VeeValidate, config);
// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => "请输入" + field,
      confirmed: (field) => '两次输入的内容不一致',
      phone: () => '请输入正确的手机号',
      smsCode: () => '请输入6位数字验证码',
      postalCode: () => '请输入6位数字邮政编码',
      idCard: () => '请输入正确的身份证号码',
      password: () => '请输入正确格式的密码',
      name: () => '请输入姓名正确格式',
      company: () => '请输入单位',
      depa: () => '请输入科室',
      position: () => '请输入职位',
      title: () => '请输入标题',
      count: () => '请输入内容',
      email: () => '请输入正确邮箱号',
      min: (field, min) => `${field}长度不能小于${min}`,
      max: (field, max) => `${field}长度不能大于${max}`,
     
      
    },

    // 由于校验规则只能全局设置，特殊的校验要规范命名，避免重复
        // <!-- data-vv-as="账号hhh" 优先级更高 -->

    // required的中文提示
    attributes: {
      name: '姓名',
      phone: '手机号',
      cardNum: '卡号',
      smsCode: '验证码',
      company:'单位',
      depa:'科室',
      position:'职位',
      title:'标题',
      count:'内容',
      email:"邮箱",
      // address: '收货地区',
      // detailAddr: '详细地址',
      // linkMan: '收货人姓名',
      postalCode: '邮政编码',
      idCard: '身份证号',
      birthday: '生日',
      password:'密码',

      // 注册页面
      register_account: "账号",

    }
  }
};
Validator.localize(dictionary);
//扩展自定义的验证
//手机号
Validator.extend('phone', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(value)
  }
});
//邮箱
Validator.extend('email', {
  messages: {
    zh_CN: field => '请输入正确的'+ field
  },
  validate: value => {
    return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)
  }
});
/*姓名*/
Validator.extend('name', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,20}$/.test(value)
  }
});
/*标题*/
Validator.extend('title', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,20}$/.test(value)
  }
});
/*内容*/
Validator.extend('count', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,200}$/.test(value)
  }
});
/*单位*/
Validator.extend('company', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,20}$/.test(value)
  }
});
/*科室*/
Validator.extend('depa', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,20}$/.test(value)
  }
});
/*职位*/
Validator.extend('position', {
  messages: {
    zh_CN: field => '请输入正确的' + field
  },
  validate: value => {
    return /^[\u4e00-\u9fa5 ]{1,20}$/.test(value)
  }
});
//验证码
Validator.extend('smsCode', {
  messages: {
    zh_CN: field => '请输入6位数字' + field
  },
  validate: value => {
    return /^[0-9]{6}$/.test(value)
  }
})
//邮政编码
Validator.extend('postalCode', {  messages: {
    zh_CN: field => '请输入6位数字' + field
  },
  validate: value => {
    return /^[0-9]{6}$/.test(value)
  }
})
//身份证号
Validator.extend('idCard', {
  messages: {
    zh_CN: field => '请输入6位数字' + field
  },
  validate: value => {
    let reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

    if (value === undefined) {
      value = "";
    }
    if (value.length == 18) {
      let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); // 将前17位加权因子保存在数组里
      let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
      for (var i = 0; i < 17; i++) {
        idCardWiSum += value.substring(i, i + 1) * idCardWi[i];
      }
      let idCardMod = idCardWiSum % 11; // 计算出校验码所在数组的位置
      let idCardLast = value.substring(17); // 得到最后一位身份证号码

      // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return true;
        } else {
          return false;
        }
      } else {
        // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast == idCardY[idCardMod]) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
})
//密码
Validator.extend('password', {
  messages: {
    zh_CN: field => '请输入正确格式的密码'
  },
  validate: value => {
    return !!(value && /[a-zA-Z]/.test(value) && /\d/.test(value)) || !!(value && /[a-zA-Z]/.test(value) && /[^\w\s]/.test(value)) || !!(value && /\d/.test(value) && /[^\w\s]/.test(value));
  }
})

// 注册页面 账号
Validator.extend("register_account", {
  getMessage: field => `账号不等于3`,
  validate: value => {
    return value === "3";
  }
});
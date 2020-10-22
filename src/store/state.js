/*
 * @Author: your name
 * @Date: 2020-04-02 15:21:47
 * @LastEditTime: 2020-05-14 10:38:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tengzhou-cloud-app\src\store\state.js
 */
const state = {
  // 性别option
  sexOptions: [{
    value: "1",
    label: "男"
  }, {
    value: "2",
    label: "女"
  }],

  // 证件类型option
  idCardTypeOptions: [
    {
      value: "1",
      label: "身份证"
    },
    {
      value: "2",
      label: "护照"
    }
  ],

  // 法人类型options
  legalTypeOptions: [
    {
      value: "1",
      label: "企业法人"
    },
    {
      value: "2",
      label: "非企业法人"
    }
  ],

  // 乡镇
  villages: [],

  // 办事部门
  workingDepartment: [],

  // 办事主题
  workingTheme: [],

  // 评分tag
  evaluateTags: [
    {
      label: "非常满意",
      value: "1",
      checked: false
    },
    {
      label: "态度友好",
      value: "2",
      checked: false
    },
    {
      label: "熟悉业务",
      value: "3",
      checked: false
    },
    {
      label: "态度一般",
      value: "4",
      checked: false
    },
    {
      label: "服务一流",
      value: "5",
      checked: false
    },
    {
      label: "面带笑容",
      value: "6",
      checked: false
    }
  ],

  // 收件信息
  receiveInfo:{}




}
export default state

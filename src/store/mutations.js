/*
 * @Author: your name
 * @Date: 2020-04-02 15:21:47
 * @LastEditTime: 2020-05-14 10:38:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tengzhou-cloud-app\src\store\mutations.js
 */

const mutations = {
  
  // 设置乡镇
  SET_VILLAGES: (state, data) => {
    state.villages = data;
  },

  // 设置办事部门
  SET_WORKING_DEPARTMENT: (state, data) => {
    state.workingDepartment = data;
  },

  // 设置办事主题
  SET_WORKING_THEME: (state, data) => {
    state.workingTheme = data;
  },

  // 收件信息
  SET_RECEIVE_INFO: (state, data) => {
    state.receiveInfo = data;
  },
}

export default mutations

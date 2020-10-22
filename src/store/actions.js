/*
 * @Author: your name
 * @Date: 2020-04-02 15:21:47
 * @LastEditTime: 2020-05-12 16:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tengzhou-cloud-app\src\store\actions.js
 */
import axios from '@/utils/service'

const actions = {

    /**
     * @description: 获取乡镇数据
     * @param {type} 
     * @return: 
     */
    fetchVillages({ state, commit }, onSuccess) {
      
        let obj = {
            // invokeMethod: "getPhoneVerificationCode"
        };

        axios
            .doPost({
                isStatic: true, // 是否是静态json
                url: "villages",
                // url: "all",
                // loading: true, // 是否显示加载中，默认false
                data: obj
            })
            .then(res => {
                let data = res.data;
                commit('SET_VILLAGES', data)
                onSuccess && onSuccess(data)
            })
            .catch(error => {
            });
    },
    
    /**
    * @description: 获取办事部门数据
    * @param {type} 
    * @return: 
    */
    fetchWorkingDepartment({ state, commit }, onSuccess) {
        let obj = {
            // invokeMethod: "getPhoneVerificationCode"
        };

        axios
            .doPost({
                isStatic: true, // 是否是静态json
                url: "workingDepartment",
                // url: "all",
                // loading: true, // 是否显示加载中，默认false
                data: obj
            })
            .then(res => {
                let data = res.data;
                commit('SET_WORKING_DEPARTMENT', data)
                onSuccess && onSuccess(data)

            })
            .catch(error => {
            });
    },

    /**
    * @description: 获取办事主题数据
    * @param {type} 
    * @return: 
    */
    fetchWorkingTheme({ state, commit }, onSuccess) {
        let obj = {
            // invokeMethod: "getPhoneVerificationCode"
        };

        axios
            .doPost({
                isStatic: true, // 是否是静态json
                url: "workingTheme",
                // url: "all",
                // loading: true, // 是否显示加载中，默认false
                data: obj
            })
            .then(res => {
                let data = res.data;
                commit('SET_WORKING_THEME', data)
                onSuccess && onSuccess(data)

            })
            .catch(error => {
            });
    }
}

export default actions

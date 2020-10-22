import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from  'vuex-along' /*状态管理*/
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

// vuexAlong.onlySession(true);
Vue.use(Vuex)
const store = new Vuex.Store({
	state:state,
	mutations:mutations,
	actions:actions,
	getters:getters,
	plugins: [vuexAlong] //vuexAlong 插件配置
})

export default store

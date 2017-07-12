/**
 * 仓库入口文件
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {

}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
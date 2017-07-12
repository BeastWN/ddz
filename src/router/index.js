/**
 * 路由文件
 * 使用了组件懒加载，把组件按组分块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const register = r => require.ensure([], () => r(require('@/components/Register.vue')), 'Register');

export default new Router({
	mode: 'history',
  scrollBehavior: () => {
    y: 0
  },
  routes: [
    {
      path: '/register',
      name: 'register',
     	component: register
    }
  ]
});

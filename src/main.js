import Vue from 'vue';
import App from './App';
import router from './router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

// 在创建实例的时候默认配置项
Axios.create({
	baseUrl: 'localhost:3000'
});
Vue.use(VueAxios,Axios);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

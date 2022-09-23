import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from 'axios'
// import './api/mock.js'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')

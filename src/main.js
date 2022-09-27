import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from 'axios'
// import './api/mock.js'
import * as echarts from 'echarts'
import Router from 'vue-router'


Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = http
// vue-Router 的报错修改 引用
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')

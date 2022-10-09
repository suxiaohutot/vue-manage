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
import Cookie from 'js-cookie'


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

// 添加全局路由前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断token是否存在
  const token = Cookie.get('token')
  console.log(token)
  if(!token && to.name !== 'LoginT'){
    next({name:'LoginT'})
    console.log('loginT')
  }else if(token && to.name === 'LoginT'){
    next({name:'HomeT'})
    console.log('HomeT')
  }else{
    next()
  }
})


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')

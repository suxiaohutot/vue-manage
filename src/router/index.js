import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:'MainT',
    component: () => import('../views/MainT.vue'),
    children:[
      {
        path:'./homeT',
        name:'HomeT',
        component: () => import('../views/homeT/homeT.vue'),
      },
      {
        path:"/commodity",
        name:'Commodity',
        component: () => import('../views/commodity/commodity.vue')
      },
      {
        path:"/userT",
        name:'UserT',
        component: () => import('../views/userT/userT.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
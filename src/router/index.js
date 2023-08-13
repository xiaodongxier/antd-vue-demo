// 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import layoutHome from '../views/homePage/layoutHome.vue'
import home from '../views/homePage/home.vue'
import from1 from '../views/homePage/from/from1.vue'
import from2 from '../views/homePage/from/from2.vue'
import table1 from '../views/homePage/table/table1.vue'
import table2 from '../views/homePage/table/table2.vue'

const routes = [
  {
    path: "/",
    component: layoutHome,
    redirect: '/home',
    children: [
      {
        path: "/home",
        component: home
      },
      {
        path: "/from1",
        component: from1
      },
      {
        path: "/from2",
        component: from2
      },
      {
        path: "/table1",
        component: table1
      },
      {
        path: "/table2",
        component: table2
      }
    ]
  }
]

const router = new VueRouter({
  routes
})


export default router
/*
 * @Date: 2023-08-13 16:02:54
 * @LastEditTime: 2023-08-25 11:11:02
 * @Author: bytz_user
 * @Note:  
 */
// 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import layoutHome from '../views/homePage/layoutHome.vue'
import home from '../views/homePage/home.vue'
import from1 from '../views/homePage/from/from1.vue'
import guolvqi1 from '../views/homePage/过滤器/过滤器1.vue'
import alist1 from '../views/homePage/alist/alist1.vue'
import Select1 from '../views/homePage/Select/Select1.vue'
import Moment1 from '../views/homePage/Moment/Moment1.vue'
import editor1 from '../views/homePage/editor/editor1.vue'
import editor2 from '../views/homePage/editor/editor2.vue'
import editor3 from '../views/homePage/editor/editor3.vue'

import test from '../views/homePage/test/test.vue'

const routes = [
  {
    path: "/",
    component: layoutHome,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: 'home',
        component: home
      },
      {
        path: "/from1",
        name: 'antd之form表单',
        component: from1
      }, {
        path: "/guolvqi1",
        name: '过滤器',
        component: guolvqi1
      }, {
        path: "/alist1",
        name: 'alist页面',
        component: alist1
      }, {
        path: "/Select1",
        name: 'Select 选择器',
        component: Select1
      },{
        path: "/Moment1",
        name: '时间处理库Moment',
        component: Moment1
      },{
        path: "/editor1",
        name: '★编辑页面',
        component: editor1
      },{
        path: "/editor2",
        name: '★审核页面/批注/对比',
        component: editor2
      },{
        path: "/editor3",
        name: '★回显/在编辑',
        component: editor3
      },{
        path: "/test",
        name: '王永杰练习场',
        component: test
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

console.log(router.options.routes[0])
export default router
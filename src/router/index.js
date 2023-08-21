// 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import layoutHome from '../views/homePage/layoutHome.vue'
import home from '../views/homePage/home.vue'
import from1 from '../views/homePage/from/from1.vue'
import table1 from '../views/homePage/table/table1.vue'
import table2 from '../views/homePage/table/table2.vue'
import card1 from '../views/homePage/card/card1.vue'
import card2 from '../views/homePage/card/card2.vue'
import menu1 from '../views/homePage/menu/menu1.vue'

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
        name: '基础表单',
        component: from1
      },
      {
        path: "/table1",
        name: 'table1',
        component: table1
      },
      {
        path: "/table2",
        name: 'table2',
        component: table2
      },
      {
        path: "/card1",
        name: 'card1',
        component: card1
      },
      {
        path: "/card2",
        name: 'card2',
        component: card2
      },
      {
        path: "/menu1",
        name: 'menu1',
        component: menu1
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

console.log(router.options.routes[0])
export default router
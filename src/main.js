import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import VueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueRouter)


import router from "./router"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

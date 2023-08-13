<template>
  <a-layout id="components-layout-demo-custom-trigger">

    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />

      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="home" @click="$router.push('/home')">
            <a-icon type="from" />
            <span>首页</span>
        </a-menu-item>


        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />From</span>
          <a-menu-item key="from1" @click="$router.push('/from1')">
            <a-icon type="from" />
            <span>from1</span>
          </a-menu-item>

          <a-menu-item key="from2" @click="$router.push('/from2')">
            <a-icon type="from" />
            <span>from2</span>
          </a-menu-item>

        </a-sub-menu>
      </a-menu>

    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      // menuDate: [
      //   {
      //   path: '/',
      //   name: '首页',
      //   label: '首页',
      //   icon: 'home',
      //   url: 'Home/Home'
      // },
      // {
      //   path: '/from1',
      //   name: 'from1',
      //   label: '商品管理',
      //   icon: 'table',
      //   url: 'MallManage/MallManage'
      // },
      // {
      //   path: '/from2',
      //   name: 'from2',
      //   label: '用户管理',
      //   icon: 'user',
      //   url: 'UserManage/UserManage',
      // }]
    };
  },
  methods: {
    // clickMenu(item) {
    //   console.log(item)
    //   console.log(item.path, this.$route.path)
    //   this.$router.push(item.path)
    // }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

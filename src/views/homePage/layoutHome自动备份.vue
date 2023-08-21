<template>
  <a-layout id="components-layout-demo-custom-trigger">

    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />


      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="home" @click="$router.push('/home')">
            <a-icon type="home" />
            <span>首页</span>
        </a-menu-item>


        <a-sub-menu key="form">
          <span slot="title"><a-icon type="form" /><span>From表单</span></span>
          <a-menu-item key="from1" @click="$router.push('/from1')">
            <span>from1</span>
          </a-menu-item>

          <a-menu-item key="from2" @click="$router.push('/from2')">
            <span>from2</span>
          </a-menu-item>
        </a-sub-menu>


        <a-sub-menu key="table">
          <span slot="title"><a-icon type="table" /><span>Table表格</span></span>
          <a-menu-item key="table1" @click="$router.push('/table1')">
            <span>table1</span>
          </a-menu-item>

          <a-menu-item key="table2" @click="$router.push('/table2')">
            <span>from2</span>
          </a-menu-item>
        </a-sub-menu>



        <a-sub-menu key="card">
          <span slot="title"><a-icon type="edit" /><span>Card卡片</span></span>
          <a-menu-item key="card1" @click="$router.push('/card1')">
            <span>card1</span>
          </a-menu-item>

          <a-menu-item key="card2" @click="$router.push('/card2')">
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

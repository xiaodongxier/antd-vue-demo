<!--
 * @Date: 2023-08-26 23:23:46
 * @LastEditTime: 2023-08-29 06:40:17
 * @Author: bytz_user
 * @Note:  
-->
<template>
  <div>
    <p>
      yarn add moment 
    </p>

    <!-- {{ msg }} -->
    {{ msg }}


    <a-form-model layout="Horizontal">
        <a-card title="项目组主要成员" :bordered="false" style="width: 100%">
          <a-form-model-item label="项目负责人" lay>
            <a-input />
          </a-form-model-item>
          <a-form-model-item label="项目负责人" lay>
            <a-input />
          </a-form-model-item>
          <a-form-model-item label="项目负责人" lay>
            <a-input />
          </a-form-model-item>
          <a-form-model-item label="项目负责人" lay>
            <a-input />
          </a-form-model-item>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
        <a-card title="校核工程师" :bordered="false" style="width: 100%">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
        <a-card title="换料核算工程师" :bordered="false" style="width: 100%">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-form-model>
  </div>
</template>


<script>
// import Moment from 'moment'//导入文件
export default {
  name: 'test',
  data() {
    return {
      msg: this.$moment().format('YYYY-MM-DD HH:mm:ss')

    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
<!--
 * @Date: 2023-08-26 23:23:46
 * @LastEditTime: 2023-09-06 17:05:25
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
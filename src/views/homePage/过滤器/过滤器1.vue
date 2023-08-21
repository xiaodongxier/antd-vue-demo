<template>
  <div>
    <h1>过滤器</h1>
    <p>{{ 88.00 | rmb }}</p>

  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {

    }
  },
  filters: {
    rmb: function(val) {
      return  '¥' + val
    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>

<template>
  <div>
    <input type="text" v-model="title">
    <pre>
      beforeCreate 获取不到data里面的数据和methods里面的方法
      ----
      created 可以获取到data里面的数据和methods里面的方法
      beforeMount 可以获取到data里面的数据和methods里面的方法
      mounted 可以获取到data里面的数据和methods里面的方法
      beforeUpdate 可以获取到data里面的数据和methods里面的方法
      updated 可以获取到data里面的数据和methods里面的方法
      ----
      
    </pre>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      description: '项目信息',
      title: "访问到了data数据"
    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.title)
    // this.getData("beforeCreate")
  },
  created() {
    console.log("created", this.title)
    this.getData("created")
  },
  beforeMount() {
    console.log("beforeMount", this.title)
    this.getData("beforeMount")
  },
  mounted() {
    console.log("mounted", this.title)
    this.getData("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.title)
    this.getData("beforeUpdate")
  },
  updated() {
    console.log("updated", this.title)
    this.getData("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy", this.title)
  },
  destroyed() {
    console.log("destroyed", this.title)
  },
  methods: {
    getData(cycle){
      console.error(cycle + "生命周期钩子获取到methods方法")
      return this.title
    }
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
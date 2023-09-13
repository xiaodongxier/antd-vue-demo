<!--
 * @Date: 2023-09-06 21:58:26
 * @LastEditTime: 2023-09-13 08:25:47
 * @Author: bytz_user
 * @Note:  
-->
<template>
  <div>
    <a-form :form="myLogin" @submit="handleSubmit" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
        <a-form-item>
          <a-textarea placeholder="Basic usage" :rows="4" v-decorator="['input']" v-model="title"/>
        </a-form-item>

        <a-form-item>
          <a-textarea placeholder="Basic usage" :rows="4" v-decorator="['input1']"/>
        </a-form-item>


      <a-form-item>
        <a-button html-type="submit" type="primary">
              提交校验所有值：this.myLogin.validateFields((err, values)
            </a-button>
      </a-form-item>
      <a-form-item>
        <button @click="btnSetVal">赋值</button>
      </a-form-item>
</a-form>

  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      title:"一、总体性输入、外部输入:\n1、HAFO03(1991) 核电厂质量保证安全规定及相关导则\n2、HAF 102(2004) 核动力厂设计安全规定\n3、HAD102/01(1989) 核电厂设计总的安全原则\n4、HAD102/07(1989)核电厂堆芯的安全设计\n5、HAD102/17(2006)核动力厂安全评价与验证\n6、HAD103/01(2005)核动力厂运行限值和条件及运行规程\n7、HAD103/03 (1989)核电厂堆芯和燃料管理等\n8、xx 核电厂换料设计校算服务合同\n9、《xx 核电厂x 号机组第 xx 循环换料通知书》\n二、内部输入:\n1、《xx 项目-换料安全分析检查表》\n2、《xx 项目-换料安全评价程序》\n3、计算服务器名称:\n4、引用历史循环库地址:",
      myLogin: this.$form.createForm(this, {
        name: 'newForm'
      }),



    }
  },
  mounted(){
    // this.form.getFieldDecorator(id, options) 
  },
  methods:{
    handleSubmit(e) {
      e.preventDefault();
      this.myLogin.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.myLogin.setFieldsValue({ input1: values.input });
        }
      });
    },
    btnSetVal() {
    },
  }
}
</script>
<style lang="" scoped>
  
  
  
  
</style>
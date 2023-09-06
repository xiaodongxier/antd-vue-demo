<template>
  <div>
    <a-form :form="myLogin" @submit="handleSubmit">
      <a-form-item label="项目">
        <!--
          v-decorator
          第一个就是设置的表单内容键, 和v-model不一样，不需要在data里面去定义name字段
         -->
        <a-input v-decorator="['name']" />
      </a-form-item>
      <a-form-item>
        <!--
          v-decorator
          第二个是设置的表单校验(里面可以包含默认值详见下面的data)
         -->
        <a-input v-decorator="['age', rules.age]" />
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['adddess', rules.adddess]" />
      </a-form-item>
      <a-form-item>
        <!--
          v-decorator
          第二个是设置的表单校验(里面可以包含默认值详见下面的data, 可以通过 initialValue: "默认值" 设置默认值)
         -->
        <a-input v-decorator="['sex', rules.sex]" />
      </a-form-item>

      <a-form-item>
        <a-button html-type="submit">
          提交校验所有值：this.myLogin.validateFields((err, values)
        </a-button>
        <br>
        <a-button @click="subOneVal">
          提交校验某个值：this.myLogin.validateFields(["age"], (err, fieldsValue) 并返回这个值
        </a-button>
        <br>
        <a-button @click="btnSetVal">
          设置值/一个/多个: this.myLogin.setFieldsValue({ name: "名字", age: "28" });
        </a-button>
        <br>
        <a-button @click="getOneVal">
          获取一个值： this.myLogin.getFieldsValue(["name"]);
        </a-button>
        <br>
        <a-button @click="getMoreVal">
          获取多个值： this.myLogin.getFieldsValue(["name", "age"]);
        </a-button>
        <br>
        <a-button @click="getAllVal">
          获取全部值/表单提交： this.myLogin.getFieldsValue();
        </a-button>
        <br>
        <a-button @click="reset">
          重置表单：this.form.resetFields();
          <br>
          默认值重置无效，可以赋值为空解决
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      // 创建form表单，newForm就类似给表单起个名字，防止一个页面表单重复
      myLogin: this.$form.createForm(this, "newForm"),
      // 规则校验 & 默认值
      rules: {
        age: { rules: [{ required: true, message: "年龄不能为空" }] },
        adddess: { rules: [{ required: true, message: "地址不能为空" }] },
        sex: { rules: [{ required: true, message: "不能为空" }], initialValue: "男" }
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.myLogin.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    subOneVal() {
      this.myLogin.validateFields(["age"], (err, fieldsValue) => { // 校验某个值
        if (!err) {
          console.log(fieldsValue); // 仅返回 age 的值
        } else {
          console.log(err);
        }
      });
    },
    btnSetVal() {
      this.myLogin.setFieldsValue({ name: "名字", age: "28" });
    },
    getOneVal() {
      this.myLogin.getFieldsValue(["name"]);
      console.log(this.myLogin.getFieldsValue(["name"]));
    },
    getMoreVal() {
      this.myLogin.getFieldsValue(["name", "age"]);
      console.log(this.myLogin.getFieldsValue(["name", "age"]));
    },
    getAllVal() {
      this.myLogin.getFieldsValue();
      console.log(this.myLogin.getFieldsValue());
    },
    reset() {
      this.myLogin.resetFields();
    }
  }
};
</script>
<style lang="" scoped>

</style>

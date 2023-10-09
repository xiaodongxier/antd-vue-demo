<template>
  <div class="box">
    <textarea name="" id="" cols="30" rows="10" v-model="markdownText"></textarea>
    <VueMarkdown :source="markdownText"></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: "Test",
  data() {
    return {
      description: "项目信息",
      markdownText: "# 一级标题\n\n## 二级标题\n\n### 三级标题\n\n#### 四级标题\n\nThis is a **Markdown** renderer.\n\n```这是代码```"
    };
  },
  components: {
    VueMarkdown
}
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  &>* {
    flex: 1;
    max-width: 50%;
    height: 80vh;
    margin: 5px;
    overflow: scroll;
  }
}
</style>

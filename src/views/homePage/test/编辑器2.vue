<template>
  <div>
    <div ref="codeContainer" class="coder-editor"></div>
    <div v-html="content"></div>
    <div ref="monacoContainer" class="coder-editor"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {

  data() {
    return {
      monacoEditor: null, // 语言编辑器,
      content: '',
      myData: `
        { 
          key: "11",
          order: "001",
          pactCode: "N001",
          insideCode: "B001",
          fileName: "文件名称1",
          editName: "张山",
          checkName: "李四",
          auditName: "李四",
          ratifyName: "六六",
          time: "2023-01-01"
        },
        { 
          key: "11";
          order: "001";
          pactCode: "N001";
          insideCode: "B001";
          fileName: "文件名称1";
          editName: "张山";
          checkName: "李四";
          auditName: "李四";
          ratifyName: "六六";
          time: "2023-01-01"
        }
        `
    }
  },
  mounted() {
    let oldContent = "Hello, world! <";
    let newContent = "Hi, world!";
    let container = this.$refs.monacoContainer;
    let oldModel = monaco.editor.createModel(oldContent, "text/plain");
    let newModel = monaco.editor.createModel(newContent, "text/plain");
    let diffEditor = monaco.editor.createDiffEditor(container);

    diffEditor.setModel({
      modified: newModel,
      original: oldModel
    });
  },
  beforeDestroy() {
    this.monacoEditor.dispose();
  },
  methods: {
    init() {
      if (this.$refs.codeContainer) {
        // 初始化编辑器，确保dom已经渲染
        this.monacoEditor = monaco.editor.create(this.$refs.codeContainer, {
          value: this.myData, // 编辑器初始显示文字
          language: 'javascript', // 语言 javascript | json
          automaticLayout: true, // 自动布局
          theme: 'vs', // 官方自带三种主题 vs, hc-black, or vs-dark
          foldingStrategy: 'indentation', // 代码可分小段折叠
          overviewRulerBorder: false, // 不要滚动条的边框
          lineNumbers: 'on', // 控制行号的出现 on | off
          scrollbar: { // 滚动条设置
            verticalScrollbarSize: 4, // 竖滚动条
            horizontalScrollbarSize: 6, // 横滚动条
          },
          readOnly: false, // 是否只读 Defaults to false | true
          minimap: { // 关闭小地图
            // autohide: true,   //控制minimap的渲染方式,意思为自动隐藏，当设置为false时，没有效果一≠≠≠直可见，设置为true时，默认不可见，鼠标悬浮时可见
            enabled: true, //一个布尔值，指示是否启用缩略图。默认为 true
            scale: 2, //字体的放大倍数，默认是1
          },
          cursorStyle: 'line', // 光标样式
          fontSize: 14, // 字体大小
          tabSize: 2, // tab缩进长度
          autoIndent: true, // 自动布局
          hover: {
            enabled: true,
            delay: 500,
          },
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.coder-editor {
  width: 100%;
  height: 40vh;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
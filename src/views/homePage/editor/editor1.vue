<template>
  <div class="wrap">
    <div class="content left">
      <div ref="codeContainer" class="coder-editor" />
    </div>
    <div />
    <div class="content right">
      <a-button @click="getVal">
        获取编辑框内容
      </a-button>
      <a-button @click="getValArr">
        获取编辑框内容/数组
      </a-button>
      <!-- <a-button @click="readFile">上传</a-button> -->

      <input type="file">
      <div class="output" />
      <div v-html="getValContent" />
      <div>
        获取的内容{{ getValContent }}
      </div>
    </div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
// import axios from 'axios';
export default {
  data() {
    return {
      monacoEditor: null, // 语言编辑器,
      content: "",
      getValContent: "",
      myData: `
        var myData = { 
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
        }
        `
    };
  },
  mounted() {
    this.init();
    const editor = this.monacoEditor;
    // 粘贴内容的时候触发
    editor.onDidPaste((text) => {
      console.log("粘贴内容的时候触发:", text);
    });
    editor.onMouseLeave((e) => {
      console.log("鼠标离开编辑器了/保存需求时候可以用到", e);
    });
    editor.onMouseMove((e) => {
      console.log("编辑器上移动", e);
    });
    // 事实获取光标所在行号
    editor.onDidChangeCursorPosition((e) => {
      console.log(e);
      console.log("光标所在行号", editor.getPosition().lineNumber);
      console.log("光标所在列号", editor.getPosition().column);
      console.log("编辑器中被选中内容位置", editor.getSelection());
    });
    // 监听编辑器内容变化事件
    editor.onDidChangeModelContent((e) => {
      // 在这里重新渲染编辑器
      console.log("内容发生变化", e);
    });
    // 在右键菜单里增加一栏自定义的操作。 ？无效？
    // editor.addAction({
    //   id: '菜单id', // 菜单项 id
    //   label: '菜单名称', // 菜单项名称
    //   keybindings: [this.monaco.KeyMod.CtrlCmd | this.monaco.KeyCode.KEY_J], // 绑定快捷键
    //   contextMenuGroupId: '9_cutcopypaste', // 所属菜单的分组
    //   run: () => {}, // 点击后执行的操作
    // })

    // 上传文件
    const fileInput = document.querySelector("input[type=file]");
    const output = document.querySelector(".output");

    fileInput.addEventListener("change", () => {
      const [file] = fileInput.files;
      if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          output.innerText = reader.result;
          this.myData = reader.result;
          // 注销重新渲染
          this.monacoEditor.dispose();
          this.init();
          // 注销重新渲染
        });
        reader.readAsText(file);
      }
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
          // language: 'javascript', // 语言 javascript | json
          automaticLayout: true, // 自动布局
          theme: "vs", // 官方自带三种主题 vs, hc-black, or vs-dark
          foldingStrategy: "indentation", // 代码可分小段折叠
          overviewRulerBorder: false, // 不要滚动条的边框
          lineNumbers: "on", // 控制行号的出现 on | off
          scrollbar: { // 滚动条设置
            verticalScrollbarSize: 4, // 竖滚动条
            horizontalScrollbarSize: 6 // 横滚动条
          },
          readOnly: false, // 是否只读 Defaults to false | true
          minimap: { // 关闭小地图
            autohide: true,   // 控制minimap的渲染方式,意思为自动隐藏，当设置为false时，没有效果一≠≠≠直可见，设置为true时，默认不可见，鼠标悬浮时可见
            enabled: true, // 一个布尔值，指示是否启用缩略图。默认为 true
            scale: 2 // 字体的放大倍数，默认是1
          },
          cursorStyle: "block-outline", // 光标样式 line , block , underline , line-thin , block-outline , underline-thin
          fontSize: 16, // 字体大小
          tabSize: 2, // tab缩进长度
          autoIndent: true, // 自动布局 - 自动缩进功能。每当输入回车键时，编辑器会自动缩进到与上一行相同的缩进级别。
          hover: {
            enabled: true,
            delay: 500
          }

        });
      }
    },
    getVal() {
      this.getValContent = this.monacoEditor.getValue();
      console.log("获取内容", this.monacoEditor.getValue());
      console.log("获取内容", this.monacoEditor.getModel());
    },
    getValArr() {
      // 如果传入 lineNumber，则返回对应行的文本字符串 (？？测试无效？？)，不传参则返回所有行的文本字符串的集合。
      console.log("获取内容", this.monacoEditor.getModel().getLinesContent(10));
    },
    getUpload() {
      //  更新数据devInfo.txt文件接口
      const xhr = new XMLHttpRequest();
      const okStatus = document.location.protocol === "file:" ? 0 : 200;
      xhr.open("GET", "./editor1.vue", false);// 文件路径
      xhr.overrideMimeType("text/html;charset=utf-8");// 默认为utf-8
      xhr.send(null);
      console.log(okStatus); // 打印文件信息
      console.log(xhr.responseText); // 打印文件信息
    },
    readFile() {
      // axios.get('./1.txt')
      //   .then(response => {
      //     this.fileContent = response.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     this.fileContent = '无法加载文件';
      //   });
      // this.myData = '11'
      this.monacoEditor.dispose();
      this.init();
      console.log("重置初始化");
    }

  }
};
</script>
<style>
.wrap {
  width: 100%;
  display: flex;
}

.content{
  height: 80vh;
}

.content.left{
  min-width: 700px;
  flex: 2;
  border: 2px solid black;
}

.coder-editor {
  width: 100%;
  height: 100%;
}

.right {
  flex: 1;
  border: 1px solid #ccc;
  padding: 20px;
  margin-left: 20px;
  overflow: scroll;
}
</style>

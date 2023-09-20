<template>
  <div>
    <div id="editor" style="width: 600px; height: 400px"></div>
    <div id="save-button">保存</div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';

export default {
  mounted() {
    // 初始化monaco-editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
    });

    // 定义批注数组
    let annotations = [];

    // 添加批注
    function addAnnotation(lineNumber, content) {
      const range = new monaco.Range(lineNumber, 1, lineNumber, 1);
      const annotation = {
        range: range,
        options: {
          isWholeLine: true,
          glyphMarginClassName: 'annotation-glyph',
          glyphMarginHoverMessage: {
            value: content,
            isTrusted: true
          }
        }
      };
      annotations.push(annotation);
    }

    // 加载内容和批注
    function loadContent(content, annotations) {
      editor.setValue(content);
      editor.deltaDecorations([], annotations);
    }

    // 获取内容和批注
    function getContentAndAnnotations() {
      const content = editor.getValue();
      return {
        content: content,
        annotations: annotations
      };
    }

    // 当用户点击按钮保存时，将内容和批注传给后端
    function saveContentAndAnnotations() {
      const data = getContentAndAnnotations();
      console.log(data)
      // 发送给后端保存
      // ...
    }

    // 当用户加载内容和批注时，从后端获取批注并回显
    function loadContentAndAnnotationsFromBackend() {
      // 从后端获取批注数据
      // ...

      const content = '...'; // 从后端获取内容
      const serverAnnotations = ['...']; // 从后端获取批注数据

      // 解析批注数据
      const parsedAnnotations = serverAnnotations.map(annotation => {
        return {
          range: new monaco.Range(annotation.startLineNumber, annotation.startColumn, annotation.endLineNumber, annotation.endColumn),
          options: {
            isWholeLine: annotation.isWholeLine,
            glyphMarginClassName: 'annotation-glyph',
            glyphMarginHoverMessage: {
              value: annotation.content,
              isTrusted: true
            }
          }
        };
      });

      // 加载内容和批注
      loadContent(content, parsedAnnotations);
    }

    // 监听保存按钮的点击事件
    document.getElementById('save-button').addEventListener('click', saveContentAndAnnotations);

    // 加载内容和批注
    loadContentAndAnnotationsFromBackend();

    // 在用户操作monaco-editor时，根据需要添加批注
    editor.onDidChangeCursorPosition(event => {
      const lineNumber = event.position.lineNumber;
      const content = '...'; // 根据需要生成批注内容
      addAnnotation(lineNumber, content);
      editor.deltaDecorations([], annotations);
    });
  }
}
</script>

<style>
.annotation-glyph {
  background-color: yellow;
}
</style>
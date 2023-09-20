<template>
  <div>
    <div class="box">
      <div id="editor1" style="width: 400px; height: 300px"></div>
      <div id="editor2" style="width: 400px; height: 300px"></div>
    </div>
    <button @click="compare">Compare</button>
    <pre>{{ diffResult }}</pre>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import { diffLines } from 'diff';

export default {
  data() {
    return {
      editor1: null,
      editor2: null,
      diffResult: '',
    };
  },
  mounted() {
    this.editor1 = monaco.editor.create(document.getElementById('editor1'), {
      value: '',
      language: 'plaintext',
      theme: 'vs-dark',
    });

    this.editor2 = monaco.editor.create(document.getElementById('editor2'), {
      value: '',
      language: 'plaintext',
      theme: 'vs-dark',
    });
  },
  methods: {
    compare() {
      const content1 = this.editor1.getValue();
      const content2 = this.editor2.getValue();

      const diff = diffLines(content1, content2);

      let result = '';
      diff.forEach(part => {
        const value = part.value;
        const className = part.added ? 'added' : part.removed ? 'removed' : '';
        result += `<span class="${className}">${value}</span>`;
      });

      this.diffResult = result;
    },
  },
};
</script>

<style>
.box {
  display: flex;
}
.added {
  background-color: #cfc;
}

.removed {
  background-color: #fdd;
}
</style>
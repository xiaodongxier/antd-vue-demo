<template>
  <div id="app">
    <textarea v-model="text1" />
    <textarea v-model="text2" />
    <div>
      <button @click="compareText">
        比较文本
      </button>
    </div>
    <div v-if="differences.length > 0">
      <h3>文本差异：</h3>
      <ul>
        <li v-for="(difference, index) in differences" :key="index">
          {{ difference }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import diff_match_patch from "diff_match_patch";
export default {
  name: "Test",
  data() {
    return {
      text1: "",
      text2: "",
      differences: []
    };
  },
  methods: {
    compareText() {
      const diff = new diff_match_patch();
      const diffs = diff.diff_main(this.text1, this.text2);
      diff.diff_cleanupSemantic(diffs);
      const differences = diffs.map(d => {
        if (d[0] === 0) {
          return d[1];
        } else if (d[0] === -1) {
          return `<del>${d[1]}</del>`;
        } else if (d[0] === 1) {
          return `<ins>${d[1]}</ins>`;
        }
      });
      this.differences = differences;
    }
  }
};
</script>
<style lang="" scoped>

</style>

<!--
 * @Date: 2023-08-24 22:22:46
 * @LastEditTime: 2023-08-25 16:04:57
 * @Author: bytz_user
 * @Note:  
-->
<template>
  <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="data" :pagination="pagination" >
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card :title="item.title">
        Card content
      </a-card>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [];
for(let item = 0; item<=150; item++) {
  data.push({title: `Item ${item}`,})
}

export default {
  data() {
    return {
      data,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        // 默认页数
        // current: 1,
        // 每页条数
        // pageSize: 10,
        // 页码位置
        position: "bottom",
        // 通过设置 showTotal 展示总共有多少数据
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条";
          // return " 共" + total + "条数据";
        },
        // 是否可以快速跳转至某页
          showQuickJumper: true,
          // 显示下拉设置每页数量
          showSizeChanger: true,
          // 和上面showSizeChanger配合使用,pageSize存在的时候此无效
          pageSizeOptions: ['10', '20', '30', '40','1000'],
      }
    };
  },
};
</script>
<style></style>


## shezhi
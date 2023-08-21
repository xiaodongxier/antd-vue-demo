<template>
  <div class="FuelCycleCalculation">
    <!-- 查询区域 -->
    <a-card class="seach-no-padding-bottom" :bordered="false">
      <a-select :default-value="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
        <a-select-option v-for="province in provinceData" :key="province">
          {{ province }}
        </a-select-option>
      </a-select>
      <a-select v-model="secondCity" style="width: 120px">
        <a-select-option v-for="city in cities" :key="city">
          {{ city }}
        </a-select-option>
      </a-select>
      <a-select v-model="secondCity" style="width: 120px">
        <a-select-option v-for="city in cities" :key="city">
          {{ city }}
        </a-select-option>
      </a-select>
    </a-card>


    <a-list :grid="{gutter: 20, column: 4}" :dataSource="data" class="projectList">
      <a-list-item slot="renderItem" slot-scope="item, index">
          <a-card>
            <div class="itemTop">
              <div class="title">{{ item.title }}</div>
              <div class="type">项目类型{{ index }}：<span>xxxxx</span></div>
              <a-tag color="green" class="state">已启动</a-tag>
            </div>
            <div class="itemBottom">
              <div><a-icon type="home" /> <span>xxxx电厂</span></div>
              <div><a-icon type="home" /> <span>xxxx反应堆</span></div>
              <a-row>
                <a-col :span="16">
                  <div><a-icon type="home" /> <span>xxxx反应堆</span></div>
                </a-col>
                <a-col :span="8">
                  <a-button type="primary" icon="home" size="small" style="font-size: 12px;margin: -3px;">
                     进 入 
                  </a-button>
                </a-col>
              </a-row>
            </div>
          </a-card>
      </a-list-item>
    </a-list>
    
<!-- 
    <a-list :grid="{ gutter: 20, column: 4 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        {{ item }} {{ index }}
        <a-card :title="item.title">
          Card content
        </a-card>
      </a-list-item>
    </a-list> 
  
  -->

    
  </div>
</template>
<script>
const data = [
{
    title: '项目1',
  },
  {
    title: '项目2',
  },
  {
    title: '项目3',
  },
  {
    title: '项目4',
  }
];
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
export default {
  data() {
    return {
      data,
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
    };
  },
  mounted() {
    console.log(this.data.title)
  },
  methods: {
    handleProvinceChange(value) {
      this.cities = cityData[value];
      this.secondCity = cityData[value][0];
    },
  },
};
</script>

<style lang='less' scoped>
.projectList {
  margin: 10px 0 0 0;

  .ant-card {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    /deep/ .ant-card-body {
      padding: 0;
    }
  }

    .itemTop {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .title {
        font-weight: 900;
      }

      .type {
        margin-bottom: 25px;
      }
    }

    .itemBottom {
      height: 100px;
      background: #EDF4FB;
      padding: 0 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: space-evenly;
    }
}
</style>

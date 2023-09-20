<!--
 * @Date: 2023-09-06 21:58:26
 * @LastEditTime: 2023-09-14 17:24:08
 * @Author: bytz_user
 * @Note:  
-->
<template>
  <div class="timeCountWarp">
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>

    <a-modal v-model="visible" title="时间计算器" @ok="handleOk">
      <a-space direction="vertical">
        <a-space :size="6">

          <a-select :default-value="stopTime" style="width: 120px" lable="11" @change="handleSelectTime">
            <a-select-option :value="stopTime">
              停堆时间
            </a-select-option>
            <a-select-option :value="upTime">
              换料时间
            </a-select-option>
          </a-select>


          <a-select :default-value="addSub" style="width: 120px" lable="11" @change="handleSelectCount"
            :showArrow="false" class="wwww">
            <a-select-option value="add">
              +
            </a-select-option>
            <a-select-option value="sub">
              -
            </a-select-option>
          </a-select>

          <a-input-number id="inputNumber" v-model="inputTime" :min="1" />

          <a-select :default-value="timeUnit" style="width: 120px" lable="11" @change="handleSelectUnit">
            <a-select-option value="day">
              天
            </a-select-option>
            <a-select-option value="month">
              月
            </a-select-option>
          </a-select>

          <a-button @click="onClickCount" type="primary">计算</a-button>
        </a-space>

        <a-space :size="4">
          <span>计算结果：</span> <a-date-picker v-model="charuVal" />
          <hr>
          {{ outPutTime }}
        </a-space>
      </a-space>
    </a-modal>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      visible: true,
      dateFormat: 'YYYY/MM/DD',
      stopTime: "2023-01-01",
      upTime: "2023-03-31",
      addSub: 'add',
      inputTime: null,
      timeUnit: 'day',
      outPutTime: null,
      selecTime: null,
      charuVal: null
    };
  },
  methods: {
    handleSelectTime(value) {
      console.log(value);
      this.selecTime = value
    },
    handleSelectCount(value) {
      console.log(value);
      this.addSub = value
    },
    handleSelectUnit(value) {
      console.log(value);
      this.timeUnit = value
    },
    showModal() {
      this.visible = true;
      this.charuVal = null
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    onClickCount() {
      if (this.addSub == 'add') {
        if (this.timeUnit == "day") {
          this.outPutTime = moment(this.selecTime).add(this.inputTime, 'days').calendar()
          this.charuVal = moment(this.selecTime).add(this.inputTime, 'days').calendar()
          console.log(moment(this.selecTime).add(this.inputTime, 'days').calendar())
        } else {
          this.outPutTime = moment(this.selecTime).add(this.inputTime, 'M').calendar()
          this.charuVal = moment(this.selecTime).add(this.inputTime, 'M').calendar()
          console.log(moment(this.selecTime).add(this.inputTime, 'M').calendar(),"222")
        }
      } else {
        if (this.timeUnit == "day") {
          this.outPutTime = moment(this.selecTime).subtract(this.inputTime, 'days').calendar()
          this.charuVal = moment(this.selecTime).subtract(this.inputTime, 'days').calendar()
          console.log(moment(this.selecTime).subtract(this.inputTime, 'days').calendar())
        } else {
          this.outPutTime = moment(this.selecTime).subtract(this.inputTime, 'M').calendar()
          this.charuVal = moment(this.selecTime).subtract(this.inputTime, 'M').calendar()
          console.log(moment(this.selecTime).subtract(this.inputTime, 'M').calendar(),"222")
        }
      }

      var date = moment("2022-01-01");
      // date.add(1, 'days'); // 增加一天
      date.subtract(2, 'hours'); // 减少两个小时
      // console.log(date.add(10, 'days').calendar())/

    },
    charu() {
      this.charuVal = this.outPutTime
    }
  },
  mounted() {
    this.selecTime = this.stopTime

    // console.log(this.stopTime )

    // if(this.addSub == 'add'){
    //   console.log(1)
    // } else {
    //   console.log(2)
    // }


  }

};
</script>
<style>
.wwww {
  width: 35px !important;
}
</style>
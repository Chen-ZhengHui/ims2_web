<template>
  <div id="parent">
    <div class="header">
      <div class="left">
        <el-button-group>
          <el-button type="primary" size="mini" @click="prev">&lt;</el-button>
          <span>{{ headerContent }}</span>
          <el-button type="primary" size="mini" @click="next">&gt;</el-button>
        </el-button-group>
      </div>
      <div class="right">
        <el-button-group>
          <el-button type="primary" size="mini" @click="switchMonth">月</el-button>
          <el-button type="primary" size="mini" @click="switchWeek">周</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="body">
      <table class="month-table" cellspacing="0" cellpadding="0" v-show="showMonth">
        <thead>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
          <th>七</th>
        </thead>
        <tbody>
          <!-- 双重for循环生成 6 * 7 = 42 个日期格子 -->
          <tr v-for="(week, weekIndex) in dates" v-bind:key="weekIndex">
            <td
              v-for="(date, dateIndex) in dates[weekIndex]"
              v-bind:key="dateIndex"
              @mouseenter="dateMouseEnter(weekIndex, dateIndex)"
              @mouseleave="dateMouseLeave(weekIndex, dateIndex)">
              <div class="date" :class="[date.class, date.isAlive]">
                <span>{{ date.day }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 生成一个周 时间列表 -->
      <table class="week-table" cellspacing="0" cellpadding="0" v-show="!showMonth">
        <thead>
          <th></th>
          <th v-for="(header, index) in weekTableHeader" v-bind:key="index" :class="header.class">
            {{ header.date }}
          </th>
        </thead>
        <tbody>
          <tr v-for="(hourMinute, index) in weekList[0]" v-bind:key="index">
            <td>
              <div class="hours">
                <span>{{ hourMinute }}</span>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "",
  props: [""],
  data() {
    return {
      today: moment().format("YYYY-MM-DD"),
      currentYearMonth: moment().format("YYYY-MM"),
      weekTableHeader: [],
      dates: [],
      showMonth: true,
      weekList: [],
      headerContent: moment().format("YYYY-MM"),
      currentWeekday: "",
    };
  },
  created() {
    this.createCalendar();
    let weekday = moment().weekday() === 0 ? 7 : moment().weekday();
    let daysDistance = 1 - weekday;
    this.currentWeekday = moment().add(daysDistance, "days");
    this.createWeekList();
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    prev() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .subtract(1, "months")
          .format("YYYY-MM");
        this.headerContent = this.currentYearMonth;
        this.createCalendar();
      } else {
        this.currentWeekday = moment(this.currentWeekday).subtract(7, "days");
        this.weekHeaderContent();
        this.createWeekList();
      }
    },
    next() {
      if (this.showMonth) {
        this.currentYearMonth = moment(this.currentYearMonth)
          .add(1, "months")
          .format("YYYY-MM");
        this.headerContent = this.currentYearMonth;
        this.createCalendar();
      } else {
        this.currentWeekday = moment(this.currentWeekday).add(7, "days");
        this.weekHeaderContent();
        this.createWeekList();
      }
    },
    switchMonth() {
      this.showMonth = true;
      this.headerContent = this.currentYearMonth;
    },
    switchWeek() {
      this.showMonth = false;
      this.weekHeaderContent();
    },
    dateMouseEnter(weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = "date-alive";
    },
    dateMouseLeave(weekIndex, dateIndex) {
      this.dates[weekIndex][dateIndex].isAlive = "";
    },
    createCalendar() {
      this.dates = [];
      // 获取当月的一号是星期几 以便来生成上月的日期 填补够42个格子
      const monthFirstDay = moment(this.currentYearMonth + "-01", "YYYY-MM-DD");
      // 获得一号与第一个格子内应该有的天数距离 这里需要注意的是 weekday 是从周日 为 0 开始的
      let firstDayWeekday = moment(monthFirstDay).weekday();
      if (firstDayWeekday === 0) {
        firstDayWeekday = 7;
      }
      let daysDistance = 1 - firstDayWeekday;
      for (let weeks = 0; weeks < 6; weeks++) {
        this.dates.push([]);
        for (let weekday = 0; weekday < 7; weekday++) {
          // 该对象有两个属性 一个是class属性 还有一个就是日期
          let date = {};
          date.day = moment(monthFirstDay).add(daysDistance, "days");
          date.isAlive = "";
          const dayMonth = moment(date.day).month();
          // 是这个月的日期
          if (dayMonth === moment(monthFirstDay).month()) {
            date.class = "current-month ";
            // 日期是今天的高亮
            if (moment(date.day).isSame(this.today, "days")) {
              date.class += "today ";
            }
          } else {
            date.class = "not-current-month ";
          }
          date.day = moment(date.day).format("DD");
          this.dates[weeks].push(date);
          daysDistance++;
        }
      }
    },
    createWeekList() {
      this.weekTableHeader = [
        "周一 ",
        "周二 ",
        "周三 ",
        "周四 ",
        "周五 ",
        "周六 ",
        "周日",
      ];
      this.weekList = [];
      for (let index = 0; index < 7; index++) {
        let item = {};
        item.date = moment(this.currentWeekday).add(index, "days");
        if (item.date.isSame(this.today, "days")) {
          item.class = "today";
        }
        item.date = this.weekTableHeader[index] + item.date.format("MM-DD");
        this.weekTableHeader[index] = item;
      }
      for (let days = 0; days < 7; days++) {
        this.weekList.push([]);
        let item = "";
        for (let hours = 0; hours < 48; hours++) {
          if (hours % 2 === 0) {
            item = hours / 2 + "点";
          } else {
            item = "";
          }
          this.weekList[days].push(item);
        }
      }
    },
    weekHeaderContent() {
      this.headerContent =
        moment(this.currentWeekday).format("MM/DD") +
        "~" +
        moment(this.currentWeekday).add(6, "days").format("MM/DD");
    },
  },
  watch: {},
};
</script>
<style scoped>
#parent {
  padding: 1rem;
  width: 1098px;
  overflow: auto;
}
.body::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*正常情况下滑块的样式*/

.body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/

.body:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/

.body::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/

.body::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/

.body::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #ebeef5;
}
.body {
  padding: 12px 20px 35px;
  padding: 1rem;
  max-height: 673px;
  overflow: auto;
}
table {
  table-layout: fixed;
  width: 100%;
}
table thead th {
  padding: 10px 0;
  font-weight: 400;
}
tbody tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.month-table tbody td {
  vertical-align: inherit;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
.month-table tbody tr:first-child td {
  border-top: 1px solid #ebeef5;
}
.month-table tr td:first-child {
  border-left: 1px solid #ebeef5;
}
.date {
  box-sizing: border-box;
  padding: 8px;
  height: 84px;
}
.not-current-month {
  color: #909399;
}
.current-month {
  color: #000000;
}
.today {
  color: #f44e50;
  background-color: #ffff99;
}
.date-alive {
  background-color: rgb(252, 212, 215);
}
.week-table tbody tr td {
  border: 1px solid #ebeef5;
}
.hours {
  text-align: center;
  height: 100px;
}
</style>
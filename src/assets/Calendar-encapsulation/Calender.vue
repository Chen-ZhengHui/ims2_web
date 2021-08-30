<template>
  <div class="calender2">
    <div class="date-headers">
      <div class="date-header">
        <div>
          <div class="circle" @click="handlePrev">上一月</div>
        </div>
        <div>{{ year }}年{{ month }}月{{ day }}日</div>
        <div>
          <div class="circle" @click="handleNext">下一月</div>
        </div>
        <div style="">搜索框</div>
      </div>
    </div>
    <div class="date-content">
      <div class="week-header">
        <div
          v-for="item in ['一', '二', '三', '四', '五', '六', '日']"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
      <div class="week-day">
        <div
          class="every-day"
          v-for="item in 35"
          :key="item"
          @click="handleClickDay(item - beginDay)"
        >
          <div
            v-if="item - beginDay > 0 && item - beginDay <= curDays"
            :class="
              `${year}-${month}-${item - beginDay}` ===
              `${year}-${month}-${day}`
                ? 'nowDay'
                : ''
            "
          >
            {{ item - beginDay }}
          </div>
          <div class="other-day" v-else-if="item - beginDay <= 0">
            {{ item - beginDay + prevDays }}
          </div>
          <div class="other-day" v-else>{{ item - beginDay - curDays }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      year: null,
      month: null,
      day: null,
      currentDay: null,
      currentYearMonthTimes: null, //当前年的月的天数
      monthOneDay: null, //一个月中的某一天
      curDate: null,
      prevDays: null, //上一月天数
    };
  },
  created() {
    this.getInitDate();
    this.currentYearMonthTimes = this.mGetDate(this.year, this.month); //本月天数
    this.prevDays = this.mGetDate(this.year, this.month - 1);
    this.curDate = `${this.year}-${this.month}-${this.day}`;
    console.log(this.curDate);
  },

  components: {},

  computed: {
    curDays() {
      return new Date(this.year, this.month, 0).getDate();
    },
    // 设置该月日期起始值（找到一号是在哪里）
    beginDay() {
      return new Date(this.year, this.month - 1, 0).getDay();
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    refresh() {
      //强制刷新页面
      location.reload();
    },
    handleClickDay(day) {
      //点击这一天，绑定点击事件
      console.log("形参传进来的", day);
      console.log("data里面的this.day", this.day);
      console.log(
        "data里面的currentYearMonthTimes",
        this.currentYearMonthTimes
      );
      this.day = day;
      if (this.day > this.currentYearMonthTimes) {
        this.$message.warning("不能选择超出本月的日期");
      }
      console.log(day);
    },
    computedDay() {
      const allDay = new Date(this.year, this.month, 0).getDate();
      if (this.day > allDay) {
        this.day = allDay;
      }
    },
    //设置页头显示的年月日
    getInitDate() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getUTCMonth() + 1;
      this.day = date.getDate();
    },
    // 如果要获取当前月份天数:
    mGetDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var d = new Date(year, month, 0);
      return d.getDate();
    },
    handlePrev() {
      if (this.month == 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month--;
      }
      this.computedDay();
    },
    handleNext() {
      if (this.month == 12) {
        this.month = 1;
        this.year++;
      } else {
        this.month++;
      }
      this.computedDay();
    },
  },

  watch: {},
};
</script>
<style scoped>
.calender2 {
  border-radius: 4px;
  height: 355px;
  width: 615px;
  background-color: #ffffff;
}

.date-header {
  height: 60px;
  width: 422px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.date-headers {
  height: 60px;
  width: 260px;
  display: flex;
  margin-left: 10px;
}

.pre-month {
  position: absolute;
  display: inline-block;
  height: 0px;
  width: 0px;
  border: 15px solid;
  border-color: transparent rgb(35, 137, 206) transparent transparent;
}

.next-month {
  position: absolute;
  display: inline-block;
  height: 0px;
  width: 0px;
  border: 15px solid;
  border-color: transparent transparent transparent rgb(35, 137, 206);
}

.show-date {
  margin-left: 40px;
  margin-top: 0px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  width: 310px;
  color: rgb(35, 137, 206);
}

.week-header {
  color: #000000;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}

.week-header div {
  margin: 0;
  padding: 0;
  display: inline-block;
  height: 20px;
  width: 85px;
}

.every-day {
  display: inline-block;
  height: 50px;
  width: 85px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
}

.other-day {
  color: #ccc;
}

.nowDay {
  background: rgb(182, 144, 38);
}

.active-day {
  border: 2px solid rgb(35, 137, 206);
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e8e8e8;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.week-day {
  text-align: center;
}
</style>
<template>
  <div class="box1">
    <div class="head">
      <div class="title1">工作台</div>
      <div class="title2"></div>
      <personal_information></personal_information>
    </div>
    <div class="subject">
      <div class="left">
        <div class="tobu">
          <img src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" /><span
            class="remind"
            >日程提醒</span
          >
        </div>
        <div class="calendar"><Schedule></Schedule></div>
      </div>
      <div class="right">
        <div class="Content2">
          <div class="tobu">
            <img src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" /><span
              class="remind2"
              >日程日历</span
            >
          </div>
          <Calender></Calender>
        </div>
        <div class="Content3">
          <div class="tobu">
            <img src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" /><span
              class="span1"
              >我的任务</span
            >
            <span class="span2" @click="View_all">查看全部</span>
          </div>
          <div class="task">
            <task></task>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calender from "../../assets/Calendar-encapsulation/Calender"; //日程日历
import task from "../../assets/task-encpsulation/task.vue"; //我的任务
import Schedule from "../../assets/Schedule-reminder/Schedule.vue"; //日程提醒
import personal_information from "../../assets/personal-information/personal_information.vue"; //个人信息
export default {
  name: "",
  props: [""],
  data() {
    return {
      month: true, //月份的显示
      week: false, //星期的显示
      rq: true, //月份选择
      value1: "", //
    };
  },

  components: {
    Calender,
    task,
    Schedule,
    personal_information,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    // 跳转到查看全部页面
    View_all() {
      this.$router.push("/project");
    },
    //月的显示
    changeSwitch(val) {
      if (val === true) {
        this.month = false;
        this.week = true;
        this.rq = false;
      } else if (val !== true) {
        this.month = true;
        this.week = false;
        this.rq = true;
      }
    },
  },

  watch: {},
};
</script>
<style scoped>
.box1 {
  height: 937px;
  width: 100%;
  padding: 20px;
}
.head {
  display: flex;
  width: 100%;
  height: 50px;
}
.title1 {
  font-size: 25px;
  font-weight: 900;
  height: 50px;
  width: 60%;
}
.title2 {
  height: 50px;
  width: 30%;
}
.title3 {
  height: 50px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.title3 img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 50px;
}
.subject {
  width: 100%;
  height: 845px;
  margin: 10px 0px;
  display: flex;
}
.left {
  width: 65%;
  height: 818px;
}
.right {
  width: 36%;
  height: 818px;
  float: left;
  margin-left: 20px;
}
.Content2 {
  width: 100%;
  height: 416px;
}
.Content3 {
  width: 100%;
  height: 400px;
}
.tobu {
  width: 100%;
  height: 50px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
}
.span1 {
  margin-left: 15px;
  font-weight: 900;
}
.span2 {
  margin-left: 400px;
  cursor: pointer;
}
.tobu img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.calendar {
  width: 100%;
  height: 94.5%;
  border-radius: 20px;
  background-color: #fdfdfd;
}
.kaiguan {
  position: absolute;
  top: 151px;
  left: 1190px;
}
.left-wrap /deep/ .el-calendar__button-group {
  display: none;
}
.task {
  width: 613px;
  height: 88%;
  background-color: #ffffff;
}
.remind {
  margin-left: 15px;
  font-weight: 900;
}
.remind2 {
  margin-left: 15px;
  font-weight: 900;
}
.block {
  padding: 13px;
}
</style>
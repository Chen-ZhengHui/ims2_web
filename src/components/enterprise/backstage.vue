<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">后台首页</div>
      <personal_information></personal_information>
    </div>
    <div class="Background_content">
      <div class="Basic_information">
        <span class="Basic_information2">企业信息</span
        ><span class="Basic_information3">版本信息</span>
      </div>
      <div class="content">
        <div
          class="Enterprise_information1"
          v-for="(item, index) in formlist"
          :key="index"
        >
          <div>
            <div class="content1">
              <img :src="item.IMG" alt />&nbsp;&nbsp;{{ item.name }}
            </div>
            <div class="content2">
              <p>
                总人数<span class="spans">{{ item.Number }}人</span>
              </p>
              <p>
                部门数<span class="spans">{{ item.department }}</span>
              </p>
            </div>
          </div>
          <!-- 饼图 -->
          <div id="main" class="histogram"></div>
        </div>
        <div class="Version_information"></div>
      </div>
      <div class="biaoti">应用管理</div>
      <div class="Application_management">
        <div class="Application_management2">
          <div class="spanlist">
            <p class="spanlist_p"></p>
            <p>日程</p>
          </div>
          <div class="spanlist">
            <p class="spanlist_p"></p>
            <p>日程</p>
          </div>
          <div class="spanlist">
            <p class="spanlist_p"></p>
            <p>日程</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personal_information from "../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      formlist: [
        {
          id: 1,
          name: "三二数字",
          Number: "50",
          department: "10",
          IMG: "../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg",
        },
      ],
    };
  },

  components: {
    personal_information,
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.Piechart();
  },

  methods: {
    Piechart() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("main"));
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "" },
              { value: 735, name: "" },
              { value: 580, name: "" },
              { value: 484, name: "" },
              { value: 300, name: "" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },

  watch: {},
};
</script>
<style scoped>
.frame {
  width: 1590px;
  height: 920px;
  padding: 10px 25px;
}
.title {
  width: 1590px;
  height: 70px;
  display: flex;
}
.zhiti {
  font-size: 25px;
  color: #000000;
  width: 1370px;
  height: 60px;
  line-height: 60px;
}
.Background_content {
  width: 1540px;
  height: 820px;
}
.Enterprise_information1 {
  display: flex;
  width: 750px;
  height: 281px;
  border-radius: 5px;
  background-color: #fefefe;
  padding: 40px 30px;
}
.Version_information {
  width: 750px;
  height: 281px;
  margin-left: 40px;
  border-radius: 5px;
  background-color: #fefefe;
}
.Basic_information {
  margin: 10px 0px;
}
.Basic_information2 {
  font-size: 15px;
  color: #000000;
}
.Basic_information3 {
  margin-left: 727px;
  font-size: 15px;
  color: #000000;
}
.content {
  display: flex;
}
.content1 {
  width: 300px;
  height: 100px;
  vertical-align: middle;
  line-height: 100px;
  color: #000000;
}
.content1 img {
  border-radius: 10px;
  width: 100px;
  height: 80px;
  vertical-align: middle;
}
.content2 {
  width: 300px;
  height: 100px;
}
.content2 p {
  margin-top: 20px;
}
.spans {
  margin-left: 30px;
  color: #000000;
}
.content3 {
  width: 300px;
  height: 100px;
}

#main {
  width: 388px;
  height: 200px;
}
.histogram {
  text-align: center;
}
.Application_management {
  margin-top: 10px;
  width: 1540px;
  height: 442px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 40px 0px;
}
.biaoti {
  font-size: 15px;
  color: #000000;
  margin-top: 10px;
}
.Application_management2 {
  width: 1460px;
  height: 360px;
  display: flex;
}
.spanlist {
  width: 70px;
  height: 80px;
  text-align: center;
  margin-left: 50px;
}
.spanlist_p {
  width: 70px;
  height: 60px;
  background-color: #c3c3c3;
  border-radius: 5px;
}
</style>
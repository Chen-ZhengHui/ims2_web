<template>
  <div class="box">
    <div class="box1">
      <p class="img1">
        <img
          src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
        />&nbsp;&nbsp;<span><strong>个人完成情况</strong></span>
      </p>
      <!-- 饼图 -->
      <div id="main" class="histogram"></div>
    </div>
    <div class="box1">
      <p class="img1">
        <img
          src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
        />&nbsp;&nbsp;<span><strong>项目分布</strong></span>
      </p>
      <!-- 柱状图 -->
      <div id="main2"></div>
    </div>
    <!-- 柱状图 -->
    <!-- <div id="main3"></div> -->
    <!-- 柱状图 -->
    <!-- <div id="main4"></div> -->
  </div>
</template>
<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    //饼图
    this.Piechart();
    //柱状图
    this.drawLine();
    //柱状图2
    // this.shuzhuangtu();
    //柱状图3
    // this.shuzhuangtu2();
  },

  methods: {
    //饼图
    Piechart() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("main"));
      let option2 = {
        title: {
          textAlign: "auto",
          left: "center",
          top: "75%",
          text: "进行中/已完成/延期",
        },
        series: [
          {
            name: "类型",
            type: "pie",
            radius: "50%",
            center: ["50%", "40%"],
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              normal: {
                position: "center",
                label: {
                  show: true,
                  formatter: "{b}{d}%",
                },
                labelLine: { show: true },
              },
            },
          },
        ],
      };
      myChart.setOption(option2);
    },
    //柱状图
    drawLine() {
      var echarts = require("echarts");
      var myChart = echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          textAlign: "auto",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["已完成", "未完成"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["项目7", "项目6", "项目5", "项目4", "项目3", "项目2", "项目1"],
        },
        series: [
          {
            name: "已完成",
            type: "bar",
            stack: "total",
            radius: "100%",
            center: ["50%", "50%"],
            barWidth: 15, //柱图宽度
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "未完成",
            type: "bar",
            stack: "total",
            barWidth: 15, //柱图宽度
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      };
      myChart.setOption(option);
    },
    // //柱状图
    // shuzhuangtu() {
    //   var echarts = require("echarts");
    //   var myChart = echarts.init(document.getElementById("main3"));
    //   var posList = [
    //     "left",
    //     "right",
    //     "top",
    //     "bottom",
    //     "inside",
    //     "insideTop",
    //     "insideLeft",
    //     "insideRight",
    //     "insideBottom",
    //     "insideTopLeft",
    //     "insideTopRight",
    //     "insideBottomLeft",
    //     "insideBottomRight",
    //   ];
    //   app.configParameters = {
    //     rotate: {
    //       min: -90,
    //       max: 90,
    //     },
    //     align: {
    //       options: {
    //         left: "left",
    //         center: "center",
    //         right: "right",
    //       },
    //     },
    //     verticalAlign: {
    //       options: {
    //         top: "top",
    //         middle: "middle",
    //         bottom: "bottom",
    //       },
    //     },
    //     position: {
    //       options: posList.reduce(function (map, pos) {
    //         map[pos] = pos;
    //         return map;
    //       }, {}),
    //     },
    //     distance: {
    //       min: 0,
    //       max: 100,
    //     },
    //   };
    //   app.config = {
    //     rotate: 90,
    //     align: "left",
    //     verticalAlign: "middle",
    //     position: "insideBottom",
    //     distance: 15,
    //     onChange: function () {
    //       var labelOption = {
    //         normal: {
    //           rotate: app.config.rotate,
    //           align: app.config.align,
    //           verticalAlign: app.config.verticalAlign,
    //           position: app.config.position,
    //           distance: app.config.distance,
    //         },
    //       };
    //       myChart.setOption({
    //         series: [
    //           {
    //             label: labelOption,
    //           },
    //           {
    //             label: labelOption,
    //           },
    //           {
    //             label: labelOption,
    //           },
    //           {
    //             label: labelOption,
    //           },
    //         ],
    //       });
    //     },
    //   };
    //   var labelOption = {
    //     show: true,
    //     position: app.config.position,
    //     distance: app.config.distance,
    //     align: app.config.align,
    //     verticalAlign: app.config.verticalAlign,
    //     rotate: app.config.rotate,
    //     formatter: "{c}  {name|{a}}",
    //     fontSize: 0,
    //     rich: {
    //       name: {},
    //     },
    //   };
    //   let option3 = {
    //     title: {
    //       textAlign: "auto",
    //     },
    //     tooltip: {
    //       trigger: "axis",
    //       axisPointer: {
    //         type: "shadow",
    //       },
    //     },
    //     legend: {
    //       data: ["Forest", "Steppe", "Desert", "Wetland"],
    //     },
    //     toolbox: {
    //       show: true,
    //       orient: "vertical",
    //       left: "right",
    //       top: "center",
    //       feature: {
    //         mark: { show: true },
    //         dataView: { show: true, readOnly: false },
    //         magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
    //         restore: { show: true },
    //         saveAsImage: { show: true },
    //       },
    //     },
    //     xAxis: [
    //       {
    //         type: "category",
    //         axisTick: { show: false },
    //         data: ["张三", "李四", "王五", "赵六", "老七"],
    //       },
    //     ],
    //     yAxis: [
    //       {
    //         type: "value",
    //       },
    //     ],
    //     series: [
    //       {
    //         name: "",
    //         type: "bar",
    //         barGap: 0,
    //         label: labelOption,

    //         emphasis: {
    //           focus: "series",
    //         },
    //         //图形样式
    //         itemStyle: {
    //           barBorderRadius: 5,
    //           color: "#6395f9",
    //         },
    //         data: [320, 332, 301, 334, 390],
    //       },
    //       {
    //         name: "",
    //         type: "bar",
    //         label: labelOption,
    //         emphasis: {
    //           focus: "series",
    //         },
    //         //图形样式
    //         itemStyle: {
    //           barBorderRadius: 5,
    //           color: "#62daab",
    //         },
    //         data: [220, 182, 191, 234, 290],
    //       },
    //       {
    //         name: "",
    //         type: "bar",
    //         label: labelOption,
    //         emphasis: {
    //           focus: "series",
    //         },
    //         //图形样式
    //         itemStyle: {
    //           barBorderRadius: 5,
    //           color: "#657798",
    //         },
    //         data: [150, 232, 201, 154, 190],
    //       },
    //       {
    //         name: "",
    //         type: "bar",
    //         label: labelOption,
    //         emphasis: {
    //           focus: "series",
    //         },
    //         //图形样式
    //         itemStyle: {
    //           barBorderRadius: 5,
    //           color: "#f6c022",
    //         },
    //         data: [98, 77, 101, 99, 40],
    //       },
    //     ],
    //   };
    //   myChart.setOption(option3);
    // },
    // // 柱状图2
    // shuzhuangtu2() {
    //   var echarts = require("echarts");
    //   var myChart = echarts.init(document.getElementById("main4"));
    //   let option4 = {
    //     title: {
    //       textAlign: "auto",
    //     },

    //     xAxis: {
    //       type: "category",
    //       data: ["一周", "二周", "三周", "四周", "五周", "六周", "周日"],
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       {
    //         data: [120, 200, 150, 80, 70, 110, 130],
    //         type: "bar",
    //         //图形样式
    //         itemStyle: {
    //           color: "#6395f9", //柱条的颜色
    //         },
    //       },
    //     ],
    //   };
    //   myChart.setOption(option4);
    // },
  },
  watch: {},
};
</script>
<style scoped>
.box {
  width: 1759px;
  height: 830px;
  border: 1px solid red;
  display: flex;
  margin-left: 10px;
}
.box1 {
  width: 880px;
  height: 500px;
  border: 1px solid pink;
  word-wrap: break-word;
  word-break: normal;
}
.img1 img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
}
.img1 span {
  font-size: 20px;
  vertical-align: middle;
  color: black;
}
#main {
  width: 830px;
  height: 418px;
  border: 1px solid red;
  background-color: #ffffff;
  border-radius: 5px;
}
.histogram {
  text-align: center;
}
#main2 {
  width: 830px;
  height: 418px;
  border: 1px solid red;
  background-color: #ffffff;
  border-radius: 5px;
}
/* #main3 {
  width: 435px;
  height: 418px;
  border: 1px solid red;
}
#main4 {
  width: 435px;
  height: 418px;
  border: 1px solid red;
} */
</style>
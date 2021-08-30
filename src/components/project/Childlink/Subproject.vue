<template>
  <div class="title">
    <div class="title1">
      <span>我的项目</span>&nbsp;&nbsp;<img
        src="../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
      />
      <personal_information class="title2"></personal_information>
    </div>
    <div class="content">
      <div class="Task-Kanban">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item
            style="background-color: #f4f4f4"
            class="workbench"
            index="/conduct"
            >进行中</el-menu-item
          >
        </el-menu>
      </div>
      <div class="Statistical-report">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/complete"
            >已完成</el-menu-item
          >
        </el-menu>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import personal_information from "../../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataList: ["进行中", "已完成"],
      clicked: 0, //标识，初始化默认选中第一项
    };
  },
  components: {
    personal_information,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    changeTab(index) {
      this.clicked = index;
    },
  },
  watch: {},
};
</script>
<style scoped>
.title1 {
  width: 1760px;
  height: 50px;
  display: -webkit-flex;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;
}
.title1 span {
  vertical-align: middle;
  font-size: 25px;
  color: #000000;
}
.title1 img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
}
.title2 {
  margin-left: 81.5%;
}
.content {
  padding: 6px 20px;
  display: flex;
}
.content span {
  cursor: pointer;
  display: inline-block;
}
.content span:nth-child(2) {
  margin-left: 30px;
}
.Task-Kanban {
  width: 90px;
  height: 50px;
  font-size: 15px;
  margin-left: -1%;
  cursor: pointer;
}
.Statistical-report {
  width: 90px;
  height: 50px;
  font-size: 15px;
  margin-left: 1%;
  cursor: pointer;
}
.workbench {
  background: #f4f4f4;
}
.workbench:hover {
  background-color: #f4f4f4;
}
</style>
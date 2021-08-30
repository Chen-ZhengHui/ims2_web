<template>
  <div class="box">
    <div class="title">
      <div class="zhiti">规划台</div>
      <div class="Task-Kanban">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/Brain">脑图</el-menu-item>
        </el-menu>
      </div>
      <div class="Statistical-report">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/Gantt">甘特图</el-menu-item>
        </el-menu>
      </div>
      <div class="task-list">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/task_list"
            >任务列表</el-menu-item
          >
        </el-menu>
      </div>
      <personal_information class="information"></personal_information>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import personal_information from "../../../assets/personal-information/personal_information.vue"; //个人信息
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    personal_information,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style scoped>
.box {
  width: 1760px;
  height: 920px;
}
.title {
  width: 100%;
  height: 70px;
  display: flex;
  margin-left: 10px;
  margin-top: 20px;
}
.Task-Kanban {
  font-size: 15px;
  margin-left: 12%;
  cursor: pointer;
}
.workbench {
  background: #f4f4f4;
}
.workbench:hover {
  background-color: #f4f4f4;
}
.Statistical-report {
  font-size: 15px;
  margin-left: 5%;
  cursor: pointer;
}
.title3 {
  height: 50px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  margin-left: 39.5%;
  margin-top: 1px;
}
.title3 img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 50px;
}
.zhiti {
  font-size: 25px;
  color: #000000;
  width: 300px;
}
.task-list {
  font-size: 15px;
  margin-left: 4%;
  cursor: pointer;
}
.information {
  margin-left: 37.5%;
}
</style>
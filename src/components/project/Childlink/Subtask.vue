<template>
  <div class="box">
    <div class="title">
      <div class="zhiti">我的任务</div>
      <div class="Task-Kanban">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/TaskKandan"
            >任务看板</el-menu-item
          >
        </el-menu>
      </div>
      <div class="Statistical-report">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/reportform"
            >统计报表</el-menu-item
          >
        </el-menu>
      </div>
      <div class="title3">
        <personal_information></personal_information>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import personal_information from "../../../assets/personal-information/personal_information.vue";
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
  margin-left: 10.5%;
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
  margin-left: 57.5%;
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
}
</style>
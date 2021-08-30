<template>
  <div class="flex">
    <div class="shrink" v-if="xiaoshi">
      <div class="Icon" @click="dianji">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="list">
        <el-menu :default-active="this.$route.path" router style="border: none">
          <el-menu-item class="workbench" index="/Planningdesk">
            <img
              src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;规划台
          </el-menu-item>
          <el-menu-item class="workbench" index="/Subproject">
            <img
              src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;我的项目
          </el-menu-item>
          <el-menu-item class="workbench" index="/Subtask">
            <img
              src="../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;我的任务
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      xiaoshi: true,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    // 隐藏显示侧边栏
    dianji() {
      this.xiaoshi = false;
    },
  },

  watch: {},
};
</script>
<style scoped>
.flex {
  display: flex;
}
.shrink {
  border: 1px solid #f4f4f4;
  width: 150px;
  height: 100vh;
  background-color: #e1e1e1;
}
.Icon {
  width: 25px;
  height: 25px;
  background-color: #e8e8e8;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  margin-left: 110px;
  margin-top: 25px;
  cursor: pointer;
}
.list {
  margin-top: 50px;
}
.list p {
  width: 150px;
  height: 50px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}
.list img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
}
.workbench {
  background: #e1e1e1;
}
.workbench:hover {
  background: #f5f5f5;
}
</style>
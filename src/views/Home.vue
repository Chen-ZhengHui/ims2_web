<template>
  <div class="box">
    <div class="sidebar">
      <!-- 头像区域  -->
      <div class="login">
        <img src="../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" />
      </div>
      <el-menu :default-active="this.$route.path" router style="border: none">
        <el-menu-item class="workbench" index="/index">工作台 </el-menu-item>
        <el-menu-item class="workbench" index="/project">我的项目</el-menu-item>
        <el-menu-item class="workbench" index="visualization"
          >项目可视化</el-menu-item
        >
        <el-menu-item class="workbench" index="/chat">消息</el-menu-item>
        <el-menu-item
          class="workbench"
          index=""
          v-cloak
          v-clickoutside="outsideClose"
          @click="show = !show"
          >更多</el-menu-item
        >
      </el-menu>
    </div>
    <div v-show="show" class="dropdown">
      <div class="Task-Kanban">
        <el-menu router style="border: none">
          <el-menu-item
            style="padding-left: 0px"
            class="workbench2"
            index="/approve"
            ><img
              src="../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;&nbsp;审批</el-menu-item
          >
        </el-menu>
        <el-menu router style="border: none">
          <el-menu-item
            style="padding-left: 0px"
            class="workbench2"
            index="/Theme_library"
            ><img
              src="../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;&nbsp;主题库</el-menu-item
          >
        </el-menu>
        <el-menu router style="border: none">
          <el-menu-item
            style="padding-left: 0px"
            class="workbench2"
            index="/Pets"
            ><img
              src="../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;&nbsp;IP宠物</el-menu-item
          >
        </el-menu>
        <el-menu router style="border: none">
          <el-menu-item
            style="padding-left: 0px"
            class="workbench2"
            index="/Functional_label"
            ><img
              src="../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;&nbsp;职能标签</el-menu-item
          >
        </el-menu>
      </div>
    </div>
    <div class="subject">
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
      show: false,
    };
  },
  directives: {
    clickoutside: {
      bind(el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(e);
          }
        }

        function KeyUp(e) {
          if (e.keyCode == 27) {
            if (binding.expression) {
              binding.value(e);
            }
          }
        }
        el.__vueClickOutSize__ = documentHandler;
        el.__vueKeyup__ = KeyUp;

        document.addEventListener("keyup", KeyUp);
        document.addEventListener("click", documentHandler);
      },
      unbind(el, binding) {
        document.removeEventListener("click", el.__vueClickOutSize__);
        delete el.__vueClickOutSize__;

        document.removeEventListener("keyup", el.__vueKeyup__);
        delete el.__vueKeyup__;
      },
    },
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    outsideClose() {
      this.show = false;
    },
    //选中变色
    fn(index) {
      //点击切换 变量的值 赋值为 index
      this.isactive = index;
      console.log(index);
    },
  },

  watch: {},
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
}
.sidebar {
  background-color: #fdfdfd;
  text-align: center;
  padding: 30px 20px;
}
.subject {
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
}
.login img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
}
.workbench {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  background: #f7f7f7;
  margin-top: 30px;
}
.workbench2 {
  width: 300px;
  height: 50px;
  background: #f7f7f7;
  line-height: 50px;
}
.workbench2 img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 20px;
}
.Navigation {
  width: 200px;
  height: 935px;
  background-color: #e0e0e0;
}
.dropdown {
  width: 300px;
  height: 220px;
  box-shadow: darkgrey 0px 0px 10px 0px;
  position: absolute;
  left: 130px;
  top: 590px;
  background-color: #f7f7f7;
  z-index: 999;
}
.Task-Kanban {
  margin-top: 10px;
}
</style>
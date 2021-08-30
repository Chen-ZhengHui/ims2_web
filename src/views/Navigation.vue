<template>
  <div class="box">
    <div class="subject">
      <div class="Navigation">
        <el-menu
          router
          unique-opened
          background-color="#e1e1e1"
          text-color="#000000"
          active-text-color="#409EFF"
          :default-active="this.$route.path"
          :collapse-transition="false"
        >
          <el-menu-item index="/backstage">
            <i class="el-icon-menu"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-submenu index="/">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>组织架构</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/member">成员管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/Enterprise_settings">
            <i class="el-icon-menu"></i>
            <span slot="title">企业设置</span>
          </el-menu-item>
          <el-menu-item index="/account_number">
            <i class="el-icon-setting"></i>
            <span slot="title">账号设置</span>
          </el-menu-item>
          <el-menu-item index="/individualization">
            <i class="el-icon-setting"></i>
            <span slot="title">个性化设置</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      show: true,
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
  width: 1790px;
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

.Navigation {
  width: 200px;
  height: 937px;
  background-color: #e0e0e0;
}
</style>
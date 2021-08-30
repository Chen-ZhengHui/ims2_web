<template>
  <div v-cloak v-clickoutside="outsideClose" class="head_portrait2">
    <div class="head_portrait">
      <el-button type="text" @click="searchForm">
        <svg
          t="1629449745091"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2063"
          width="32"
          height="32"
        >
          <path
            d="M131.41481 765.723624a448.753665 448.753665 0 0 0 492.189377 96.099976 442.97044 442.97044 0 0 0 110.74261-67.429945L951.279266 1011.449171a41.959144 41.959144 0 0 0 30.146599 12.304734 42.451334 42.451334 0 0 0 42.574381-42.574381 42.328286 42.328286 0 0 0-12.304734-30.146599L794.393901 734.223504A448.876712 448.876712 0 0 0 861.331657 273.903389 448.876712 448.876712 0 0 0 273.903635 35.314588 448.261476 448.261476 0 0 0 0.000246 448.630618a447.277097 447.277097 0 0 0 131.414564 317.093006zM85.272056 448.630618A363.358808 363.358808 0 1 1 448.630864 812.112473 363.604903 363.604903 0 0 1 85.272056 448.630618z"
            fill="#bbbbbb"
            p-id="2064"
          ></path>
        </svg>
      </el-button>
      <img @click="show = !show" src="../ac9dd11cd4e95563f35ae1b128184e5.jpg" />
    </div>
    <div class="dropdown" v-show="show" v-for="item in detailed" :key="item.id">
      <div class="img1">
        <div class="img2">
          <img :src="item.starsUrl" alt />
        </div>
        <div class="img3">
          <span>{{ item.name }}</span>
          <p>{{ item.label }}</p>
        </div>
        <div class="img4">
          <el-tag size="small">{{ item.jurisdiction }}</el-tag>
        </div>
      </div>
      <div class="detaileds">
        <div class="Task-Kanban">
          <el-menu router style="border: none">
            <el-menu-item
              style="padding-left: 0px"
              class="workbench"
              index="/account_number"
              ><img
                src="../ac9dd11cd4e95563f35ae1b128184e5.jpg"
              />&nbsp;&nbsp;账号设置</el-menu-item
            >
          </el-menu>
        </div>
        <div class="Task-Kanban">
          <el-menu router style="border: none">
            <el-menu-item
              style="padding-left: 0px"
              class="workbench"
              index="/Enterprise_settings"
              ><img
                src="../ac9dd11cd4e95563f35ae1b128184e5.jpg"
              />&nbsp;&nbsp;企业设置</el-menu-item
            >
          </el-menu>
        </div>
        <div class="Task-Kanban">
          <el-menu router style="border: none">
            <el-menu-item style="padding-left: 0px" class="workbench" index="/"
              ><img
                src="../ac9dd11cd4e95563f35ae1b128184e5.jpg"
              />&nbsp;&nbsp;退出登录</el-menu-item
            >
          </el-menu>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div class="box_footer">
        <div class="Input_box">
          <span
            ><svg
              class="icon"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
            >
              <path
                d="M131.41481 765.723624a448.753665 448.753665 0 0 0 492.189377 96.099976 442.97044 442.97044 0 0 0 110.74261-67.429945L951.279266 1011.449171a41.959144 41.959144 0 0 0 30.146599 12.304734 42.451334 42.451334 0 0 0 42.574381-42.574381 42.328286 42.328286 0 0 0-12.304734-30.146599L794.393901 734.223504A448.876712 448.876712 0 0 0 861.331657 273.903389 448.876712 448.876712 0 0 0 273.903635 35.314588 448.261476 448.261476 0 0 0 0.000246 448.630618a447.277097 447.277097 0 0 0 131.414564 317.093006zM85.272056 448.630618A363.358808 363.358808 0 1 1 448.630864 812.112473 363.604903 363.604903 0 0 1 85.272056 448.630618z"
                fill="#bbbbbb"
                p-id="2326"
              ></path></svg
          ></span>
          <input
            v-model="ruleForm.name"
            type="text"
            placeholder="这是搜索的关键字"
          />
        </div>
        <div></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      ruleForm: [],
      dialogVisible: true,
      show: false,
      detailed: [
        {
          id: 1,
          name: "王思思",
          label: "高级IP设计师",
          jurisdiction: "管理员",
          starsUrl: require("../ac9dd11cd4e95563f35ae1b128184e5.jpg"),
        },
      ],
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
    //搜索遮罩层弹框
    searchForm() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  watch: {},
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
.el-menu-item,
.el-submenu__title {
  height: 30px;
  line-height: 30px;
}
.Task-Kanban {
  margin-top: 10px;
}
.personal {
  width: 100%;
  height: 100%;
}
.personal_data {
  display: flex;
}
.strong {
  width: 1526px;
  height: 60px;
  border: 1px solid red;
  font-size: 25px;
  line-height: 60px;
}
.icon {
  vertical-align: middle;
}
.head_portrait {
  width: 170px;
  height: 50px;
}
.head_portrait img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 87px;
}
.head_portrait2 img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  vertical-align: middle;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid red;
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
.workbench img {
  width: 52px;
  height: 52px;
}
.dropdown {
  width: 300px;
  height: 240px;
  box-shadow: darkgrey 0px 0px 10px 0px;
  position: absolute;
  right: 22px;
  top: 85px;
  padding: 15px 17px;
  background-color: #ffffff;
  z-index: 999;
}
.img1 {
  border-bottom: #ebebeb 1px solid;
  width: 264px;
  height: 70px;
  display: flex;
}
.img2 {
  width: 52px;
  height: 52px;
  display: inline-block;
}
.img3 {
  width: 140px;
  height: 52px;
  display: inline-block;
  margin-left: 5px;
}
.img4 {
  width: 65px;
  height: 52px;
  text-align: center;
  line-height: 52px;
}
.detaileds {
  vertical-align: middle;
  margin-top: 20px;
}
.detaileds img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.detaileds span {
  margin-left: 10px;
  color: #bbbbbb;
  cursor: pointer;
}

.box_footer2 input {
  width: 920px;
  height: 50px;
  border: 1px solid #e5e5e5;
}
.Input_box {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  white-space: nowrap;
}
.Input_box span {
  display: inline-block;
  width: 50px;
  text-align: center;
  line-height: 40px;
}
.Input_box input {
  border: 0;
  outline: none;
  height: 40px;
  width: 837px;
  border-radius: 5px;
}
.box_footer {
  width: 100%;
  height: 500px;
  padding: 10px;
  max-height: 500px;
  overflow: auto;
  border: 1px solid red;
}
.box_footer::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*正常情况下滑块的样式*/
.box_footer::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/

.box_footer:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/

.box_footer::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/

.box_footer::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/

.box_footer::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
</style>
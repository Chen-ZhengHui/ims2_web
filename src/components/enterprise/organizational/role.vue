<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">角色管理</div>
      <personal_information></personal_information>
    </div>
    <div class="content">
      <div class="kuandu">
        <div class="xinjian">
          <p @click="build">
            <img
              src="../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
            />&nbsp;新建角色
          </p>
        </div>
        <el-menu
          style="border: none"
          router
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#409EFF"
          :default-active="this.$route.path"
        >
          <el-menu-item style="width: 200px" index="/creator">
            <i class="el-icon-menu"></i>
            <span slot="title">创建者</span>
          </el-menu-item>
          <el-menu-item style="width: 200px" index="/administrators">
            <i class="el-icon-menu"></i>
            <span slot="title">管理员</span>
          </el-menu-item>
          <el-menu-item style="width: 200px" index="/HR">
            <i class="el-icon-menu"></i>
            <span slot="title">人事</span>
          </el-menu-item>
          <el-menu-item style="width: 200px" index="/Finance">
            <i class="el-icon-document"></i>
            <span slot="title">财务</span>
          </el-menu-item>
          <el-menu-item style="width: 200px" index="/members">
            <i class="el-icon-setting"></i>
            <span slot="title">成员</span>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view />
    </div>
    <el-dialog
      title="新建角色"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form">
        <el-form-item label="">
          <el-input placeholder="请输入角色名" v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import personal_information from "../../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
      },
    };
  },

  components: {
    personal_information,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    build() {
      this.dialogVisible = true;
    },
    //对话框弹出
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
.frame {
  width: 1590px;
  height: 930px;
  padding: 10px 25px;
}
.title {
  width: 1540px;
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
.kuandu {
  height: 839px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
}
.content {
  border: 1px solid red;
  display: flex;
}
.xinjian {
  width: 200px;
  height: 50px;
  line-height: 50px;
  vertical-align: middle;
}
.xinjian p {
  margin-left: 100px;
  cursor: pointer;
}
.xinjian img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
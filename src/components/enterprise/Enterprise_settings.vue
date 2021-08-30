<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">企业设置</div>
      <personal_information></personal_information>
    </div>
    <div class="Basic_information">基本资料</div>
    <div class="box_title">
      <div class="Basic_information_title">
        <div v-if="xiugais">
          <div class="xiugai" @click="modify"><span>修改</span></div>
          <div
            class="Basic_kuang"
            v-for="(item, index) in formlist"
            :key="index"
          >
            <div class="kuang1">
              <img :src="item.IMG" />
            </div>
            <div class="kuang2">
              <p>
                企业名<span class="kuang_span">{{ item.name }}</span>
              </p>
              <p class="kuang_p">
                规模<span class="kuang_span2">{{ item.scale }}</span>
              </p>
            </div>
            <div class="kuang3">
              <p>
                行业<span class="kuang_span3">{{ item.industry }}</span>
              </p>
            </div>
          </div>
          <div class="di_kuang">
            <div class="di_kuang2" @click="jieshan">解散企业</div>
          </div>
        </div>
        <div v-if="xiugais1">
          <div
            class="Basic_kuang"
            v-for="(item, index) in formlist"
            :key="index"
          >
            <div class="kuang1">
              <img :src="item.IMG" />
            </div>
            <div class="kuang_if1">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="企业名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <span class="guimos">规模</span>
                <el-select
                  style="margin-left: 26px"
                  v-model="value"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <span class="guimox">行业</span>
                <el-select
                  style="margin-left: 26px"
                  v-model="value1"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in optionss"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1"
                  >
                  </el-option>
                </el-select>
              </el-form>
            </div>
            <div class="kuang_if2">
              <ul>
                <li @click="baoc">取消</li>
                <li @click="baoc">保存</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="Basic_information">权限转移</div>
      <div class="Basic_information_title2">
        <div class="cjz"><span>创建者</span></div>
        <div class="yhm">
          <span class="yhm1">用户名</span
          ><span class="yhm2" @click="transfer">转移</span>
        </div>
      </div>
    </div>
    <div class="customer_service">客服</div>
    <el-dialog
      title="解散企业"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>解散后将删除所有数据资料，且无法找回，请谨慎操作。</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="xiayibu">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="验证身份"
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose"
    >
      <div class="dialog_nr">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="name">
            <el-input placeholder="" v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="" prop="name">
            <input
              type="text"
              placeholder="请输入6位数的验证码"
              v-model="newcall"
            />&nbsp;&nbsp;&nbsp;
            <span class="count1" v-show="show" @click="getCode"
              >获取验证码</span
            >
            <span v-show="!show" class="count">{{ count }} s</span>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="xiayibu2">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="确认解散"
      :visible.sync="dialogVisible3"
      width="30%"
      :before-close="handleClose"
    >
      <p>
        你的企业将被解散，此操作不可逆，请再次确认要解散的企业：这里显示企业名
      </p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="name">
          <el-input
            placeholder="请输入完整企业名"
            v-model="ruleForm.name"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="xiayibu3">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="验证身份"
      :visible.sync="dialogVisible4"
      width="30%"
      :before-close="handleClose"
    >
      <div class="dialog_nr">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="" prop="name">
            <input
              type="text"
              placeholder="请输入6位数的验证码"
              v-model="newcall"
            />&nbsp;&nbsp;&nbsp;
            <span class="count1" v-show="show" @click="getCode"
              >获取验证码</span
            >
            <span v-show="!show" class="count">{{ count }} s</span>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="xiayibu4">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="添加创建者"
      :visible.sync="dialogVisible5"
      width="30%"
      :before-close="handleClose"
    >
      <p>请选择新的创建者</p>
      <div class="dialog_nr">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input
              placeholder="请输入姓名"
              v-model="ruleForm.name"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible5 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible5 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import personal_information from "../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      xiugais: true,
      xiugais1: false,
      count: "",
      newcall: "",
      show: true,
      ruleForm: {
        name: "三二数字",
      },
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      formlist: [
        {
          id: 1,
          name: "三二数字",
          scale: "50-90人",
          industry: "互联网",
          IMG: "../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg",
        },
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      optionss: [
        {
          value1: "选项1",
          label: "互联网",
        },
        {
          value1: "选项2",
          label: "电商",
        },
        {
          value1: "选项3",
          label: "教育",
        },
        {
          value1: "选项4",
          label: "外贸/制造业",
        },
        {
          value1: "选项4",
          label: "金融/证券/银行",
        },
        {
          value1: "选项4",
          label: "房地产/建筑",
        },
        {
          value1: "选项4",
          label: "其他",
        },
      ],
      value1: "互联网",
      options: [
        {
          value: "选项1",
          label: "1-9人",
        },
        {
          value: "选项2",
          label: "10-99人",
        },
        {
          value: "选项3",
          label: "100-999人",
        },
        {
          value: "选项4",
          label: "1000-9999人",
        },
        {
          value: "选项4",
          label: "9999人以上",
        },
      ],
      value: "50-99人",
    };
  },

  components: {
    personal_information,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    baoc() {
      this.xiugais1 = false;
      this.xiugais = true;
    },
    modify() {
      this.xiugais = false;
      this.xiugais1 = true;
    },
    xiayibu() {
      this.dialogVisible2 = true;
      this.dialogVisible = false;
    },
    xiayibu2() {
      this.dialogVisible3 = true;
      this.dialogVisible2 = false;
    },
    xiayibu3() {
      this.$router.push("/Login");
    },
    xiayibu4() {
      this.dialogVisible5 = true;
      this.dialogVisible4 = false;
    },
    transfer() {
      this.dialogVisible4 = true;
    },
    jieshan() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //手机号60秒验证码
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },

  watch: {},
};
</script>
<style scoped>
.frame {
  width: 1590px;
  height: 920px;
  padding: 10px 20px;
}
.title {
  width: 1550px;
  height: 70px;
  display: flex;
}
.zhiti {
  font-size: 25px;
  color: #000000;
  width: 1380px;
  height: 60px;
  line-height: 60px;
}
.Basic_information {
  margin-top: 10px;
  font-size: 15px;
  color: #000000;
}
.Basic_information_title {
  width: 1550px;
  height: 300px;
  border-radius: 5px;
  background-color: #fdfdfd;
  margin-top: 10px;
}
.xiugai {
  margin-left: 1460px;
  padding: 15px 0px;
}
.xiugai span {
  display: inline-block;
  border: 1px solid #e7e7e7;
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
.Basic_kuang {
  width: 1470px;
  height: 170px;
  border-bottom: 1px solid #e7e7e7;
  margin-left: 40px;
  display: flex;
}
.kuang1 {
  width: 200px;
  height: 170px;
  padding: 30px 0px;
}
.kuang1 img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
}
.kuang2 {
  padding: 30px 0px;
  width: 700px;
  height: 170px;
}
.kuang2 {
  color: #c4c4c4;
}
.kuang_p {
  margin-top: 40px;
}
.kuang_span {
  margin-left: 30px;
  color: #000000;
}
.kuang_span2 {
  margin-left: 45px;
  color: #000000;
}
.kuang3 {
  width: 200px;
  height: 170px;
}
.kuang3 p {
  margin-top: 90px;
  color: #c4c4c4;
}
.kuang_span3 {
  margin-left: 45px;
  color: #000000;
}
.di_kuang {
  width: 1550px;
  height: 80px;
}
.di_kuang2 {
  margin-top: 25px;
  margin-left: 1420px;
  width: 80px;
  height: 25px;
  border: 1px solid #e7e7e7;
  text-align: center;
  line-height: 25px;
  color: #c4c4c4;
  cursor: pointer;
}
.dialog_nr {
  width: 540px;
  height: 100px;
}
.dialog_nr {
  margin-top: 20px;
}
.dialog_nr input {
  border: 0px;
  outline: none;
  width: 422px;
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 5px 15px;
}
.count {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  cursor: pointer;
}
.count1 {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
}
.Basic_information_title2 {
  width: 1550px;
  height: 150px;
  border-radius: 5px;
  background-color: #fdfdfd;
  margin-top: 10px;
}
.cjz {
  width: 1470px;
  height: 40px;
  border-bottom: 1px solid #e7e7e7;
  margin-left: 40px;
}
.cjz span {
  display: inline-block;
  margin-top: 10px;
  color: #3a9dff;
}
.yhm {
  width: 1470px;
  height: 60px;
  line-height: 60px;
  margin-left: 40px;
}
.yhm1 {
  color: #000000;
}
.yhm2 {
  margin-left: 1368px;
  display: inline-block;
  width: 60px;
  height: 30px;
  border: 1px solid #e7e7e7;
  line-height: 30px;
  text-align: center;
  color: #c4c4c4;
  cursor: pointer;
}
.customer_service {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  position: relative;
  top: 200px;
  left: 1460px;
  cursor: pointer;
  background-color: #e8e8e8;
  z-index: 999;
}
.kuang_if1 {
  padding: 30px 0px;
  width: 1000px;
  height: 170px;
}
.guimos {
  margin-left: 45px;
}
.guimox {
  margin-left: 450px;
}
.kuang_if2 {
  width: 270px;
  height: 170px;
  padding: 30px 0px;
}
.kuang_if2 ul li {
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #e9e9e9;
  text-align: center;
  line-height: 20px;
  margin-left: 10px;
  background-color: #e9e9e9;
  cursor: pointer;
}
</style>
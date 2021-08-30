<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">账号设置</div>
      <personal_information></personal_information>
    </div>
    <div class="Basic_information">基本资料</div>
    <div class="box_title" v-for="(item, index) in Formlist" :key="index">
      <div class="Basic_information_title">
        <div class="IMGportrait">
          <img :src="item.IMG" />
        </div>
        <div class="Data_label">
          <div class="Data_li">
            姓名<span class="spanform">{{ item.name }}</span
            ><el-tag class="spanform" size="small">{{ item.department }}</el-tag
            ><svg
              @click="xiugaixm"
              t="1629700814100"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2078"
              width="16"
              height="16"
            >
              <path
                d="M723.571315 555.063351a25.959784 25.959784 0 0 0-25.959783 25.959784v155.740252a25.941333 25.941333 0 0 1-26.015136 25.941334H308.122523a25.941333 25.941333 0 0 1-25.830631-25.941334V373.381766a25.941333 25.941333 0 0 1 25.941333-25.959784h155.795604a25.959784 25.959784 0 0 0 0-51.901117H256.461261a25.959784 25.959784 0 0 0-25.959784 25.959784v467.183856A25.959784 25.959784 0 0 0 256.461261 814.624288h467.110054a25.959784 25.959784 0 0 0 25.959784-25.959783V581.023135a25.959784 25.959784 0 0 0-25.959784-25.959784z"
                p-id="2079"
                fill="#bfbfbf"
              ></path>
              <path
                d="M779.513081 325.502847L727.095351 273.066667a47.270054 47.270054 0 0 0-66.864432 0L408.271568 525.026018a45.111351 45.111351 0 0 0-11.476181 19.502126l-31.716324 111.053261a25.830631 25.830631 0 0 0 31.93773 31.956181l111.053261-31.734775a45.111351 45.111351 0 0 0 19.502126-11.47618l251.940901-251.959352a47.270054 47.270054 0 0 0 0-66.864432zM409.470847 643.127351l22.657153-77.713297 55.056144 55.056144zM528.236396 579.344144a13.173622 13.173622 0 0 1-18.634955 0l-36.421189-36.347387a13.173622 13.173622 0 0 1 0-18.634955l153.489298-153.507748 55.056144 55.056144z m210.150631-210.058378l-24.926559 24.908108-55.056144-55.056144 24.926559-24.926559a10.719712 10.719712 0 0 1 15.16627 0l39.889874 39.908324a10.719712 10.719712 0 0 1 0 15.166271z"
                p-id="2080"
                fill="#bfbfbf"
              ></path>
            </svg>
          </div>
          <div class="Data_li">
            部门<span class="spanform">{{ item.position }}</span>
          </div>
          <div class="Data_li">
            职位<span class="spanform">{{ item.jurisdiction }}</span>
          </div>
        </div>
      </div>
      <div class="Basic_information">账号安全</div>
      <div class="Basic_information_title">
        <div class="Account_security">
          <p>
            手机号<span class="span0">{{ item.number }}</span
            ><span class="span_0" @click="xiugaisjh">修改</span>
          </p>
          <p>
            邮箱<span class="span3">{{ item.mailbox }}</span
            ><span class="span_3" @click="xiugaiyx">修改邮箱</span>
          </p>
          <p>
            登陆密码<span class="span1"
              ><span class="span2" @click="xiugaimima">修改密码</span
              ><span>，如果你忘记了当前密码可以通过</span
              ><span class="span2" @click="Reset">手机验证重置</span
              >你的密码</span
            >
          </p>
        </div>
      </div>
      <div class="Basic_information">职能标签</div>
      <div class="Basic_information_titles">
        <div class="labels">
          <el-tag
            style="margin-left: 10px"
            v-for="item in item.label"
            :key="item"
            size="small"
            >{{ item }}</el-tag
          >
          <svg
            @click="jia"
            t="1629710958761"
            class="icons"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3065"
            width="32"
            height="32"
          >
            <path
              d="M546.133333 477.866667h136.533334v68.266666h-136.533334v136.533334h-68.266666v-136.533334h-136.533334v-68.266666h136.533334v-136.533334h68.266666v136.533334z m-34.133333 341.333333a307.2 307.2 0 1 0 0-614.4 307.2 307.2 0 0 0 0 614.4z m0 68.266667C304.64 887.466667 136.533333 719.36 136.533333 512S304.64 136.533333 512 136.533333s375.466667 168.106667 375.466667 375.466667-168.106667 375.466667-375.466667 375.466667z"
              p-id="3066"
              fill="#1d92ff"
            ></path>
          </svg>
        </div>
        <div class="customer_service">客服</div>
      </div>
    </div>
    <el-dialog
      title="更改姓名"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="form">
          <el-form-item label="">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="complete">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose"
    >
      <div class="nrs">
        <div><h1>修改成功</h1></div>
        <el-button
          class="buttons"
          type="primary"
          @click="dialogVisible2 = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      title="更改密码"
      :visible.sync="dialogVisible3"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <p class="form_p" @click="wangjimm">忘记密码?</p>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible3 = false"
          >下一步</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="重置密码"
      :visible.sync="dialogVisible4"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <p>请输入发送到 +8613728282899的验证码</p>
        <div class="Verification">
          <input type="text" placeholder="请输入6位验证码" v-model="newcall" />
          <span class="count1" v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count">{{ count }} s</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="qrxiugaisjh">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="更改邮箱"
      :visible.sync="dialogVisible5"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input
              placeholder="请输入新的手机号"
              v-model="form.number"
            ></el-input>
            <div class="Verification">
              <input
                type="text"
                placeholder="请输入6位验证码"
                v-model="newcall"
              />&nbsp;&nbsp;&nbsp;
              <span class="count1" v-show="show" @click="getCode"
                >获取验证码</span
              >
              <span v-show="!show" class="count">{{ count }} s</span>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible5 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible5 = false"
          >下一步</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="更改邮箱"
      :visible.sync="dialogVisible6"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <p>请输入发送到 12399990000@gmail.com的验证码</p>
        <div class="Verification">
          <input
            type="text"
            placeholder="请输入6位验证码"
            v-model="newcall"
          />&nbsp;&nbsp;&nbsp;
          <span class="count1" v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count">{{ count }} s</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible6 = false">取 消</el-button>
        <el-button type="primary" @click="rqxiugaiyx">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="更改邮箱"
      :visible.sync="dialogVisible7"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input
              placeholder="请输入新的邮箱"
              v-model="form.mailbox"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible7 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible7 = false"
          >下一步</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="更改密码"
      :visible.sync="dialogVisible8"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible8 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible8 = false"
          >下一步</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import personal_information from "../../assets/personal-information/personal_information.vue"; //个人信息
export default {
  name: "",
  props: [""],
  data() {
    return {
      newcall: "",
      count: "",
      show: true,
      dialogVisible: false, //姓名
      dialogVisible2: false, //成功弹框
      dialogVisible3: false, //修改密码
      dialogVisible4: false, //手机验证重置
      dialogVisible5: false, //确认修改手机号
      dialogVisible6: false, //修改邮箱
      dialogVisible7: false, //确认邮箱修改
      dialogVisible8: false, //确认新密码
      form: {
        name: "王思思",
        password: "123456",
        mailbox: "18574433216@gmail.com",
        number: "18574433216",
      },
      Formlist: [
        {
          id: 1,
          name: "王思思",
          department: "设计部",
          position: "高级IP设计师",
          jurisdiction: "管理员",
          number: "18574433216",
          mailbox: "18574433216@gmail.com",
          IMG: "../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg",
          label: [
            "品牌设计",
            "UI设计",
            "品牌IP设计",
            "平面设计",
            "美术概念设计",
          ],
        },
      ],
    };
  },
  components: {
    personal_information,
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    //忘记密码
    wangjimm() {
      this.dialogVisible4 = true;
    },
    //确认修改手机号
    qrxiugaisjh() {
      this.dialogVisible5 = true;
      this.dialogVisible4 = false;
      this.dialogVisible2 = true;
    },
    //修改手机号
    xiugaisjh() {
      this.dialogVisible4 = true;
    },
    //修改邮箱
    xiugaiyx() {
      this.dialogVisible6 = true;
    },
    // 标签
    jia() {
      alert(1);
    },
    //确认修改邮箱
    rqxiugaiyx() {
      this.dialogVisible7 = true;
      this.dialogVisible6 = false;
      this.dialogVisible2 = true;
    },
    //修改密码
    xiugaimima() {
      this.dialogVisible3 = true;
      this.dialogVisible8 = true;
      this.dialogVisible2 = true;
    },
    //手机验证重置
    Reset() {
      this.dialogVisible4 = true;
    },
    //修改姓名
    xiugaixm() {
      this.dialogVisible = true;
    },
    //弹出框姓名
    complete() {
      this.dialogVisible2 = true;
      this.dialogVisible = false;
    },
    //弹出框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //验证码
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
.Basic_information {
  font-size: 15px;
  color: #000000;
}
.Basic_information_title {
  margin-top: 10px;
  width: 1540px;
  height: 200px;
  border-radius: 5px;
  background-color: #fdfdfd;
  display: flex;
  margin-bottom: 10px;
}
.Basic_information_titles {
  margin-top: 10px;
  width: 1540px;
  height: 300px;
  border-radius: 5px;
  background-color: #fdfdfd;
  display: flex;
  margin-bottom: 10px;
}
.IMGportrait {
  width: 170px;
  height: 200px;
  line-height: 110px;
}
.IMGportrait img {
  margin-left: 30px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.Data_label {
  margin-left: 50px;
}
.Data_li {
  margin-top: 30px;
  color: #7e7e7e;
}
.spanform {
  margin-left: 50px;
}
.spanlabel {
  display: inline-block;
  background-color: #cae5ff;
  width: 55px;
  text-align: center;
  margin-left: 30px;
  color: #57aeff;
  font-size: 12px;
  vertical-align: middle;
}
.icon {
  vertical-align: middle;
  margin-left: 70px;
}
.icons {
  vertical-align: middle;
  margin-left: 10px;
}
.Account_security {
  padding: 20px 30px;
}
.Account_security p {
  margin-top: 23px;
  color: #7e7e7e;
}
.span0 {
  margin-left: 90px;
  color: #000000;
}
.span1 {
  margin-left: 80px;
}
.span2 {
  color: #57aeff;
  cursor: pointer;
}
.span3 {
  margin-left: 105px;
  color: #000000;
}
.customer_service {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  position: relative;
  top: 220px;
  left: -10px;
  cursor: pointer;
  background-color: #e8e8e8;
  z-index: 999;
}
.labels {
  margin-left: 30px;
  margin-top: 30px;
  width: 1450px;
  height: 250px;
}
.nrs {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  text-align: center;
}
.buttons {
  width: 300px;
}
.Verification {
  margin-top: 20px;
}
.Verification input {
  border: 0px;
  outline: none;
  width: 420px;
  height: 40px;
  border: 1px solid #b6b6b6;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
}
.count {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #8f8f8f;
  background-color: #cccccc;
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
  background-color: #cccccc;
  border-radius: 5px;
}
.span_0 {
  color: red;
  margin-left: 280px;
  cursor: pointer;
}
.span_3 {
  color: red;
  margin-left: 200px;
  cursor: pointer;
}
.form_p {
  color: #409eff;
  cursor: pointer;
}
</style>
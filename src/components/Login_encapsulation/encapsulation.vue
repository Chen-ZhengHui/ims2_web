<template>
  <div class="Sign_in">
    <!-- 登录模块 -->
    <div v-if="register">
      <div class="title">登录</div>
      <div class="content">
        <span @click="cur = 0" :class="{ active: cur == 0 }">手机号</span>
        <span @click="cur = 1" :class="{ active: cur == 1 }">账号密码</span>
      </div>
      <div v-show="cur == 0" class="Cbody_item">
        <div class="number">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm">
            <div class="Input_box">
              <span>+86&nbsp;|&nbsp;</span>
              <input
                v-model="ruleForm.name"
                type="text"
                placeholder="请输入你的手机号"/>
            </div>
            <div v-if="time" class="Verification">
              <input
                type="text"
                placeholder="请输入6位数的验证码"
                v-model="newcall"/>&nbsp;&nbsp;&nbsp;
              <span class="count1" v-show="show" @click="getCode">获取验证码</span>
              <span v-show="!show" class="count">{{ count }} s</span>
            </div>
            <el-checkbox style="margin-top: 20px" v-model="isRemeber">一周内免登录
            </el-checkbox>
          </el-form>
          <input
            style="width: 100%; border-radius: 4px"
            type="submit"
            @click="submitForm()"
            value="下一步"/>
        </div>
        <div @click="register1" style="text-align: center; cursor: pointer">注册账号</div>
      </div>
      <div v-show="cur == 1" class="Cbody_item2">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
          <el-form-item prop="name" style="margin-left: -100px">
            <el-input v-model="ruleForm.name"
              placeholder="请输入你的手机号/姓名/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="password" style="margin-left: -100px">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-checkbox v-model="isRemeber">一周内免登录 </el-checkbox>
        </el-form>
        <input
          style="width: 100%; border-radius: 4px"
          type="submit"
          @click="submitForm2"
          value="下一步"/>
      </div>
    </div>
    <div v-if="register2">
      <div class="register_ye">
        <div style="cursor: pointer" @click="return1">< 返回</div>
        <div class="yangshe">
          <h2><strong>注册</strong></h2>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
          <div class="Input_box">
            <span>+86&nbsp;|&nbsp;</span>
            <input
              v-model="ruleForm.number"
              type="text"
              placeholder="请输入你的手机号"/>
          </div>
          <div v-if="time2" class="Verification3">
            <input
              type="text"
              placeholder="请输入6位数的验证码"
            />&nbsp;&nbsp;&nbsp;
            <span class="count1" v-show="show" @click="getCode">获取验证码</span>
            <span v-show="!show" class="count">{{ count }} s</span>
          </div>
        </el-form>
        <input
          style="width: 100%; border-radius: 4px"
          type="submit"
          value="下一步"
          @click="submitForm3"/>
      </div>
    </div>
    <div v-if="Perfect">
      <div class="yangshe1">
        <h2><strong>完善信息</strong></h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请填写你的真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请设置密码,不少于8位字符"
            ></el-input>
          </el-form-item>
        </el-form>
        <input
          style="width: 100%; border-radius: 4px"
          type="submit"
          value="下一步"
          @click="submitForm4()"/>
      </div>
    </div>
    <div v-if="instructions">
      <div class="yangshe1">
        <h2><strong>欢迎使用</strong></h2>
        请选择加入或创建团队
        <div class="frame" @click="join1">
          <span>加入团队</span>
          <svg
            style="margin-top: 25px; margin-left: 180px"
            t="1628931400941"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2018"
            width="32"
            height="32">
            <path
              d="M319 923c-6.4 0-12.8-2.4-17.7-7.3-9.8-9.8-9.8-25.6 0-35.4L669.6 512 301.3 143.7c-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0l386 386c9.8 9.8 9.8 25.6 0 35.4l-386 386c-4.9 4.9-11.3 7.3-17.7 7.3z"
              fill="#ffffff"
              p-id="2019"></path>
          </svg>
        </div>
        <div class="frame" v-if="establish" @click="establish1">
          <span>创建团队</span
          ><svg
            style="margin-top: 25px; margin-left: 180px"
            t="1628931400941"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2018"
            width="32"
            height="32">
            <path
              d="M319 923c-6.4 0-12.8-2.4-17.7-7.3-9.8-9.8-9.8-25.6 0-35.4L669.6 512 301.3 143.7c-9.8-9.8-9.8-25.6 0-35.4 9.8-9.8 25.6-9.8 35.4 0l386 386c9.8 9.8 9.8 25.6 0 35.4l-386 386c-4.9 4.9-11.3 7.3-17.7 7.3z"
              fill="#ffffff"
              p-id="2019"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div v-if="join2" class="register_ye">
      <div style="cursor: pointer" @click="return1">< 返回</div>
      <div class="yangshe">
        <h2><strong>加入团队</strong></h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入团队码"
            ></el-input>
          </el-form-item>
        </el-form>
        <input
          style="width: 100%; border-radius: 4px"
          type="submit"
          value="下一步"/>
      </div>
    </div>
    <div class="register_ye" v-if="join3">
      <div style="cursor: pointer" @click="return1">< 返回</div>
      <div class="yangshe">
        <h2><strong>创建团队</strong></h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请填写团队名称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="region">
            <el-select
              v-model="ruleForm.region"
              placeholder="请选择团队规模"
              style="width: 363px">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <input
          style="width: 100%; border-radius: 4px"
          type="submit"
          value="下一步"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      newcall: "",
      show: true,
      count: "",
      timer: null,
      register: true,
      register2: false,
      Perfect: false,
      time: false,
      time2: false,
      instructions: false,
      join: true,
      establish: true,
      join2: false,
      join3: false,
      isRemeber: false, //7天勾线按钮
      cur: 0, //默认选中第一个tab
      ruleForm: {
        name: "",
        password: "",
        region: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择团队规模", trigger: "change" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  components: {},
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {
    establish1() {
      this.instructions = false;
      this.join3 = true;
    },
    join1() {
      this.instructions = false;
      this.join2 = true;
    },
    //登录手机号验证码
    submitForm() {
      this.time = true;
    },
    submitForm2() {
      this.$router.push("/Home");
    },
    //注册手机号验证码
    submitForm3() {
      this.time2 = true;
      this.Perfect = true;
      this.register2 = false;
    },
    submitForm4() {
      this.Perfect = false;
      this.instructions = true;
    },
    return1() {
      this.register2 = false;
      this.register = true;
      this.join2 = false;
      this.join3 = false;
    },
    register1() {
      this.register = false;
      this.register2 = true;
    },
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
.Sign_in {
  margin: 187px 70px;
  width: 71%;
  height: 60%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(12px);
  background: #cccccc;
}
.title {
  width: 100%;
  height: 120px;
  line-height: 120px;
  padding: 43px;
  font-size: 30px;
  color: #83888f;
  border-radius: 10px;
}
.content {
  width: 100%;
  height: 30px;
  margin-top: 35px;
}
.content span {
  margin-left: 45px;
  cursor: pointer;
  font-size: 14px;
}
.active {
  border-bottom: 2px solid #fff;
  color: #fff;
}
.Cbody_item {
  width: 80%;
  height: 200px;
  margin-left: 45px;
}
.Input_box {
  width: 100%;
  height: 44px;
  line-height: 43px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  white-space: nowrap;
}
.Input_box span {
  margin-left: 15px;
}
.Input_box input {
  border: 0;
  outline: none;
  height: 40px;
  width: 86%;
  background-color: #cccccc;
  border-radius: 5px;
}
.Cbody_item input[type="submit"] {
  height: 40px;
  margin: 0 auto;
  padding-left: 16px;
  outline: none;
  border: 1px solid #1c65ff;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #1c65ff;
  color: #fff;
  cursor: pointer;
}
.Cbody_item2 {
  width: 80%;
  height: 200px;
  margin-left: 40px;
}
.Cbody_item2 input[type="submit"] {
  height: 40px;
  margin: 0 auto;
  padding-left: 16px;
  outline: none;
  border: 1px solid #1c65ff;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #1c65ff;
  color: #fff;
  cursor: pointer;
}
.register_ye {
  width: 80%;
  height: 300px;
  margin-left: 45px;
  padding: 100px 0px;
}
.demo-ruleForm {
  margin-top: 20px;
}
.register_ye input[type="submit"] {
  height: 40px;
  margin: 0 auto;
  padding-left: 16px;
  outline: none;
  border: 1px solid #1c65ff;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #1c65ff;
  color: #fff;
  cursor: pointer;
}
.yangshe h2 {
  color: #83888f;
}
.count {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #8f8f8f;
  background-color: #c7c7c7;
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
.Verification {
  margin-top: 20px;
}
.Verification input {
  border: 0px;
  outline: none;
  width: 248px;
  height: 40px;
  border: 1px solid #b6b6b6;
  background-color: #cccccc;
  border-radius: 5px;
  padding: 5px 15px;
}
.Verification3 {
  margin-top: 20px;
}
.Verification3 input {
  border: 0px;
  outline: none;
  width: 248px;
  height: 40px;
  border: 1px solid #b6b6b6;
  background-color: #cccccc;
  border-radius: 5px;
  padding: 5px 15px;
}
.yangshe1 {
  width: 100%;
  height: 440px;
  padding: 90px 40px;
}
.yangshe1 input[type="submit"] {
  height: 40px;
  margin: 0 auto;
  padding-left: 16px;
  outline: none;
  border: 1px solid #1c65ff;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #1c65ff;
  color: #fff;
  cursor: pointer;
}
.frame {
  cursor: pointer;
  border: 1px solid #8f8f8f;
  width: 100%;
  height: 80px;
  border-radius: 5px;
  line-height: 80px;
  margin-top: 20px;
  display: flex;
}
.frame span {
  padding: 0px 40px;
  color: #8f8f8f;
}
</style>
<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">个性化设置</div>
      <personal_information></personal_information>
    </div>
    <div class="Basic_information">更改背景</div>
    <div>
      <div class="Basic_information_title">
        <div class="Basic_information_titles">
          <div class="kuang">默认</div>
          <div class="kuang">默认</div>
          <div class="kuang">默认</div>
          <div class="kuang">默认</div>
        </div>
      </div>
      <div class="Basic_information">IP宠物</div>
      <div class="Basic_information_titless">
        <div class="customer_service">客服</div>
        <div class="Basic_information_titlesss">
          <div class="qiy">
            <span>启用</span
            ><el-switch
              v-model="value"
              active-color="#409eff"
              inactive-color="#f4f4f4"
              style="margin-left: 120px; vertical-align: middle"
            >
            </el-switch
            ><span class="qiy_span">开启IP宠物</span>
          </div>
          <div class="qiy_div">
            <div>宠物选择</div>
            <div class="moren">默认</div>
            <div class="gengduo">更多(跳转购买)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personal_information from "../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {
      value: true,
    };
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
.frame {
  width: 1590px;
  height: 920px;
  padding: 10px 25px;
}
.title {
  width: 1590px;
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
  height: 350px;
  border-radius: 5px;
  background-color: #fdfdfd;
  display: flex;
  margin-bottom: 10px;
  padding: 75px 50px;
}
.Basic_information_titles {
  width: 1440px;
  height: 200px;
  padding: 49px 0px;
}
.kuang {
  width: 200px;
  height: 100px;
  display: inline-block;
  margin-left: 30px;
  background-color: #f5f5f5;
  text-align: center;
  line-height: 100px;
}
.Basic_information_titless {
  margin-top: 10px;
  width: 1540px;
  height: 400px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 0px 40px;
}
.Basic_information_titlesss {
  width: 1400px;
  height: 300px;
}
.customer_service {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  position: relative;
  top: 300px;
  left: 1420px;
  cursor: pointer;
  background-color: #e8e8e8;
  z-index: 999;
}
.qiy {
  vertical-align: middle;
}
.qiy_span {
  margin-left: 20px;
  vertical-align: middle;
}
.qiy_div {
  margin-top: 50px;
  display: flex;
}
.moren {
  width: 120px;
  height: 120px;
  margin-left: 90px;
  text-align: center;
  line-height: 120px;
  background-color: #f3f3f3;
}
.gengduo {
  width: 120px;
  height: 120px;
  margin-left: 40px;
  text-align: center;
  line-height: 120px;
  background-color: #f3f3f3;
}
</style>
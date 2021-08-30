<template>
  <div class="content-box">
    <div class="Left">ss</div>
    <div class="right">
      <div class="screen" @click="screen">
        <img src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" />
      </div>
      <div class="newlybuild" @click="newlybuild">
        <img src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    //筛选操作
    screen() {
      alert("筛选操作");
    },
    //新建操作
    newlybuild() {
      alert("新建操作");
    },
  },

  watch: {},
};
</script>
<style scoped>
.content-box {
  width: 100%;
  height: 810px;
  display: flex;
  border: 1px solid red;
}
.Left {
  width: 1700px;
  height: 830px;
  border: 1px solid red;
  margin-left: 10px;
}
.right {
  width: 5%;
  height: 830px;
  border: 1px solid red;
  text-align: center;
}
.screen {
  margin-top: 15px;
}
.newlybuild {
  margin-top: 15px;
}
.newlybuild img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.screen img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
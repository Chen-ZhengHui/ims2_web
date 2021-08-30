<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">成员管理</div>
      <personal_information></personal_information>
    </div>
  </div>
</template>

<script>
import personal_information from "../../../assets/personal-information/personal_information.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {};
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
  width: 1540px;
  height: 920px;
}
.title {
  width: 1540px;
  height: 70px;
  display: flex;
  padding: 10px 25px;
}
.zhiti {
  font-size: 25px;
  color: #000000;
  width: 1540px;
  height: 60px;
  line-height: 60px;
}
</style>
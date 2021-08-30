<template>
  <div class="box">
    <div class="baikan"></div>
    <div class="baikan"></div>
    <div class="baikan">
      <encapsulation></encapsulation>
    </div>
  </div>
</template>

<script>
import Index from "../components/workbench/index.vue";
import encapsulation from "../components/Login_encapsulation/encapsulation.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: { Index, encapsulation },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style scoped>
.box {
  background-image: url("../../public/pic.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
}
.baikan {
  width: 34%;
  height: 100%;
}
</style> 
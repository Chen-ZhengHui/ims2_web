<template>
  <div class="box">
    <draggable
      v-model="arr1"
      group="site"
      animation="300"
      dragClass="dragClass"
      ghostClass="ghostClass"
      chosenClass="chosenClass"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group>
        <div class="item" v-for="item in arr1" :key="item.id">
          <div class="title">
            <div class="abnormal">
              {{ item.name }}
            </div>
            <div class="normal">{{ item.name1 }}</div>
          </div>
          <div class="date">
            <span>{{ item.name2 }}</span>
          </div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "",
  props: [""],
  data() {
    return {
      drag: false,
      arr1: [
        {
          id: 1,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
        {
          id: 2,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
        {
          id: 3,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
        {
          id: 4,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
        {
          id: 5,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
        {
          id: 6,
          name: "持续提升续约能力持续提升续约能力持续提升续约能力",
          name1: "可视化大屏",
          name2: "07月27日(今天)",
        },
      ],
    };
  },

  components: {
    draggable,
  },
  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },

  watch: {},
};
</script>
<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: #f7f7f7 !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: #282c34 !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}

.item {
  width: 590px;
  height: 70px;
  display: flex;
  cursor: pointer;
}
.item:hover {
  background-color: #f7f7f7;
}
.normal {
  font-size: 12px;
  color: #c4c4c4;
}
.abnormal {
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  font-size: 15px;
  width: 200px;
  padding: 10px;
}
.date {
  width: 390px;
  font-size: 15px;
  padding: 10px;
  font-weight: 800;
}
.date span {
  float: right;
}
.box {
  width: 100%;
  height: 100%;
  padding: 10px;
  max-height: 500px;
  overflow: auto;
}
.box::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*正常情况下滑块的样式*/
.box::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/

.box:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/

.box::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/

.box::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/

.box::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
</style>
<template>
  <div class="frame">
    <div class="title">
      <div class="zhiti">职能标签</div>
      <personal_information></personal_information>
    </div>
    <div class="content">
      <div class="jianto">
        <svg
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          @click="prev"
        >
          <path
            d="M896 544H193.3312a32 32 0 1 1 0-64H896a32 32 0 0 1 0 64z"
            fill="#b0b0b0"
            p-id="2703"
          ></path>
          <path
            d="M426.5984 798.72a31.8976 31.8976 0 0 1-22.6304-9.3696L126.8736 512 403.968 234.9056a32 32 0 0 1 45.2608 45.2608L217.3952 512l231.8336 231.8336A32 32 0 0 1 426.5984 798.72z"
            fill="#b0b0b0"
            p-id="2704"
          ></path>
        </svg>
        <svg
          class="icons"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          @click="next"
        >
          <path
            d="M825.6 544H128.7168a32 32 0 1 1 0-64h696.8832a32 32 0 0 1 0 64z"
            fill="#b0b0b0"
            p-id="3584"
          ></path>
          <path
            d="M597.4528 798.72a32 32 0 0 1-22.6304-54.6304L806.656 512l-231.8336-231.8336a32 32 0 1 1 45.2608-45.2608L897.1264 512l-277.0432 277.0944a31.8976 31.8976 0 0 1-22.6304 9.6256z"
            fill="#b0b0b0"
            p-id="3585"
          ></path>
        </svg>
      </div>
      <div class="label_list">
        <div class="zhengti">
          <div
            class="zhengti2"
            :style="{
              'margin-left': num * 210 + 'px',
              transition: 'all .3s ease-out .1s',
            }"
          >
            <div class="zhengti3" v-for="(item, index) in aa" :key="index">
              <div class="zhengti4">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="Basic_information">
        职能标签<span class="xjbq" @click="build">新建标签</span>
      </div>
      <div class="label">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="标签名" width="180">
          </el-table-column>
          <el-table-column
            style="color: #3a9dff"
            prop="name"
            label="关键词"
            width="1200"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      num: 0,
      aa: [
        "特效",
        "漫画",
        "设计",
        "视频",
        "音乐",
        "市场",
        "特效",
        "编程",
        "编程",
        "编程",
        "编程",
        "编程",
        "编程",
        "编程",
        "编程",
        "特效",
      ],
      tableData: [
        {
          date: "品牌IP设计",
          name: [
            "IP设计，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "品牌文化",
          ],
        },
        {
          date: "平面设计",
          name: [
            "IP设计，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "吉祥物，",
            "品牌形象，",
            "品牌文化",
          ],
        },
        {
          date: "美术概念设计",
          name: [
            "IP设计，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "吉祥物",
          ],
        },
        {
          date: "美术概念设计",
          name: [
            "IP设计，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "吉祥物，",
            "品牌形象，",
            "品牌文化，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "品牌文化IP形象...",
          ],
        },
        {
          date: "美术概念设计",
          name: [
            "IP设计，",
            "IP形象，",
            "IP定制，",
            "卡通形象，",
            "吉祥物，",
            "品牌形象，",
            "吉祥物，",
            "品牌形象，",
            "品牌文化",
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
    //新建标签
    build() {
      alert(1);
    },
    //点击左边
    prev() {
      if (this.num < 0) {
        this.num += 1;
      }
    },
    //点击右边
    next() {
      if (this.num > -(this.aa.length + this.num)) {
        this.num -= 1;
      } else if (
        this.num < -(this.aa.length + this.num) &&
        -(this.aa.length + this.num) != -0
      ) {
        this.num -= 1;
      }
    },
  },

  watch: {},
};
</script>
<style scoped>
.frame {
  width: 1790px;
  height: 920px;
  padding: 10px 25px;
}
.title {
  width: 1790px;
  height: 60px;
  display: flex;
}
.zhiti {
  font-size: 25px;
  color: #000000;
  width: 1570px;
  height: 60px;
  line-height: 60px;
}
.content {
  width: 1740px;
  height: 840px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px 35px;
}
.jianto {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 96px;
  margin-left: 1580px;
  cursor: pointer;
}
.icons {
  margin-left: 30px;
}
.label_list {
  width: 1670px;
  height: 60px;
}
.zhengti {
  width: 1670px;
  overflow: hidden;
}
.zhengti2 {
  display: flex;
}
.zhengti3 {
  border: 1px solid #b5b5b5;
  width: 202px;
  height: 52px;
  margin-right: 10px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
}
.zhengti4:hover {
  background-color: #efefef;
  border-radius: 5px;
  cursor: pointer;
}
.zhengti4 {
  width: 200px;
  height: 50px;
}
.label {
  width: 1670px;
  height: 100px;
  margin-top: 10px;
}
.Basic_information {
  width: 1670px;
  height: 80px;
  line-height: 80px;
  font-size: 15px;
  color: #000000;
}
.xjbq {
  cursor: pointer;
  margin-left: 1528px;
  border: 1px solid #e2e2e2;
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
<template>
  <div class="box1">
    <div @click="xiangxi">
      <div class="box" v-for="item in arr1" :key="item.id">
        <div class="left">
          <div class="biaoti">
            <p>
              <span class="span1">{{ item.name }}</span>
              <span class="span2">{{ item.name2 }}</span>
            </p>
            <span class="span3">负责人：{{ item.name3 }}</span
            ><span class="span4">成员:{{ item.name4 }}人</span>
            <span class="span5">任务数:{{ item.name5 }}个</span>
          </div>
        </div>
        <div class="right">
          <div class="rights">任务进度:</div>
          <div class="rightss" style="width: 400px">
            <el-progress :percentage="50" color="#409eff"></el-progress>
          </div>
       </div>
      </div>
    </div>
    <el-dialog
      title="可视化大屏设计"
      :visible.sync="dialogVisible"
      width="65%"
      :before-close="handleClose"
    >
      <div class="content_nr">
        <div class="content_nr2">
          <p>王思思</p>
          <p>创建于2021/09/08</p>
          <p class="content_img">
            <img src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg" />起止时间
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      dialogVisible: false,
      arr1: [
        {
          id: 1,
          name: "可视化大屏设计",
          name2: "准备中",
          name3: "王思思",
          name4: "23",
          name5: "21",
        },
        {
          id: 2,
          name: "旺吉电厂三期扩建",
          name2: "已启动",
          name3: "王思思",
          name4: "4",
          name5: "3",
        },
        {
          id: 3,
          name: "年产4.5万吨乙醇酸项目",
          name2: "交互中",
          name3: "王思思",
          name4: "23",
          name5: "21",
        },
        {
          id: 4,
          name: "勇敢牛牛，不怕困难",
          name2: "已启动",
          name3: "王思思",
          name4: "20",
          name5: "10",
        },
      ],
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    xiangxi() {
      this.dialogVisible = true;
    },
    //确认关闭
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
.box1 {
  padding: 10px 10px;
}
.box {
  width: 1760px;
  height: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  margin-top: 10px;
}
.left {
  width: 1000px;
  height: 120px;
  padding: 20px;
  display: inline-block;
}

.span1 {
  font-size: 18px;
}
.span2 {
  width: 50px;
  height: 20px;
  text-align: center;
  display: inline-block;
  background-color: #e8e8e8;
  border-radius: 5px;
  margin-left: 20px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.8);
}
.span3 {
  width: 120px;
  height: 20px;
  text-align: center;
  display: inline-block;
  background-color: #e8e8e8;
  border-radius: 5px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.9);
}
.span4 {
  margin-left: 20px;
  width: 80px;
  height: 20px;
  text-align: center;
  display: inline-block;
  background-color: #e8e8e8;
  border-radius: 5px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.9);
}
.span5 {
  margin-left: 20px;
  width: 90px;
  height: 20px;
  text-align: center;
  display: inline-block;
  background-color: #e8e8e8;
  border-radius: 5px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.9);
}
.biaoti {
  margin-top: 10px;
}
.right {
  width: 600px;
  height: 120px;
  display: flex;
}
.rights {
  margin-top: 87px;
}
.rightss {
  margin-top: 90px;
  margin-left: 10px;
}
.rightsss {
  margin-top: 87px;
  margin-left: 10px;
}
.content_nr {
  width: 100%;
  height: 530px;
  border: 1px solid red;
}
.content_nr2 {
  line-height: 30px;
  width: 100%;
  height: 30px;
  border: 1px solid red;
  display: flex;
}
.content_img img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
    overflow: hidden;
}
</style>
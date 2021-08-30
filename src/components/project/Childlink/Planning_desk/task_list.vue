<template>
  <div class="content">
    <div class="content_box">
      <strong>可视化大屏</strong>
      &nbsp;&nbsp;<img
        src="../../../../assets/ac9dd11cd4e95563f35ae1b128184e5.jpg"
      /><span class="Publish">发布任务</span>
    </div>

    <div class="comtent_box2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <el-table :data="tableDatas" stripe style="width: 100%">
            <el-table-column prop="name" width="280"> </el-table-column>
            <el-table-column prop="person" width="290"> </el-table-column>
            <el-table-column prop="Number" width="280"> </el-table-column>
            <el-table-column prop="time" width="280"> </el-table-column>
            <el-table-column prop="state" width="280"> </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >详细</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template></el-table-column
            >
          </el-table>
        </el-table-column>
        <el-table-column label="任务名" prop="name"> </el-table-column>
        <el-table-column label="负责人" prop="person "> </el-table-column>
        <el-table-column label="成员数" prop="Number "> </el-table-column>
        <el-table-column label="到期时间" prop="time"> </el-table-column>
        <el-table-column label="状态" prop="state"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >详细</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >完成</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      tableDatas: [
        {
          name: "市场调研-市场部",
          person: "王思思",
          Number: "1",
          time: "2021/08/06",
          state: "已完成",
        },
        {
          name: "市场调研-市场部",
          person: "王思思",
          Number: "1",
          time: "2021/08/06",
          state: "已完成",
        },
        {
          name: "市场调研-市场部",
          person: "王思思",
          Number: "1",
          time: "2021/08/06",
          state: "已完成",
        },
      ],
      tableData: [
        {
          name: "前期",
          person: "王思思",
          Number: "1",
          time: "2021/08/06",
          state: "进行中",
        },
        {
          name: "前期",
          person: "王思思",
          Number: "2",
          time: "2021/08/06",
          state: "已完成",
        },
        {
          name: "前期",
          person: "王思思",
          Number: "4",
          time: "2021/08/06",
          state: "已延期",
        },
      ],
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    handleEdit() {},
    handleDelete() {},
  },

  watch: {},
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.content {
  width: 1770px;
  height: 820px;
  border: 1px solid red;
  padding: 0px 20px;
}
.content_box {
  width: 1748px;
  height: 50px;
  border: 1px solid red;
  vertical-align: middle;
  line-height: 50px;
}
.content_box img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
}
.Publish {
  cursor: pointer;
  width: 90px;
  height: 30px;
  text-align: center;
  display: inline-block;
  line-height: 30px;
  margin-left: 88%;
  background-color: #e0e0e0;
}
.comtent_box2 {
  width: 1748px;
  height: 500px;
  border: 1px solid red;
}
</style>
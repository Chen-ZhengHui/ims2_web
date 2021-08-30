<template>
  <div class="box">
    <div class="box_nr">
      <div style="margin-left: 10px"><strong>管理员</strong>(1人)</div>
      <div class="jiakuang" @click="add">+添加员工</div>
      <div class="yichu" @click="del">移除员工</div>
    </div>
    <div class="box_nr2">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column label="姓名" width="300">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="name" label="部门" width="300">
        </el-table-column>
        <el-table-column prop="address" label="管理范围" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
          >切换第二、第三行的选中状态</el-button
        >
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
    <el-dialog
      title="添加员工"
      :visible.sync="dialogVisible"
      width="33%"
      :before-close="handleClose"
    >
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value"
        :data="data"
      >
      </el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      width="30%"
      :before-close="handleClose"
    >
      <span>确定移除所选员工吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false"
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
    const generateData = (_) => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      dialogVisible: false,
      dialogVisible2: false,
      tableData: [
        {
          name: "用户名",
          name1: "设计部",
          address: "全部",
        },
        {
          name: "用户名",
          name1: "设计部",
          address: "全部",
        },
      ],
      multipleSelection: [],
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    //添加员工
    add() {
      this.dialogVisible = true;
    },
    //移除员工
    del() {
      this.dialogVisible2 = true;
    },
    //对话框弹出
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 全选
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },

  watch: {},
};
</script>
<style  scoped>
.box {
  width: 100%;
  height: 840px;
  background-color: #fdfdfd;
}
.box_nr {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.box_nr2 {
  width: 100%;
  height: 791px;
  border: 1px solid red;
}
.jiakuang {
  width: 80px;
  height: 30px;
  border: 1px solid #f3f3f3;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-left: 1060px;
}
.yichu {
  width: 80px;
  height: 30px;
  border: 1px solid #f3f3f3;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-left: 15px;
}
</style>
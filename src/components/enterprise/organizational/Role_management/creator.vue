<template>
  <div class="box">
    <div class="box_nr">
      <div style="margin-left: 10px"><strong>创建者</strong>(1人)</div>
      <div class="shezhi">
        如需更换企业创建者，请前往<span>企业设置</span>页面，点击【修改权限】更改。
      </div>
      <div class="jiakuang" @click="add">+添加员工</div>
      <div class="yichu" @click="del">移除员工</div>
    </div>
    <div class="box_nr2">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="姓名" width="350">
        </el-table-column>
        <el-table-column prop="name" label="部门" width="350">
        </el-table-column>
        <el-table-column prop="address" label="管理范围"></el-table-column>
        <el-table-column width="350">
          <el-button size="mini" @click="forms">默认按钮</el-button>
        </el-table-column>
      </el-table>
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
    <el-dialog
      title="管理范围"
      :visible.sync="dialogVisible3"
      width="30%"
      :before-close="handleClose"
    >
      <div class="Tree">
        <div class="item">
          <a-tree
            v-model="checkedKeys"
            checkable
            :expanded-keys="expandedKeys"
            :auto-expand-parent="autoExpandParent"
            :selected-keys="selectedKeys"
            :tree-data="treeData"
            @expand="onExpand"
            @select="onSelect"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible3 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
const treeData = [
  {
    title: "全部",
    key: "0-0",
    children: [
      {
        title: "企业名称",
        key: "0-0-0",
        children: [
          { title: "设计部", key: "0-0-0-0" },
          { title: "三维部", key: "0-0-0-1" },
          { title: "文学部", key: "0-0-0-2" },
          { title: "音乐部", key: "0-0-0-3" },
          { title: "编程部", key: "0-0-0-4" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
    ],
  },
];

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
      expandedKeys: ["0-0-0", "0-0-1"],
      autoExpandParent: true,
      checkedKeys: ["0-0-0"],
      selectedKeys: [],
      treeData,
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
    //添加员工
    add() {
      this.dialogVisible = true;
    },
    //移除员工
    del() {
      this.dialogVisible2 = true;
    },
    //表单弹出
    forms() {
      this.dialogVisible3 = true;
    },
    //对话框弹出
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },

  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
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
.jiakuang {
  width: 80px;
  height: 30px;
  border: 1px solid #f3f3f3;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  margin-left: 575px;
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
.shezhi {
  margin-left: 50px;
}
.shezhi span {
  color: #409eff;
}
.box_nr2 {
  width: 100%;
  height: 791px;
  border: 1px solid red;
}
.Tree {
  border: 1px solid #d1d1d1;
  height: 350px;
  overflow: scroll;
  border-radius: 4px;
}
.item {
  height: 70px;
  display: flex;
  cursor: pointer;
}
.Tree::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
/*正常情况下滑块的样式*/
.Tree::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/

.Tree:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/

.Tree::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/

.Tree::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/

.Tree::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}
</style>
/* <el-table
  border
  :data="tableData"
  style="width: 100%">
  <el-table-column
    v-for="item in tableLabel"
    :key="item.label"
    :prop="item.prop"
    :label="item.label"
    :width="item.width"
  >
  </el-table-column>
  <el-table-column
    fixed="right"
    label="操作"
    width="100">
    <template slot-scope="scope">
      <el-button type="text" size="small" @click="editUser(scope)">编辑</el-button>
      <el-button type="text" size="small" @click="delUser(scope)">删除</el-button>
    </template>
  </el-table-column>
</el-table> */

// table 表格 标头内容
export const _tableLabel = [
  {
    prop:'name',
    label:'姓名'
  },
  {
    prop:'addr',
    label:'地址'
  },
  {
    prop:'age',
    label:'年龄'
  },{
    prop:'birth',
    label:'生日',
    width: 200
  },
  {
    prop:'sex',
    label:'性别',
    width: 120,
  },
]

// model 弹窗组件内容
export const _operateFormLabel = [
  {
    model:'name',
    label:'姓名',
    type:'input',
  },
  {
    model:'age',
    label:'年龄',
    type:'input',
  },
  {
    model:'sex',
    label:'性别',
    type:'select',
    opts: [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 0
      },
    ]
  },
  {
    model:'birth',
    label:'出生日期',
    type:'date',
  },
  {
    model:'addr',
    label:'地址',
    type:'input',
  },
]
<template>
  <div class="common-table">
    <el-table :data="tableData.slice((config.page-1) * config.pageSize, config.page * config.pagesize)" stripe border>
    <!-- height="90%"  -->
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width=" item.width ? item.width : 150 "
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px"> {{scope.row[item.prop]}} </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager pagin"
      layout="prev, pager, next"
      :total="tableData.length"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="5"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name:'CommonTable',
  data() {
    return {
      // currentpage:'',
    }
  },
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,

  },
  watch :{
    tableData(){
      // 监听表格内数据，有数据变动进行输出
      // console.log(val)
    },
    tableLabel(val){
      console.log(val)
    }
  },
  methods: {
    // 编辑
    handleEdit(row){
      this.$emit('edit', row)
    },
    // 删除
    handleDelete(row){
      this.$emit('del', row)
    },
    // 分页切换的 回调函数
    changePage(page){
      this.$emit('changePage', page)
    }
    // 表格分页事件 当前页改变时触发 跳转其他页
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    //   this.currentPage = val;
    // },
  },

}
</script>

<style lang="less" scoped>
.common-table{
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative; //相对的定位
  .pager{
    position: absolute; //绝对定位
    // bottom: 0;
    right: 30px;
  }
}
.pagin{
  margin: 20px 0 0 0;
}
</style>
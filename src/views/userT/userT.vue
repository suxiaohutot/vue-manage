<template>
  <div class="manage">
    <!-- Dialog 对话框 -->
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '编辑用户' "
      :visible.sync="isShow"
    >
      <Common-from
        :formLabel="operateFormLabel"
        :form="operateFrom"
        :inline="true"
        ref="form"
      >
      </Common-from>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confim()">确认</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <Common-from
        :formLabel="formLabel"
        :form="sacherFrom"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList">搜索</el-button>
      </Common-from>
    </div>
    <!-- 封装的表格组件 -->
    <Common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    >
    </Common-table>
  </div>
</template>

<script>
import axios from 'axios';
import CommonFrom from '@/components/CommonFrom.vue';
import CommonTable from '@/components/CommonTable.vue';
import {_tableLabel, _operateFormLabel } from  './config'

export default {
  name:'UserT',
  data() {
    return{
      operateType:'add',
      isShow: false,
      operateFrom:{
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
      },
      formLabel:[
        {
          model: 'keyword',
          label: '',
          type:'input',
        }
      ],
      sacherFrom:{
        keyword:''
      },
      // table表数据
      tableData:[],
      // 页码 内容
      config:{
        page:1, // 当前页码
        pagesize:9, // 每页的数据条数
        total:10, // 总条数
      },
    }
  },
  watch:{
    tableData(val){
      // this.config.total = val.length
      console.log(val)
    }
  },
  components:{
    CommonFrom,
    CommonTable,   //封装表格 引用
},
  methods:{
    // 新增 / 编辑 
    confim(){
      if(this.operateType === 'add'){
        if(this?.operateFrom?.name != ''){
          axios.post('http://localhost:3000/userData',{
            ...this.operateFrom
          }).then( (res) => {
            console.log(res)
            this.isShow = false //完事关闭弹窗
            this.getList() //更新页面数据
          })
        }else{
          this.$alert('用户名为空，请勿保存空数据')
        }
      }else if(this.operateType === 'edit'){
        if(this?.operateFrom?.name != ''){
          axios.put('http://localhost:3000/userData'+'/'+this?.operateFrom?.id,{
            name: this.operateFrom.name,
            addr: this.operateFrom.addr,
            age: this.operateFrom.age,
            birth: this.operateFrom.birth,
            sex: this.operateFrom.sex,
          }).then((res) => {
            console.log(res)
            this.isShow = false //完事关闭弹窗
            this.getList() //更新页面数据
          })
        }else{
          this.$alert('用户名为空，请勿保存空数据')
        }
      }
      
      
    },
    // 新建 窗口
    addUser(){
      this.isShow = true
      this.operateType = 'add'
      //新增页面  将数据初始化 
      this.operateFrom = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: '',
        // ...this.operateFrom
      }
    },
    // 获取列表
    getList(name = ''){
      this.config.loading = true
      name ? (this.config.page - 1) : ''
      axios.get('http://localhost:3000/userData',{
      }).then(res =>{
        // console.log(res)
        this.tableData = res.data.map(item=>{
          item.sex = item.sex === 1 ? '男' : '女'
          return item
        })
        this.config.total = res.data.length
        this.config.loading = false
      })
    },
    // 编辑列表信息
    editUser(val){
      console.log(val)
      this.operateType = 'edit'
      this.isShow = true
      this.operateFrom = val
    },
    // 删除用户信息
    delUser(val){
      this.$confirm("此操作会删除用户信息，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() =>{
        console.log(val.id)
        axios.delete('http://localhost:3000/userData/'+'/'+val.id)
        .then(()=>{
          this.getList()
        })
      })
    },

  },
  // 计算函数
  computed:{
    tableLabel(){
      return _tableLabel
    },
    operateFormLabel(){
      return _operateFormLabel
    }
  },
  created(){
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.manage-header{
  display: flex;
  justify-content: space-between; //左右对齐
  align-items: center; //上下对齐
}
</style>
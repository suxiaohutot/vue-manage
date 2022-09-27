<template>
  <div class="manage">
    <!-- <el-button @click="getList()">显示数据</el-button> -->
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
    <el-button @click="confim">测试数据按钮</el-button>
  </div>
</template>

<script>
import axios from 'axios';
import CommonFrom from '@/components/CommonFrom.vue';

export default {
  name:'UserT',
  data() {
    return{
      operateType:'add',
      isShow: false,
      operateFormLabel:[
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
              value: 2 
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
      ],
      operateFrom:{
        name: '',
        addr: '',
        age: '',
        brith: '',
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
      }

    }
  },
  components:{
    CommonFrom,
},
  methods:{
    getList1(){
      axios({
        method:'GET',
        url:'http://localhost:3000/dataScoure'
      }).then((res)=>{
        console.log(res.data)
      })
    },
    confim(){
      // if(this.operateType === 'edit'){
      //   axios({
      //     methods:'POST',
      //     url:'http://localhost:3000/dataScoure',
      //     data:{
      //       "title": "rongrong"+Date(),
      //       "author": "雯雯"
      //     }
      //   }).then((res) =>{
        //   console.log(res.data)
        // }).catch((error) =>{
        //   console.log(error)
        // }).finally(
        // )
      // }else{
        
      // }
      // axios.get('http://localhost:3000/dataScoure',{
      //     // "title": "rongrong",
      //     //   "author": "雯雯"
      //   }).then((res) =>{
      //     console.log(res.data)
      //   })
      axios.post('http://localhost:3000/dataScoure',{
          "title": "rongrong",
            "author": "雯雯"
        }).then((res) =>{
          console.log(res.data)
        })
    },
    addUser(){
      this.isShow = true
      this.operateType = 'add'
      this.operateFrom = {
        name: '',
        addr: '',
        age: '',
        brith: '',
        sex: '',
      }
    },
    getList(){

    },

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
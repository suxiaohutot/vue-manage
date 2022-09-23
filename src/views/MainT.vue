<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <!-- 导航栏菜单 -->
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <!-- header部分 -->
          <CommonHeader/>
        </el-header>
        <el-main>
          <!-- 右边内容展示部分 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name:'MainT',
  components:{
    CommonAside: ()=> import('../components/CommonAside.vue'),
    CommonHeader: ()=> import('../components/CommonHeader.vue')
  },
  data (){
    return{
      
    }
  }
}
</script>
<style lang="less" scoped>
.el-header{
  background-color: #333;
  color:aliceblue ;
}
.el-main{
  padding-top: 0px;
}
</style>>
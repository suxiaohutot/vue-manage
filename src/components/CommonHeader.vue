<template>
  <div>
    <header>
      <div class="l-content">
        <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu()"></el-button>
        <h3 style="color:aliceblue">首页</h3>
      </div>
      <div class="r-content">
        <el-dropdown size="mini" trigger="click">
          <span style="color:aliceblue">
            <!-- 我的 -->
            <i class="el-icon-s-custom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name:'CommonHeader',
  data() {
    return {
      
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  mounted(){
    // this.$http.get('./user?ID=123456')
    // .then((res)=>{
    //   console.log(res)
    // }).catch((error)=>{
    //   console.log(error)
    // })
  }

}
</script>

<style lang="less" scoped>
header{
  display: flex;
  height: 100%;
  justify-content: space-between; //左右贴边
  align-content: center; //上下居中
}
.l-content{
  display: flex;
  align-items: center;//上下居中
  .el-button{
    margin: 0 20px 0 0;
  }
}
.r-content{
  display: flex;
  align-items: center;//上下居中
  font-size: aliceblue;
}
</style>
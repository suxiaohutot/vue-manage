<template>
  <div>
    <el-form :model="form" :rules="rules" class="login-container" inline label-width="70px">
      <h3 class="login-title">系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item class="login-item">
        <el-button type="primary" class="login-but" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  name:'LoginT',
  data() {
    return {
      form:{
        username:'',
        password:'',
      },
      rules:{
        username:[
          {required: true, message: '请输入用户名', trigger: 'blur' /** 必填选项，提示信息， 失去焦点触发 */ }
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
      token:null,
    }
  },
  methods: {
    createCode() {
      // 假装 token
      let code = '';
      const codeLength = 18; //验证码的长度
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
      for (let i = 0; i < codeLength; i++) {
        //Math.floor方法用于返回小于或等于一个给定数字的最大整数；Math.random方法返回 0（含）和 1（不含）之间的随机数
        let index = Math.floor(Math.random() * 36); 
        code += random[index];
      }
      this.token = code,
      console.log(code)
    },
    //登录
    submit(){
      // 获取 token
      let token = this.token
      // 将token信息存入cookie
      Cookie.set('token',token)
      this.$message({
        message: '登录成功',
        type: 'success',
        duration:1000,
        onClose:()=>{
          this.$router.push('./homeT')
        }
      });
      
    }
  },
  created(){
    this.createCode()
  }
}
</script>

<style lang="less" scoped>
.login-title{
  text-align: center;
  margin: 0 0 40px 0;
  color: #505458;
}
.login-container{
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .el-input{
    width: 198px;
  }
}
.login-item{
  margin: 0 0 0 105px;
  .login-but{
  // margin: 0 0 0 0;
}
}

</style>
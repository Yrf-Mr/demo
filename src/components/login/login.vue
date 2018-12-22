<template>
  <div class="login">
    <el-form
      :model="loginObj"
      status-icon
      label-width="50px"
      class="demo-ruleForm"
      label-position="top"
    >
      <h2>登录页面</h2>
      <el-form-item label="账号">
        <el-input
          type="text"
          v-model="loginObj.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="loginObj.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.prevent="login" class="mybtn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginObj: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    // 登录发送请求
    async login() {
      var awart = this.$http.post('login', this.loginObj).then(res => {
        console.log(res)
        var {
          data,
          meta: { msg, status }
        } = res.data
        if (status === 200) {
          this.$message({
            message: msg,
            type: 'success'
          })
          // 将登录信息保存到localtion中
          window.localStorage.setItem('token', data.token)
          this.$router.push('/home')
        } else {
          this.$message({
            message: msg
          })
        }
      })
    }
  }
}
</script>

<style>
.login {
  height: 100%;
  background-color: darkcyan;
  position: relative;
}
.el-form {
  width: 500px;
  height: 440px;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 8px;
}
h2 {
  padding-bottom: 15px;
}
.mybtn {
  width: 100%;
}
</style>

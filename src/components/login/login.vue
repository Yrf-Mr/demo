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
                >登录
                </el-button
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
        login: function () {
            console.log(9999, "你好，版本4")
            this.$router.push('/home')
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

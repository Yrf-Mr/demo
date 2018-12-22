<template>
  <el-row>
    <el-col :span="3">
      <div class="grid-content bg-purple">{{ leftName }}</div>
    </el-col>
    <el-col :span="19">
      <div class="grid-content bg-purple-light">{{ content }}</div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content bg-purple">
        <a href>{{ logout }}</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      leftName: "自定义",
      content: "电商后台管理系统",
      logout: "推出"
    };
  }
};
</script>

<style>
.el-header {
  background-color: rgb(186, 192, 194);
  line-height: 60px;
  font-size: 20px;
}
.grid-content {
  text-align: center;
}
.el-col-2 .bg-purple {
  text-align: right;
}
</style>

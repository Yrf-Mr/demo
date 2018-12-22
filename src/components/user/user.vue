<template>
  <el-card>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品类表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input v-model="query" placeholder="请输入内容" class="el-icon-search">
      <el-button type="info" plain>信息按钮</el-button>
    </el-input>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  }
};
</script>

<style>
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}
</style>
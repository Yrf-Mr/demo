<template>
  <el-menu :router="true" :unique-opened="true" class="el-menu-vertical-demo">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/user">
          <i class="el-icon-menu"></i>用户列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>角色类表
        </el-menu-item>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>权限列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>商品类表
        </el-menu-item>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>分类参数
        </el-menu-item>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>商品分类
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>订单类表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据统计</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-menu"></i>数据报表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
</style>

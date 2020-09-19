<template>
    <el-container>
        <el-header>
            <Top/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Left/>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import Top from "../top/top.vue";
import Left from "../left/left.vue";

export default {
    components: {
        Top,
        Left
    },
    created() {

    }
};
</script>

<style scoped>
.el-container {
    height: 100%;
}

.el-main {
    padding: 0;
}
</style>

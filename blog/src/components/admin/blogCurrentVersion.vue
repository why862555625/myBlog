<template>
    <div>
        <!--容器-->
        <div class="container">
            <el-card class="box-card">
            <header>

                <!--面包屑导航-->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">`首页`</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                <!--添加-->
                <el-button type="success" round><router-link to="/addblog">添加博客</router-link></el-button>
            </header>
            </el-card>
            <el-card class="box-card card-2">
            <main>
                <router-view></router-view>
            </main>
            </el-card>
        </div>



    </div>
</template>

<script>
    import Breadcrumb from "../functional/Breadcrumb";
    export default {
        name: "blogCurrentVersion",
        components:{Breadcrumb}
    }
</script>

<style lang="less" scoped>
    a{
        text-decoration: none;
        color: yellow;
    }

    .card-2{
        margin-top: 20px;
    }


.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    header{

        padding: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
    }
}
</style>
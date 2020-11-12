<template>
    <div class="my-container">
            <aside>
                <div class="tac">
                    <!--开关-->
                    <div class="switch-box" ref="switchBox" >
                        <span>|||</span>
                    </div>
                    <!--菜单-->
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>博客</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1" @click="$router.push('/blogCurrentVersion')">当前版本</el-menu-item>
                                <el-menu-item index="1-2">历史记录</el-menu-item>
                                <el-menu-item index="1-3"  @click="$router.push('/blogclassfy')"   >博客分类</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>评论</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">当前版本</el-menu-item>
                                <el-menu-item index="1-2">历史记录</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>留言</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1" @click="$router.push('/allword')">全部留言</el-menu-item>
                                <el-menu-item index="3-2" @click="$router.push('leaveWord')">未审核留言</el-menu-item>
                                <el-menu-item index="3-3" @click="$router.push('/password')">审核通过</el-menu-item>
                                <el-menu-item index="3-4" @click="$router.push('/nopassword')">审核未通过</el-menu-item>
                                <el-menu-item index="3-5" @click="$router.push('/deletedword')">回收站</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>日志</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </div>
            </aside>
            <main>
                <router-view></router-view>
            </main>
    </div>
</template>

<script>
    export default {
        name: "blogAdmin",
        data(){
            return{
                switchValue:true
            }
        },
        methods:{

        }

    };

</script>

<style lang="less" scoped>
    .my-container{
        display: flex;
        flex-direction: row;
        width: 100%;

    }
    .switch-box{
        display: none;
        cursor: pointer;
    }
    aside{
        width:13%;
        min-width: 150px;
        transition: all 1s linear;

        background-color: rgb(238, 241, 246);
        .el-submenu .el-menu-item{
            min-width: 50px;
        }
    }
    main{
        width: 80%;
        margin-left: 3%;
    }

    @media screen and  (max-width: 800px) {
        aside{
            width:40px;
            min-width: 20px;
            overflow: hidden;
            transition: all 1s linear;

            .el-menu{
                width: 0;
                overflow: hidden;
            }
            .switch-box{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        aside:hover{
            width:20%;
            /deep/.el-menu{
                width: 100%;
                overflow: hidden;
            }
        }

    }
</style>
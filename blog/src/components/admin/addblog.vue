<template>
    <div>
        <el-card class="box-card">
        <header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">`首页`</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        </el-card>
    <div>
        <mavon-editor v-model="context" :toolbars="toolbars" @keydown="" />
        <el-button type="success" round>添加</el-button>
    </div>
    </div>
</template>

<script>

    export default {
        name: "articleEdit",
        data(){
            return{
                context: ' ',//输入的数据
                toolbars: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    help: true, // 帮助
                    code: true, // code
                    subfield: true, // 是否需要分栏
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    /* 1.3.5 */
                    undo: true, // 上一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true // 导航目录
                }
            }
        },
        methods:{
            aaa(){
                console.log(this.context)
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-button{
        float: right;
        margin: 20px;
    }
</style>
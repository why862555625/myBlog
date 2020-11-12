<template>
    <div class="container">
        <!--提示头-->

        <el-row type="flex" :gutter="24">
            <el-col :span="6">分类名称</el-col>
            <el-col :span="6">创建时间</el-col>
            <el-col :span="6">更新时间</el-col>
            <el-col :span="6">是否删除</el-col>
        </el-row>

        <el-row :gutter="20" v-for="item in classfiData">
            <el-divider></el-divider>
            <el-col :span="6" >
                <span v-if="!item.inputShow" @dblclick="item.inputShow=!item.inputShow"  >{{item.categoryName}}</span>
                <el-input v-model="input" v-if="item.inputShow" @blur="updateClassfyName(item)"  :placeholder="item.categoryName"></el-input>
            </el-col>
            <el-col :span="6">2</el-col>
            <el-col :span="6">1</el-col>


            <el-col :span="6"><el-button type="danger" @click="deleteClassify(item)" icon="el-icon-delete" circle></el-button></el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "classify",
        data() {
            return {
                classfiData: [],
                inputShow:false,
                input:'',
            }
        },
        created() {
            this.getClassfy()
        },
        methods: {
            // 获取所有shuj,
            async getClassfy() {
                try {
                    this.classfiData=[]
                    const data = await this.$http.get('/blog/category/allCategory')
                    data.data.result.forEach((i)=>{
                       i.inputShow=false
                        this.classfiData.push(i)
                    })
                } catch (e) {
                    this.$message.error('获取分类失败')
                }
            },
            //修改名称
            async updateClassfyName(item){
                try {
                    item.inputShow=!item.inputShow
                    const data=await this.$http.get('/blog/category/updateCategory',{params:{category_id:item.categoryId,category_name:this.input}})
                    if (data.data.status=='success'){
                        this.$message.success('更新成功')
                    }else {
                        this.$message.error('更新失败')
                    }
                    this.input=''
                    this.getClassfy()
                }catch (e) {
                    this.$message.error('更新失败')
                }
            },
            async deleteClassify(item){
                try {
                    const data =await this.$http.get('/blog/category/deleteById',{params:{category_id:item.categoryId}})
                    if (data.data.status=="success"){
                        this.$message.success('删除成功')
                    }else {
                        this.$message.error('删除失败')
                    }
                    this.getClassfy()

                }catch (e) {
                    this.$message.error('删除失败')
                }
            }

        }
    }
</script>

<style lang="less" scoped>

    .container {
        margin-top: 0.667rem /* 50/75 */ /* 20/75 */;
        font-size: 0.347rem /* 26/75 */;
        text-align: center;
    }



</style>
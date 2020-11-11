<template>
    <div>
        <el-table
                :data="dataList"
                style="width: 100%">
            <el-table-column
                    prop="messageId"
                    label="留言ID"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="replyId"
                    label="留言人"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="visitorId"
                    label="回复的ID"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="messageContent"
                    type="expand"
                    label="留言内容"
                    width="200">
                <template slot-scope="props">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>留言内容</span>
                        </div>
                        <div  class="text item">
                            {{ props.row.messageContent}}
                        </div>
                    </el-card>

                </template>
            </el-table-column>
            <el-table-column
                    prop="createdDate"
                    label="留言时间"
                    width="100">
            </el-table-column>
            <el-table-column
                    width="200"
                    prop="auditStatus"
                    label="审核操作">
                <template slot-scope="scope">
                    <el-button type="success" size="mini" @click="auditPass(scope.row.messageId)" round>通过</el-button>
                    <el-button type="warning"  size="mini" @click="auditReject(scope.row.messageId)" round>拒绝</el-button>
                </template>

            </el-table-column>
            <el-table-column
                    prop="isDeleted"
                    label="是否删除"
                    width="100">
                <template slot-scope="scope">
                    <el-button type="danger" size="mini" @click="deletword(scope.row.messageId)" round>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "leaveWord",
        data(){
            return{
                dataList:[],
            }
        },
        created() {
            this.getData()
            },
        methods:{
            //获取数据
            async getData(){
                try {
                    const data=await this.$http.get('/blog/message/getAllAudit')
                    if (data.data.status=='success'){
                        this.dataList=data.data.result
                    }

                }catch (e) {
                    this.$message.error(e)
                }

            },
            // 点击通过
            async auditPass(messageId){
                try {
                    const data=await this.$http.get('/blog/message/auditOne',{params:{auditStatus:1,messageId:messageId}})
                    if (data.data.status=='success'){
                        this.$message.success('修改成功')
                    }else {
                        this.$message.error('修改失败')
                    }
                    this.dataList=[]
                    this.getData()
                }catch (e) {
                    this.$message.error(e)
                }
            },
            // 点击拒绝
            async auditReject(messageId){
                try {
                    const data=await this.$http.get('/blog/message/auditOne',{params:{auditStatus:2,messageId:messageId}})
                    if (data.data.status=='success'){
                      this.$message.success('修改成功')
                    }else {
                        this.$message.error('修改失败')
                    }
                    this.dataList=[]
                    this.getData()
                }catch (e) {
                    this.$message.error(e)
                }
            },
            //删除
            async deletword(id){
                try {
                    const data= await  this.$http.get(`/blog/message/delById`,{params:{messageId:id}})
                    if (data.data.status=='success'){
                        this.$message.success('删除成功')
                    }else {
                        this.$message.error('删除失败')
                    }
                    this.dataList=[]
                    this.getData()
                }catch (e) {
                    console.log(e)
                }
            }
        }
    }


</script>

<style lang="less" scoped>

</style>
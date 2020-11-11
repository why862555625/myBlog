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
                    prop="isDeleted"
                    label="是否恢复"
                    width="100">
                <template slot-scope="scope">
                    <el-button type="danger" @click="resumecword(scope.row.messageId)" size="mini" round>恢复</el-button>
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
            // 获取数据
            async getData(){
                try {
                    const data=await this.$http.get('/blog/message/getDeleted')
                    console.log('delet',data)
                    if (data.data.status=='success'){
                        this.dataList=data.data.result
                    }
                }catch (e) {
                    this.$message.error(e)
                }
            },
            // 通过
            async auditPass(messageId){
                try {
                    const data=await this.$http.delete('/blog/message/delById',{params:{auditStatus:1,messageId:messageId}})

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
            // 拒绝
            async auditReject(messageId){
                try {
                    const data=await this.$http.get('/blog/message/getAuditPass',{params:{auditStatus:2,messageId:messageId}})
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
            //恢复
            async resumecword(id){
                try {
                    const data= await  this.$http.get(`/blog/message/resumeOne`,{params:{messageId:id}})
                    console.log(id,data)
                    if (data.data.status=='success'){
                        this.$message.success('恢复成功')
                    }else {
                        this.$message.error('恢复失败')
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
<template>
    <div>
        <!--输入框-->
        <div class="input">
            <img :src="visitor.headShow" alt="头像">{{visitor.pseudonym}}
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
            >
            </el-input>

            <el-button type="success" @click="addLeaveWord" round>添加</el-button>
        </div>
        <!--留言显示-->
        <div class="show">
            <div class="block">
                <el-timeline>
                    <el-timeline-item v-for="item in allLeaveWord" :timestamp="item.createdDate" placement="top">
                        <!--信息区域-->
                        <div class="card-container">
                            <div>
                                <div>
                                    <img :src="visitor.headShow" alt="头像">
                                </div>
                                <div>{{visitor.pseudonym}}</div>
                            </div>
                            <!--内容区-->
                            <el-card>
                                {{item.messageContent}}
                            </el-card>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leaveWord",
        data() {
            return {
                textarea: '',
                // 访客的信息
                visitor: '',
                allLeaveWord: ''
            }
        },
        created() {
            this.getVisitorInfo(),
                this.getAllLeaveWord()
        },
        methods: {
            // 添加留言
            async addLeaveWord() {
                try {
                    const data = await this.$http.post('/blog/message/addOne',
                        {
                            messageContent: this.textarea,
                            headShow: this.visitor.headShow,
                            visitorUsableDateId: this.visitor.visitorUsableDateId,
                            pseudonym: this.visitor.pseudonym
                        })
                    console.log(data)
                    if (data.data.status == 'success') {
                        this.$message.success('提交成功')
                    } else {
                        this.$message.error('提交失败')
                    }
                    this.textarea = ''
                } catch (e) {
                    this.$message.error('提交失败')
                }
            },
            // 获取访客临时信息
            async getVisitorInfo() {
                try {
                    const data = await this.$http.get('/blog/visitorUsableDate/getOne')
                    this.visitor = data.data.result
                } catch (e) {
                }
            },
            //获取所有审核通过的留言
            async getAllLeaveWord() {
                try {
                    const data = await this.$http.get('/blog/message/getAuditPass')
                    console.log(data)
                    this.allLeaveWord = data.data.result
                } catch (e) {
                    this.$message.error('获取留言失败')
                }
            }
        },

    }
</script>

<style lang="less" scoped>
    .card-container {
        display: flex;
        text-align: center;
    }

    .el-card {
        width: 90%;
        margin-left: 3%;
    }

    .show {
        width: 80%;
        margin-left: 6%;
        margin-top: 10%;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

    .input {
        width: 80%;
        margin-left: 6%;
        margin-top: 3%;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

    .el-button {
        margin-top: 20px;
        float: right;
    }

</style>
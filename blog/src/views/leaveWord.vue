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

            <!--加载div-->
            <div class="load">
                <span ref="loadEnd" class="load-end">到头了</span>
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
                allLeaveWord: [],
                pageIndex: 1,
                totalPage: 0,
            }
        },
        created() {
            this.getVisitorInfo(),
                this.getAllLeaveWord()
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
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
                    const data = await this.$http.get(`/blog/message/getAllByPage/${this.pageIndex}`)
                    this.allLeaveWord.push(...data.data.result.records)
                    this.totalPage = data.data.result.pages
                } catch (e) {
                    this.$message.error('获取留言失败')
                }
            },
            // 判断是否到底
            handleScroll(){
                //是否滚动到底部判断
                if((document.documentElement.scrollTop+window.innerHeight)>=document.body.offsetHeight){
                   if (this.pageIndex<this.totalPage){
                       this.pageIndex+=1
                       this.getAllLeaveWord()
                   }else {
                       this.$refs.loadEnd.style.display='block'
                   }
                }},
        }
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

    .load {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .load-end {
            display: none;
        }
        .loading {
            display: none
        }
        span {
            font-size: 0.347rem /* 26/75 */;
            text-align: center;
            margin-top: 10px;
            margin-left: 10%;
            display: block;
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
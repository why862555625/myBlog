<template>
    <div class="dis">
        <div class="main">
            <!--        主显示窗口-->
            <main>
                <card class="box-card" id="content">
                    <article v-html="value" class="dis-ul"></article>
                </card>
            </main>
            <!--        文章目录-->
            <nav>
                <card class="box-card">
                    {{this.$store.state.enterArtId}}
                </card>
            </nav>
        </div>
        <div>

        </div>
    </div>
</template>

<script>

    import card from "../components/functional/card";

    export default {
        name: "blogContent",
        components: {
            card
        },
        data() {
            return {
                value: ``,
                requiredData: ''
            }
        },
        //使用计算属性监听store
        computed: {
            articleId() {
                return this.$store.state.enterArtId
            }
        },
        created() {
            this.getMyArtContent()
            console.log(this.$route.matched)
        },
        methods: {
            async getMyArtContent() {
                try {
                    this.requiredData = await this.$http.get(`/blog/article/getById?articleId=${this.articleId}`)
                    if (this.requiredData.data.status == 'success') {
                        this.value = this.requiredData.data.result.content

                    }
                } catch (e) {
                    console.log(e)
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    * {
        padding: 0;
        margin: 0;

    }

    .dis {
        display: flex;
        flex-direction: column;
    }

    .main {
        display: flex;
        width: 100%;
        margin-top: 0.667rem /* 50/75 */;
    }

    main {
        margin: 7% 5% 0.667rem 8%;


        width: 65%;
        font-size: 0.333rem /* 25/75 */;
    }

    nav {
        position: fixed;
        margin-top: 7%;
        right: 6%;
        width: 20%;
        height: 500px;

    }


    /deep/ .dis-ul {

        ul {
            padding-left: 50px;
            list-style-type: disc ;
        }

        h1, h2, h3, h4, h5 {
            color: red;
        }
    }

</style>
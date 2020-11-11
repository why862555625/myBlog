<template>
    <div class="container">
        <div class="bc">
            麻将三缺一
        </div>
        <main class="main">
            <article class="article">
                <bogSingleAbstract v-for="item in art" :art="item" @entranceBlog="intoContent(item)"></bogSingleAbstract>
            </article>
            <nav class="nav">

            </nav>
        </main>
    </div>
</template>

<script>
    import bogSingleAbstract from "../components/blogAbstract/bogSingleAbstract";
    export default {
        name: "blogAbstract",
        components:{
            bogSingleAbstract
        },
        data() {
            return {
                art: '',
                classify: [1, 2, 3, 4, 5],
                cache: {status: 'error'}
            }
        },
        created() {
            this.getData()
        },
        methods: {
            //将点击事件的id存到vuex中
            intoContent(item) {
                console.log(item)
                this.$store.commit('setEnterArtId',item)
                this.$router.push({
                    name: 'content',
                    params: {id: item.articleId}
                })
            },
            //请求数据
            async getData() {
                try {
                    this.cache = await this.$http.get('/blog/article/getAll')
                } catch (e) {
                    console.log(e)
                }
                if (this.cache.data.status == 'success') {
                    this.art = this.cache.data.result
                } else {
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .container{
        width: 100%;
    }

    .bc {
        display: flex;
        background: url("../assets/images/timg (1).jpg");
        width: 100%;
        height: 300px /* 500/75 */;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem /* 60/75 */;
        background-size: cover;
    }


    .main {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .article {
        margin-left: 7.5%;
        margin-right: 2.5%;
        width: 60%;

    }

    .nav {
        margin-top: 50px;
        width: 20%;
        margin-right: 7.5%;
        margin-left: 2.5%;

    }
</style>
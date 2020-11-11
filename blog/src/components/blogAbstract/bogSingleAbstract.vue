<template>
    <card class="box-card">
        <div>
            <div class="main-box" @click="entrance(art.articleId)">
                <div class="title-box">
                    <h1>{{art.title}}</h1>
                </div>
                <div class="introduce">
                    <div>{{art.author}}</div>
                    <div>{{art.createdDate}}</div>
                    <div>{{art.visits}}</div>
                </div>
                <div class="abstract">
                    {{art.introduce}}
                </div>
                <div class="btn">

                </div>
            </div>
        </div>
    </card>
</template>

<script>
    import card from "../functional/card";

    export default {
        name: "bogSingleAbstract",
        components: {
            card
        },
        props: {
            art: {
                required: true
            },
        },
        methods:{
            entrance(a){
                this.$emit('entranceBlog',a)
            }
        }
    }

</script>

<style scoped>
    *{
        padding: 0;
        margin:0;
    }
    .el-card{
        margin-top: 0.667rem  /* 50/75 */;
        margin-bottom: 0.267rem  /* 20/75 */;
    }
    .main-box {
        margin-top: 50px;
        height: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .title-box {
        margin-top: 5%;
        height: 15%;
        font-size: 0.4rem  /* 30/75 */;
        text-align: center;
        text-overflow: ellipsis;
    }

    .introduce {
        height: 10%;
        display: flex;
        margin-top: 3%;
        font-size: 0.267rem  /* 20/75 */  /* 10/75 */;
        justify-content: center;
    div{
        margin-left: 0.133rem  /* 10/75 */;
    }
    }
    .abstract{
        margin-top: 5%;
        height:20% ;
        font-size:0.4rem  /* 30/75 */  /* 15/75 */ ;
        text-align: center;
    }

    .btn{
        margin-bottom: 5%;
    }
</style>
<template>
    <div class="container">
        <!--头部-->
        <header>
            <!-- 导航-->
            <nav>
                <!--响应式时完全展示-->
                <div class="nav-bar-header">
                    <a class="nav-left" href="#">这写一点牛逼的文字</a>
                    <!--存放按钮-->
                    <button class="nav-bar-toggle" @click="extend">
                        <span>|||</span>
                    </button>
                </div>
                <!--开关-->
                <transition name="plus-icon">
                    <div ref="content" class="collapse nav-bar-collapse">
                        <ul class="nav nav-bar-nav">
                            <li>
                                <router-link to="/home">首页</router-link>
                            </li>
                            <li>
                                <router-link to="/bloglist">博客</router-link>
                            </li>
                            <li>
                                <router-link to="">留言</router-link>
                            </li>
                            <li>
                                <router-link to="">评论</router-link>
                            </li>
                            <li>
                                <router-link to="">关于</router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
            </nav>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            aaa
        </footer>
    </div>
</template>

<script>
    import card from "../components/functional/card";

    export default {
        name: "home",
        components: {
            card,
        },
        data() {
            return {}
        },
        methods: {
            extend() {
                this.$refs.content.classList.toggle('collapse')
            }
        }
    }
</script>

<style lang="less" scoped>
    @heard-width: 150px;
    a {
        text-decoration: none
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border: pink solid 1px;
    }

    footer {
        height: @heard-width;
        width: 100%;
        border: red solid 1px;
    }

    main {
        margin: 2.5% 0;
        width: 100%;
        border-top:salmon solid 1px ;
    }


    header {
        .nav-bar-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(@heard-width - 50px);

        }

        nav {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .nav-bar-toggle {
            display: none;
        }

        .nav-bar-nav {
            list-style: none;

            li {

                display: inline-block;
                margin: 0 30px;
                font-size: 0.347rem  /* 26/75 */ /* 60/75 */;

            }
        }

        .nav-left {
            display: inline-block;
            margin-left: 20px;
        }

        /*动画*/

        .plus-icon-enter-active {
            transition: opacity 1s linear;
        }

        .plus-icon-enter {
            opacity: 0;
        }

        .plus-icon-leave-active {
            transition: opacity 0.5s linear;
        }

        .plus-icon-leave-to {
            opacity: 0;
        }

        @media screen and (max-width: 800px) {
            nav {
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            .nav-bar-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 20px;
                margin-right: 20px;
                margin-left: 20px;
            }

            .collapse {
                display: none;
            }

            .nav-bar-toggle {
                display: block;
                cursor: pointer;
            }

            .nav-bar-nav {
                /*display: flex;*/
                /*justify-content: center;*/
                /*align-content: center;*/
                /*flex-direction: column;*/
                display: block;
                margin-top: 80px;

                li {
                    height: 26px;
                    display: block;
                    float: left;
                    margin-left: 20%;
                    margin-right: 20%;
                    width: 60%;
                    text-align: center;
                    font-size: 20px;

                }

                li:nth-of-type(odd) {
                    background-color: fuchsia;
                }
            }
        }

    }


</style>
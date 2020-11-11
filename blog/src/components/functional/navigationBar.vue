<template>
    <div>
        <!-- 导航-->
        <nav>
            <!--响应式时完全展示-->
            <div class="nav-bar-header">
                <slot name="left"></slot>
                <!--存放按钮-->
                <button class="nav-bar-toggle" @click="expend">
                    <span>|||</span>
                </button>
            </div>
            <!--开关-->
            <div ref="content" class="collapse nav-bar-collapse">
                <ul class="nav nav-bar-nav">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navigationBar",
        methods:{
            expend(){
                this.$refs.content.classList.toggle('collapse')
            }
        }

    }
</script>

<style lang="less" scoped>
    nav {
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
            margin: 0 20px;
        }
    }

    .nav-left {
        display: inline-block;
        margin-left: 20px;
    }

    @media screen and (max-width: 700px) {
        nav {
            display: flex;
            flex-direction: column;
        }

        .collapse {
            /*display: none;*/
        }

        .nav-bar-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: center;
        }

        .collapse {
            display: none;
        }

        .nav-bar-toggle {
            display: block;
            cursor: pointer;

        }

        .nav-bar-nav {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;

            li {
                display: block;
                background-color: fuchsia;
                text-align: center;
            }
        }
    }

</style>
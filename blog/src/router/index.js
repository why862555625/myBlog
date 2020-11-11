import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home'),
        children: [
            {
                path: '/',
                redirect: '/introduce'
            }, {
                path: '/introduce',
                component: () => import('../components/home/homeBC')
            }, {
                path: '/bloglist',
                component: () => import('../views/blogAbstract')
            },
            {
                path: '/content',
                name: 'content',
                component: () => import('../views/blogcontent')
            },
            {
                // 后台
                path: '/admin',
                component: () => import('../views/blogAdmin'),
                name:'admin',
                meta:{title:'后台管理'},
                // 后台子路由
                children: [
                    {
                        path: '/',
                        redirect: '/blogCurrentVersion'
                    }
                    , {
                        path: '/blogCurrentVersion',
                        name:'blogCurrentVersion',
                        component: () => import('../components/admin/blogCurrentVersion'),
                        meta:{title:'当前博客'}

                    },
                    {
                        path: '/addblog',
                        name: 'addblog',
                        component:()=>import('../components/admin/addblog'),
                        meta:{title:'添加博客'}
                    },
                    {
                        path: '/leaveWord',
                        component:()=>import('../components/admin/leaveWord/leaveWord')
                    },
                    {
                        path: '/nopassword',
                        component:()=>import('../components/admin/leaveWord/nopassword')
                    },
                    {
                        path: '/password',
                        component:()=>import('../components/admin/leaveWord/password')
                    },
                    {
                        path: '/deletedword',
                        component:()=>import('../components/admin/leaveWord/deletedword')

                    },{
                        path: '/allword',
                        component:()=>import('../components/admin/leaveWord/getallword')
                    }

                ]
            }

        ]
    },


]



const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

const router = new VueRouter({
    routes
})

export default router

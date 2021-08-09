import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../components/layout/index'),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import('../views/dashboard/index'),
                meta: {
                    /* 使用小写 keepalive 可以生效 */
                    keepalive: true,
                }
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('../views/test/index'),
            },
            {
                path: '/500',
                name: '500',
                component: () => import('../components/error/500')
            },
            {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                component: () => import('../components/error/NotFound'),  // 引入 组件
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

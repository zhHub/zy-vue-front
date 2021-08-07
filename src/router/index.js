import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../components/layout/index'),
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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

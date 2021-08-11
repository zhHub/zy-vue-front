import {createRouter, createWebHashHistory} from 'vue-router'
import {push} from "../components/layout/sider/menu";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../components/layout/index'),
        redirect:{
            name: 'dashboard'
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../views/dashboard/index'),
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
const dashboard = {
    name: 'dashboard',
    router: '/dashboard'
};
push(dashboard);
const test = {
    name: 'test',
    router: '/test'
};
push(test);

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

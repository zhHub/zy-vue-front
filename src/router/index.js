import {createRouter, createWebHashHistory} from 'vue-router'
import {push} from "../components/layout/sider/menu";

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('../components/layout/index'),
        redirect: {
            name: 'login'
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
                path: 'toggle-name-description',
                name: 'toggle-name-description',
                component: () => import('../views/toggle/toggle-name-description/index'),
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
            {
                path: "samples",
                name: "samples",
                component: () => import('../views/samples/index'),  // 引入 组件
                children: [
                    {
                        path: "message",
                        name: "message",
                        component: () => import('../views/samples/message/index'),
                    },
                    {
                        path: "table",
                        name: "table",
                        component: () => import('../views/samples/table/index'),
                    },
                    {
                        path: "form",
                        name: "form",
                        component: () => import('../views/samples/form/index'),
                    },
                    {
                        path: "modal",
                        name: "modal",
                        component: () => import('../views/samples/modal/index'),
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login/index'),
    },
]
let i = 1;
const dashboard = {id: i++, name: 'dashboard', icon: 'pieChartOutlined', submenu: []};
push(dashboard);
const toggleNameDescription = {id: i++, name: 'toggle-name-description', icon: 'PieChartOutlined', submenu: []};
push(toggleNameDescription);
const test = {id: i++, name: 'test', icon: 'PieChartOutlined', submenu: []};
push(test);
const submenuSamples = [
    {id: i++, name: 'message', icon: 'PieChartOutlined',},
    {id: i++, name: 'table', icon: 'PieChartOutlined',},
    {id: i++, name: 'form', icon: 'PieChartOutlined',},
    {id: i++, name: 'modal', icon: 'PieChartOutlined',},
];

const samples = {id: i++, name: 'samples', icon: 'PieChartOutlined', submenu: submenuSamples};
push(samples);

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

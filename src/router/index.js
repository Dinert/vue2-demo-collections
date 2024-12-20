import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import {Message} from 'element-ui'


Vue.use(VueRouter)

// bugfix:两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const replace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
    return replace.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        redirect: '/leaflet',
        component: Layout,
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home'),
                name: 'Home',
                meta: {title: '首页'}
            }
        ]
    },
    {
        path: '/leaflet',
        redirect: '/leaflet/mapstyle',
        component: Layout,
        children: [
            {
                path: 'mapstyle',
                component: () => import('@/views/Leaflet/MapStyle2.vue'),
            },
            {
                path: 'windy',
                component: () => import('@/views/Leaflet/Windy.vue'),
            },
            {
                path: 'render',
                component: () => import('@/views/Leaflet/Render.vue'),
            },
            {
                path: 'renderImage',
                component: () => import('@/views/Leaflet/RenderImage.vue'),
            },
            {
                path: 'region',
                component: () => import('@/views/Leaflet/Region.vue'),
            },
            {
                path: 'line',
                component: () => import('@/views/Leaflet/Line.vue'),
            }
        ]
    },
    {
        path: '/gaode',
        component: Layout,
        redirect: '/gaode/navigationChart',
        children: [
            {
                path: 'navigationChart',
                component: () => import('@/views/GaoDe/NavigationChart.vue'),
            },
            {
                path: 'getLnglat',
                component: () => import('@/views/GaoDe/GetLnglat.vue'),
            },
            {
                path: 'areaFace',
                component: () => import('@/views/GaoDe/AreaFace.vue'),
            },
            {
                path: 'pathQuery',
                component: () => import('@/views/GaoDe/PathQuery.vue'),
            },
        ]
    },
    {
        path: '/echarts',
        component: Layout,
        redirect: '/echarts/backTrajectory',
        children: [
            {
                path: 'backTrajectory',
                component: () => import('@/views/ECharts/BackTrajectory.vue'),
            },
            {
                path: 'barComplexChart',
                component: () => import('@/views/ECharts/BarComplexChart.vue'),
            },
            {
                path: 'pieComplexChart',
                component: () => import('@/views/ECharts/PieComplexChart.vue'),
            }
        ]
    },
    {
        path: '/plotly',
        component: Layout,
        redirect: '/plotly/lidarChart',
        children: [
            {
                path: 'lidarChart',
                component: () => import('@/views/Plotly/LidarChart.vue'),
            },
            {
                path: 'grain',
                component: () => import('@/views/Plotly/Grain.vue'),
            }
        ]
    },
    {
        path: '/elementUI',
        component: Layout,
        redirect: '/elementUI/table',
        children: [
            {
                path: 'table',
                component: () => import('@/views/ElementUI/DTable.vue'),
            },
            {
                path: 'form',
                component: () => import('@/views/ElementUI/DForm.vue'),
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    },
    {
        path: '/404',
        component: Layout,
        redirect: '/404/index',
        children: [
            {
                path: 'index',
                component: () => import('@/views/ErrorPage/404.vue'),
                meta: {
                    title: '404'
                }
            }
        ]

    },
    {
        path: '*',
        redirect: '/404',
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})


router.onError(err => {
    const message = err.message
    const isRefersh = message.indexOf('chunk') !== -1 && message.indexOf('Loading') !== -1
    if (isRefersh) {
        Message({
            type: 'error',
            message: '服务器版本已更新，正在刷新本地缓存，请稍后...',
            duration: 4000
        })
        window.location.reload()
    }

    console.log('出错了', isRefersh, err)
})


export default router

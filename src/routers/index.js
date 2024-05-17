import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue')
}]


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
    /* 一个link被选中时，vue自动把该link添加个active类，linkActiveClass是可选的进入该状态的样式 */
})

export default router
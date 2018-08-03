import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OverView from './views/OverView'
import TimeTable from './views/TimeTable'
import Access from './views/Access'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/',
            name: 'OverView',
            component: OverView
        },
        {
            path: '/timetable',
            name: 'TimeTable',
            component: TimeTable
        },
        {
            path: '/access',
            name: 'Access',
            component: Access
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

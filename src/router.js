import Vue from 'vue'
import Router from 'vue-router'
import OverView from './views/OverView'
import TimeTable from './views/TimeTable'
import Access from './views/Access'
import Login from './views/Login'
import Bingo from './views/Bingo'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'OverView',
            component: OverView,
            meta: {requireAuth: true}
        },
        {
            path: '/timetable',
            name: 'TimeTable',
            component: TimeTable,
            meta: {requireAuth: true}
        },
        {
            path: '/access',
            name: 'Access',
            component: Access,
            meta: {requireAuth: true}
        },
        {
            path: '/bingo',
            name: 'Bingo',
            component: Bingo,
            meta: {requireAuth: true}
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '*'
        }
    ]
})

router.beforeEach((to, from, next) => {
    let requiresAuth = to.matched.some(record => record.meta.requireAuth)
    if (requiresAuth) {
        // このルートはログインされているかどうか認証が必要です。
        // もしされていないならば、ログインページにリダイレクトします。
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                next()
            } else {
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            }
        })
    } else {
        console.log(to.path+", "+from.path)
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // if (to.path === '/login') next(false)
                //ログイン中にログインページへいけないようにする
                next({path: '/'})
            } else {
                next()
            }
        })
    }
})

export default router

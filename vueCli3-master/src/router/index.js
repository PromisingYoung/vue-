import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import $ from '@/until/common'
Vue.use(Router)

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    //如果用户之前进入了该页面,那么再次打开,依旧回到这个页面
    console.log(from.name)
    if (from.name === null && $.getCookie('urlName')) {
        let name = $.getCookie('urlName')
        $.delCookie('urlName')
        next({ name })
        return
    }
    //如果用户要跳转的页面不存在,那么重新定位回首页或者自己配置404页面
    if (to.name === null) {
        next({ name: 'demo1' })
        return
    }
    //auth进行权限判断
    if (to.matched.some(r => r.meta.auth)) {
        const token = $.getCookie('token')
        if (token && token !== 'undefined')
            next()
        else {
            next({
                name: 'demo1',
                query: {
                    redirect: to.name
                }
            })
            return
        }
        return
    }
    next()
})

router.afterEach(to => {
    //保存用户跳转的最后一次页面
    $.setCookie('urlName', to.name)
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
Vue.use(Router)

const Home = () => import('views/home/index')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 404 跳转到首页
  // { path: '*', component: Home }
]

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
})

const setTitle = title => {
  title = title ? title + '' : '活范儿'
  window.document.title = title
}

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title) // 设置document标题
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router

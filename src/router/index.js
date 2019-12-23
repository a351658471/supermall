import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('@/views/home/home')
const detail = () => import('@/views/detail/detail')
const category = () => import('@/views/category/category')
const profile = () => import('@/views/profile/profile')
const cart = () => import('@/views/cart/cart')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'

  },
 {
   path:'/home',
   component:home,
 },
 {
   path:'/detail',
   component:detail
 },
 {
   path:'/category',
   component:category
 },
 {
   path:'/profile',
   component:profile
 },
 {
  path:'/cart',
  component:cart
}
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router

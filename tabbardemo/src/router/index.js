import Vue from 'vue'
import Router from 'vue-router'


import Home from '../pages/home/home'
import Cart from '../pages/cart/cart'
import Cate from '../pages/category/category'
import Profile from '../pages/profile/profile'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cate',
      name: 'Cate',
      component: Cate
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router


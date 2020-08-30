import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
// const Classfication = () => import('../views/classification/Classification.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const GoodDetail = () => import('../views/goodDetail/GoodDetail.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      keepActive: true
    }
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shopCart',
    component: ShopCart
  },
  {
    path: '/goodDetail',
    component: GoodDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

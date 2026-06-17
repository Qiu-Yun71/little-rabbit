import { createRouter, createWebHistory } from 'vue-router'

//解释下，一般写到login这里，会自动找文件夹内的index入口文件，但是尽量写全避免出错，只写文件夹名字实际上导入的是文件夹中的index文件
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import Subcategory from '@/views/Subcategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/PayBack/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      //注意children内path最前面没有/，且第一个一般是默认子路由路径为空
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: Subcategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'payback',
          component: PayBack
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }

  ],
  //定制路由滚动行为，切换路由时滚动到页面顶部
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/src/views/Login.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('/src/views/ProductList.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('/src/views/ProductDetail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('/src/views/Cart.vue')
  },
  {
    path: '/saved',
    name: 'Saved',
    component: () => import('/src/views/Saved.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('/src/views/History.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
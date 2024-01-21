import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Content',
      component: () => import('@/views/Content.vue'),
      meta: {
        layout: 'defaultLayout'
      }
    },
    {
      path: '/product/:id',
      name: 'product-card',
      component: () => import('@/views/ProductCard.vue'),
      meta: {
        layout: 'defaultLayout'
      }
    },
    {
      path: '/bag',
      name: 'bag',
      component: () => import('@/views/BagItem.vue'),
      meta: {
        layout: 'defaultLayout'
      }
    },

  ]
})

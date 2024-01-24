<template>
  <div class="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { createStore } from '@/stores/store.ts'

const route = useRoute()
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'defaultLayout':
      return DefaultLayout
  }
  return route.meta.layout
})
const store = createStore()
store.getItem()
onMounted(() => {
  const data = localStorage.getItem('cart')
  if (data) {
    store.cart = JSON.parse(data)
  }
  store.getSum()
})
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>

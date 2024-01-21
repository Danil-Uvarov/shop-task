<template>
  <section class="bag__body">
    <div class="bag__title">Bag</div>
    <div class="bag__item">
      <div class="item__block" v-for="(item, index) in cart" :key="item.id">
        <div class="quantity__block">
          <Minus @click="deleteItem(index)" />
          <div class="quantity">{{ item.quantity }}</div>
          <Plus @click="pushItem(index)" />
        </div>
        <router-link :to="{ name: 'product-card', params: { id: item.id } }">
          <img :src="item.image" alt="" />
        </router-link>

        <div class="bag__bottom-block">
          <CrossDelete @click="deleteProduct(index)" />
        </div>
      </div>
    </div>
    <div class="bag__total">Bag Total:{{ cart.length }}</div>
    <router-link :to="{ name: 'bag' }">
      <BagBlackButton>View Bag</BagBlackButton>
    </router-link>
  </section>
</template>

<script setup lang="ts">
import Minus from '../components/ui/Minus.vue'
import Plus from '@/components/ui/Plus.vue'
import CrossDelete from '@/components/ui/CrossDelete.vue'
import { storeToRefs } from 'pinia'
import { createStore } from '@/stores/store.ts'
import BagBlackButton from './ui/BagBlackButton.vue'

const store = createStore()
const { cart } = storeToRefs(store)
const deleteProduct = (index: number) => {
  cart.value.splice(index, 1)
}
const deleteItem = (index: number) => {
  const currentItem = cart.value[index].quantity
  if (currentItem !== 1) {
    cart.value[index].quantity--
    store.setLocalStorage()
    return
  }
  cart.value.splice(index, 1)
  store.setLocalStorage()
}
const pushItem = (index: number) => {
  cart.value[index].quantity++
  store.setLocalStorage()
}
</script>

<style scoped>
.bag__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 345px;
  overflow: auto;
}

.bag__title {
  font-weight: 500;
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;
}

.bag__item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.bag__bottom-block {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.item__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  padding: 8px;
}
.quantity__block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.quantity {
  padding: 0px;
  margin: 0px;
  display: flex;
}
.item__block img {
  width: 100%;
  height: 100%;
  max-width: 79px;
  max-height: 79px;
  margin-right: 12px;
  margin-top: 20px;
  object-fit: contain;
}

.bottom__quantity {
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  margin-left: 30px;
}

.bag__total {
  margin-top: 34px;
}

@media (max-width: 650px) {
  .bag__body {
    max-width: 200px;
  }
  .bag__title {
    font-size: 18px;
    padding-top: 18px;
  }
  .item__block img {
    max-width: 49px;
    max-height: 49px;
    margin-right: 8px;
    margin-top: 12px;
  }
}
</style>

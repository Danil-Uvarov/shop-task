<template>
  <section class="content">
    <div class="content__wrapper">
      <div class="content__item-block">
        <div class="item" v-for="(item, index) in products" :key="item.id">
          <router-link :to="{ name: 'product-card', params: { id: item.id } }">
            <img :src="item.images[0]" alt="" class="item__cart-img" />
          </router-link>
          <div class="item__content-block">
            <router-link :to="{ name: 'product-card', params: { id: item.id } }">
              <div class="item__name">{{ item.title }}</div>
            </router-link>
            <div class="item__footer">
              <div class="item__price">{{ item.price }}$</div>
              <CartButtonItem @click="store.addCart(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CartButtonItem from '@/components/ui/CartButtonItem.vue'
import { createStore } from '@/stores/store.ts'
import { storeToRefs } from 'pinia'

const store = createStore()
const { products } = storeToRefs(store)
</script>

<style scoped>
.content {
  padding: 32px 18px 0 18px;
  display: flex;
  width: 100%;
  overflow: auto;
}

.content__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.content__item-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.item {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 224px;
  max-height: 397px;
  padding-top: 30px;
  font-family: Cabin;
}

.item__cart-img {
  border-radius: 22px;
  background-color: #fff;
  width: 100%;
  max-width: 162px;
  height: 232px;
  padding: 16px;
  object-fit: contain;
}

.item__name {
  max-width: 100%;
  padding-top: 16px;
  font-weight: 500;
  font-size: 20px;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.item__footer {
  width: 100%;
  display: flex;
  padding-top: 21px;
  justify-content: space-between;
  align-items: center;
}

.item__content-block {
  width: 100%;
  padding: 8px;
}

.item__price {
  font-weight: 500;
  font-size: 20px;
  flex: 1 1 auto;
}

.item__footer img {
  width: 100%;
  height: 100%;
  max-width: 34px;
  max-height: 34px;
  border-radius: 9px;
}

@media (max-width: 650px) {
  .item {
    max-width: 124px;
    max-height: 297px;
    padding-top: 18px;
  }
  .item__cart-img {
    height: 98px;
    padding: 8px;
  }
  .item__name {
    font-size: 12px;
  }
  .item__price {
    font-size: 12px;
  }
}
</style>

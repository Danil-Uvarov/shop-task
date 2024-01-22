<template>
  <section class="content__body">
    <div class="content__wrapper">
      <div class="content__input-block">
        <label class="content__label-block">
          <p class="label__title">Search item</p>
          <SearhInput />
        </label>
      </div>
      <div class="item__block">
        <div class="item" v-for="(item, index) in products" :key="item.id">
          <router-link :to="{ name: 'product-card', params: { id: item.id } }">
            <img :src="item.images[0]" alt="" class="item__cart-img" />
          </router-link>
          <div class="item__content-block">
            <router-link :to="{ name: 'product-card', params: { id: item.id } }">
              <div class="item__name">{{ item.title }}</div>
            </router-link>
            <div class="item__footer-block">
              <div class="footer__price">{{ item.price }}$</div>
              <CartButtonItem @click="store.addCart(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearhInput from '@/components/ui/SearhInput.vue'
import CartButtonItem from '@/components/ui/CartButtonItem.vue'
import { createStore } from '@/stores/store.ts'
import { storeToRefs } from 'pinia'

const store = createStore()
const { products } = storeToRefs(store)
</script>

<style scoped>
.content__body {
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

.content__input-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content__label-block {
  width: 100%;
  max-width: 507px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.label__title {
  font-weight: 400;
  font-size: 16px;
  color: #60695c;
}

.input-header::-webkit-input-placeholder {
  font-family: 'Cabin' sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: rgba(26, 31, 22, 0.5);
  text-align: center;
}

.item__block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.line {
  width: 4px;
  background-color: rgba(26, 31, 22, 0.5);
  margin: 40px;
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

.item__model {
  color: #60695c;
  font-size: 16px;
  font-weight: 400;
  padding-top: 8px;
}

.item__footer-block {
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

.footer__price {
  font-weight: 500;
  font-size: 20px;
  flex: 1 1 auto;
}

.item__footer-block img {
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
  .footer__price {
    font-size: 12px;
  }
}
</style>

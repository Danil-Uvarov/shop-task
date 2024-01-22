<template>
  <section class="bag-item__body">
    <h2 class="bag__header">Check your Bag Items</h2>
    <router-link :to="{ name: 'Content' }">
      <BackButton />
    </router-link>
    <div class="item__wrapper" v-for="(item, index) in cart" :key="item.id">
      <div class="item__bag">
        <div class="item__image-wrapper">
          <img :src="item.images[0]" alt="" class="item-image" />
        </div>
        <div class="item__block-content">
          <h3 class="name">{{ item.title }}</h3>
          <p class="model">{{ item.category }}</p>
          <p class="description">{{ item.description }}</p>

          <div class="wrapper-rating">
            <img src="/public/img/Rating.png" alt="" class="star" />
            <div class="balls">5/5</div>
          </div>
          <div class="item__footer">
            <div class="price">$ {{ item.price }}</div>
            <div class="quantity__block">
              <Minus @click="deleteItem(index)" />
              <div class="quantity">{{ item.quantity }}</div>
              <Plus @click="pushItem(index)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Minus from '../components/ui/Minus.vue'
import Plus from '@/components/ui/Plus.vue'
import { storeToRefs } from 'pinia'
import { createStore } from '@/stores/store.ts'
import BackButton from '@/components/ui/BackButton.vue'

const store = createStore()
const { cart } = storeToRefs(store)

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
.bag-item__body {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 48px 48px 0 34px;
}

.bag__header {
  width: 100%;
  margin: 0px;
  margin-top: 56px;
  font-weight: 400;
  font-size: 49px;
  color: #000;
}

.item__wrapper {
  width: 100%;
  margin-top: 34px;
}

.item__bag {
  width: 100%;

  display: flex;
  border-radius: 21px;
  background-color: #fff;
}

.item-image {
  width: 100%;
  height: 100%;
  max-width: 203px;
  max-height: 254px;
  object-fit: contain;
  padding: 0 16px 0 24px;
}

.item__block-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 8px;
}

.name {
  font-weight: 400;
  font-size: 31px;
  color: #1a1f16;
  margin-top: 16px;
}

.model {
  font-weight: 400;
  font-size: 20px;
  color: #60695c;
  margin-top: 16px;
}

.description {
  font-weight: 400;
  font-size: 20;
  color: black;
  margin-top: 16px;
}

.wrapper-rating {
  width: 100%;

  display: flex;
}

.star {
  width: 100%;
  height: 100%;
  max-width: 168px;
  max-height: 24px;
  object-fit: contain;
}

.balls {
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  color: #12805d;
}

.item__footer {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

.price {
  font-weight: 400;
  font-size: 20px;
  text-wrap: nowrap;
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
@media (max-width: 1100px) {
  .name {
    font-size: 20px;
  }
  .model {
    font-size: 16px;
  }

  .balls {
    font-size: 12px;
    padding-top: 8px;
  }

  .quantity__block {
    gap: 10px;
  }
}
@media (max-width: 820px) {
  .item__footer {
    flex-direction: column;
    justify-content: space-around;
  }
}
@media (max-width: 650px) {
  .item__block-content {
    margin: 0;
  }
  .bag__header {
    font-size: 32px;
    margin-top: 10px;
  }
  .item__wrapper {
    margin-top: 12px;
  }
  .name {
    font-size: 16px;
  }
  .model {
    font-size: 8px;
  }
  .description {
    overflow: hidden;
  }
  .description:focus {
    overflow: auto;
  }
  .balls {
    font-size: 8px;
    padding-top: 8px;
  }

  .quantity__block {
    gap: 10px;
  }
  .price {
    font-size: 16px;
  }
}
</style>

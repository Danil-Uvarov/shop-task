<template>
  <section class="product">
    <router-link to="/">
      <back-button />
    </router-link>

    <div class="product__content">
      <div class="content__image-block">
        <div class="content__image">
          <img :src="product.images[0]" alt="#" />
          <img :src="product.images[1]" alt="#" />
          <img :src="product.images[2]" alt="#" />
        </div>
        <img :src="product.images[0]" alt="" class="image__main" />
      </div>
      <div class="text">
        <div class="text__header-block">
          <h2 class="text__name">{{ product.title }}</h2>
          <h3 class="text__category">{{ product.category }}</h3>
        </div>
        <div class="text__appraisal">
          <div class="text__star-block"><img src="/src/assets/img/Rating.png" alt="" /></div>
          <div class="text__balls">5.5</div>
        </div>
        <div class="text__price">{{ product.price }}$</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__line"></div>
      <h3 class="bottom__title">Description</h3>
      <div class="bottom__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur distinctio
        aut magnam mollitia quam quasi, deserunt sapiente possimus maiores est. Eius aspernatur iste
        amet quo modi eaque sunt ipsa maiores quaerat eos mollitia repudiandae similique rem tenetur
        officia veritatis itaque, doloribus recusandae nemo aliquam. Beatae doloremque voluptatem
        sequi vel ut dicta tenetur non similique, delectus, quod velit ratione error quaerat harum
        esse. Quas distinctio earum ipsa inventore molestiae facilis omnis reiciendis placeat
        architecto iure. Beatae aliquam corrupti quaerat voluptas explicabo doloribus laborum,
        impedit voluptatem ullam tempora enim rem est eveniet nobis corporis cupiditate mollitia
        modi officiis accusamus tenetur tempore sapiente placeat quo. Libero debitis alias nesciunt.
        Tenetur eligendi, ipsum expedita iste ipsam cupiditate! Rem deleniti architecto repellat
        aspernatur iure?
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BackButton from '@/components/ui/BackButton.vue'
import { ref, computed, watch } from 'vue'
import type {IProductStore} from "@/models/requests/IProductStore";
import {createStore} from "@/stores/store";

const route = useRoute()
const store = createStore()
const productId = computed(() => Number(route.params.id))
const product = ref<IProductStore>({
  id: 1,
  title: '',
  price: 1,
  description: '',
  discountPercentage: 0,
  category: '',
  images: '',
  rating: 1,
  stock: 1,
  brand: '',
  thumbnail:'',
  quantity: 0,})
watch(
  productId,
  async (productId) => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    product.value = await response.json()
    await store.getSum()
  },
  { immediate: true }
)
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  overflow: auto;
  width: 100%;
  height: 100%;
}
.product__content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.content__image-block {
  width: 100%;
  height: 100%;
  display: flex;
  padding-right: 30px;
}

.content__image {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}

.content__image img {
  border-radius: 13px;
  padding: 8px;
  margin: 0px 16px 24px 0px;
  width: 100%;
  height: 100%;
  max-width: 34px;
  object-fit: contain;
  background-color: #fff;
}

.image__main {
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 13px;
  max-width: 242px;
  max-height: 302px;
  object-fit: contain;
  background-color: #fff;
}

.text {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.text__header-block {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.text__name {
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 61px;
  margin-bottom: 8px;
  font-family: Cabin;
}

.text__category {
  width: 100%;
  font-weight: 500;
  font-size: 31px;
  margin: 0;
  color: rgba(26, 31, 22, 0.5);
  font-family: Cabin;
}

.text__appraisal {
  width: 100%;
  display: flex;
  margin-top: 18px;
}
.text__star-block {
  width: 100%;
  height: 100%;
  max-width: 168px;
}
.text__star-block img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.text__balls {
  color: #12805d;
  font-size: 31px;
  font-weight: 400;
}

.text__price {
  width: 100%;
  padding: 16px 0 8px 0;
  font-weight: 500;
  font-size: 31px;
}

.bottom {
  width: 100%;
  height: 100%;
}
.bottom__line {
  width: 100%;
  height: 3px;
  background-color: #1a1f16;
}

.bottom__title {
  font-weight: 500;
  font-size: 31px;
  margin-top: 32px;
}

.bottom__description {
  margin-top: 31px;
}
@media (max-width: 1050px) {
  .image__main {
    height: 150px;
  }
  .content__image-bloc {
    padding-right: 10px;
  }
  .text__name {
    font-size: 28px;
    font-weight: 600;
  }
  .text__category {
    font-size: 18px;
  }
  .text__balls {
    font-size: 24px;
  }
  .text__price {
    font-size: 24px;
  }
}

@media (max-width: 650px) {
  .image__main {
    height: 65px;
  }
  .text__name {
    font-size: 18px;
    font-weight: 500;
  }
  .text__category {
    font-size: 12px;
  }
  .text__balls {
    font-size: 12px;
  }
  .text__price {
    font-size: 12px;
  }
}
</style>

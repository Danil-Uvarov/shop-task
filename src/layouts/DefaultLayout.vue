<template>
  <section class="default-layout">
    <Menu></Menu>
    <div class="default__content">
      <slot> </slot>
      <div class="default__line"></div>
      <Bag></Bag>
    </div>
  </section>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Bag from '@/components/Bag.vue'
</script>

<style scoped>
.default-layout {
  overflow: hidden;
  display: flex;
  height: 100vh;
  width: 100%;
}
.default__content {
  display: contents;
}
.default__line {
  margin: 36px 5px 36px 10px;
  width: 4px;
  display: flex;
  text-align: center;
  background-color: #1a1f16;
}

@media (max-width: 650px) {
  .default-layout {
    display: flex;
    flex-direction: column;
  }
  .default__content {
    display: flex;
    height: 100%;
  }
}
</style>

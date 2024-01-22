<template>
  <button>
    <img src="/public/img/cart.svg" alt="" />
    <p><slot /></p>
  </button>
</template>
<script setup lang="ts"></script>
<style scoped>
button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  max-width: 174px;
  max-height: 47px;
  padding: 0;
  margin: 24px 25px 48px 0;
  border-radius: 14px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  gap: 9px;
  align-items: center;
  background-color: #1a1f16;
}
img {
  width: 100%;
  height: 100%;
  max-width: 19px;
  max-height: 22px;
  background-color: #1a1f16;
}
p {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
}
</style>

<template>
  <div class="searh-input">
    <input class="input" type="text" placeholder="Products..." />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.searh-input {
  width: 100%;
  text-align: center;
}
.input {
  width: 100%;
  max-width: 507px;
  padding: 28px 0 20px 12px;
  border-radius: 13px;
  box-shadow: 0px 4px 16px rgba(26, 31, 22, 0.15);
  border: 0px;
}
@media (max-width: 650px) {
  .input {
    padding: 6px 0 6px 8px;
  }
}
</style>

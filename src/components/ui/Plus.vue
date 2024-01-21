<template>
  <div class="plus"></div>
</template>
<script setup lang="ts"></script>
<style scoped>
.plus {
  cursor: pointer;
  width: 10.5px;
  height: 2px;
  background-color: #02d693;
}
.plus::after {
  cursor: pointer;
  content: '';
  display: block;
  width: 10.5px;
  height: 2px;
  background-color: #02d693;
  transform: rotate(90deg);
}
</style>

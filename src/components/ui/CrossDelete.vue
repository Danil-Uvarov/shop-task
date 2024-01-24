<template>
  <button class="cross-button">
    <span></span>
  </button>
</template>
<script setup lang="ts"></script>
<style scoped>
.cross-button {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

span {
  display: block;
  width: 15px;
  height: 3px;
  background-color: black;
  transform: rotate(45deg);
}
span::before {
  display: block;
  content: '';
  width: 15px;
  height: 3px;
  background-color: black;
  transform: rotate(-90deg);
}
</style>

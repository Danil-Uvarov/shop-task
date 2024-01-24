<template>
<button class="back-button">
  <p class="back__text"> &#60 Back </p>
</button></template>
<script setup lang="ts"></script>
<style scoped>
.back-button {
  cursor: pointer;
margin: 56px 0 24px 4px;
width: 88px;
height: 40px;
border: 2px solid #EDEDED;


}
.back__text {
  font-weight: 600;
font-size: 20px;
color: #1A1F16;
white-space: nowrap;
}
@media (max-width: 650px) {
  .button__back{
    margin: 24px 0 18px 4px;
  }
}
</style>
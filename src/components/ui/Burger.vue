<template>
  <div class="burger">
    <button class="burger__open-button" @click="open = !open">
      <span class="burger__button-line" />
    </button>
    <div v-if="open" class="burger__menu-wrapper">
      <div class="burger-menu">
        <div class="burger__navigation-block">
          <nav class="burger__menu-navigation menu">
            <ul class="menu__list">
              <li class="menu__link">О нас</li>
              <li class="menu__link">Услуги</li>
              <li class="menu__link">Проекты</li>
              <li class="menu__link">Блог</li>
              <li class="menu__link">Контакты</li>
            </ul>
          </nav>

          <div class="burger__close-block" @click="open = !open">
            <span key="menu" class="burger__close menu" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
interface props {
  navbarItems: object
}
defineProps<props>()
</script>
<style scoped>
[class*='contact'] {
  color: #9aa8ba;
  font-size: 18px;
  text-decoration: none;
}
.burger {
  display: none;
  position: relative;
}

.burger__open-button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 2;
  width: 24px;
  height: 24px;
}

.burger__button-line {
  position: absolute;
  content: '';
  top: 8px;
  right: 0px;
  display: block;
  width: 24px;
  height: 3px;
  background-color: #000000;
  border-radius: 3px;
}

.burger__button-line::before {
  content: '';
  top: 8px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: #000000;
  border-radius: 3px;
}

.burger__button-line::after {
  content: '';
  bottom: 8px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: #000000;
  border-radius: 3px;
}
.burger__menu-wrapper {
  background-color: #24252f;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.burger-menu {
  padding: 97px 92px 145px 67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.burger__navigation-block {
  display: flex;
  justify-content: space-between;
  padding-bottom: 68px;
}
.burger__menu-navigation {
  padding: 34px 0 0 0;
  display: flex;
  flex-direction: column;
  color: #000000;
}

.menu__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu__link {
  cursor: pointer;
  list-style: none;
  color: #eef3ff;
}
.menu__link:hover {
  transition: 0.5s;
  border-bottom: 1px solid #2d76f9;
}
.burger__close-block {
  position: relative;
  width: 31px;
  height: 31px;
}
.burger__close {
  cursor: pointer;
  position: absolute;
  content: '';
  top: 0px;
  left: 0px;
  width: 31px;
  height: 31px;
  opacity: 0.3;
}

.burger__close::before,
.burger__close::after {
  position: absolute;
  top: 0px;
  right: 15px;
  content: '';
  height: 31px;
  width: 2px;
  background-color: #b7c6e7;
}

.burger__close:before {
  transform: rotate(45deg);
}

.burger__close:after {
  transform: rotate(-45deg);
}
.burger__close-block:hover {
  transition: 1s;

  background-color: #100d0d;
}

@media (max-width: 650px) {
  .burger {
    display: block;
  }
}
</style>

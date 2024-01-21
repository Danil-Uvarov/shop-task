<template>
  <section class="menu__body">
    <div class="menu__header">
      <nav class="header__nav">
        <router-link :to="{ name: 'Content' }">
          <img src="/public/img/Logo.png" alt="" class="header__logo" />
        </router-link>
        <img src="/public//img/Nav-Link@2x.png" alt="" class="header__link-home" />
        <img src="/public/img/Vector.png" alt="" class="header__link-cart" />
      </nav>
    </div>
    <img src="/public/img/Nav-Link.png" alt="" class="footer__link" />
    <Burger />
  </section>
</template>

<script setup lang="ts">
import Burger from './ui/Burger.vue'
</script>

<style scoped>
.menu__body {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-left: 16px;
  align-items: center;
  max-width: 100px;
  width: 100%;
}

.menu__header {
  height: 100%;
}
.header__nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
}
.menu__burger {
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 2;
  width: 24px;
  height: 24px;
}

.burger-span {
  position: relative;
  top: 5px;
  right: 0px;
  display: block;
  width: 24px;
  height: 3px;
  background-color: black;
  border-radius: 3px;
}

.burger-span::after {
  content: '';
  top: 5px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: black;
  border-radius: 3px;
}
.burger-span::before {
  content: '';
  bottom: 5px;
  right: 0px;
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: black;
  border-radius: 3px;
}

.header__logo {
  margin: 28px;
  width: 32px;
  height: 37px;
}

.header__link-home {
  margin: 28px;
  width: 40px;
  height: 40px;
}

.header__link-cart {
  margin: 28px;
  width: 20px;
  height: 21px;
}

.footer__link {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 16px;
  max-width: 35px;
  max-height: 35px;
}
@media (max-width: 650px) {
  .menu__body {
    margin-top: 12px;
    flex-direction: row;
    max-width: none;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 5px 0;
  }
  .menu__header {
    display: none;
  }
  .footer__link {
    bottom: 0;
    max-width: 18px;
    max-height: 18px;
  }
}
</style>

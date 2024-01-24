<template>
  <section class="menu__body">
    <div class="menu__header">
      <nav class="header__nav">
        <router-link :to="{ name: 'Content' }">
          <img src="@/assets/img/home-black.png" alt="" class="header__link-home" />
        </router-link>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
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
.header__link-home {
  margin: 28px;
  width: 40px;
  height: 40px;
}
@media (max-width: 650px) {
  .menu__body {
    margin-top: 12px;
    flex-direction: row;
    max-width: none;
    width: 100%;
    align-items: center;
    justify-content: space-around;
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

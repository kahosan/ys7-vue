<template>
  <div class="header">
    <div class="header-nav flex-nowrap">
      <div class="lg-navbar inline-block leading-none">
        <a href="/ys7"><img src="@assets/img/logo.svg" alt="LOGO" /></a>
      </div>
      <div class="navbar-collapse">
        <router-link to="/ys7" class="navlink">萤石云</router-link>
        <router-link to="/rootcloud" class="navlink">根云</router-link>
      </div>
      <div class="pl-12">
        <n-dropdown :options="options" @select="handleSelect">
          <n-button color="#2f4f4f">{{ userName }}</n-button>
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
  import nav from '@components/common/header/use/useNav';
  const { options, userName, handleSelect } = nav();
</script>

<style lang="scss">
  @import '@assets/scss/index.scss';
</style>

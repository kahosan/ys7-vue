<template>
  <div id="header" class="header">
    <ul id="menu"></ul>
    <div id="userNav" class="header nav">
      <n-dropdown :options="options" @select="handleSelect">
        <n-button>{{ userName }}</n-button>
      </n-dropdown>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@assets/scss/index.scss';
</style>

<script setup>
  import userNav from '@components/common/header/useUserNav';

  const { options, userName, handleSelect } = userNav();
</script>

<template>
  <div id="header" class="header">
    <div id="topNav" class="nav">
      <ul>
        <li id="logo">
          <img src="" alt="这里插入 LOGO" />
        </li>
        <li id="logout">
          <n-dropdown :options="options" @select="handleSelect">
            <n-button>{{ userName }}</n-button>
          </n-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@assets/scss/index.scss';
</style>

<script setup>
  import nav from '@components/common/header/useNav';

  const { options, userName, handleSelect, jumpHome } = nav();
</script>

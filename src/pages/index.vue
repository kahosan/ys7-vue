<template>
  <Header></Header>
  <div class="row">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import Header from '@/components/my-header.vue';
</script>

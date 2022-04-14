<template>
  <div>{{ cameraInfo }}</div>
</template>

<script setup>
  import { useRoute } from 'vue-router';

  const cameraInfo = useRoute().params;

  console.log(cameraInfo);
</script>

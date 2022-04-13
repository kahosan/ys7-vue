<template>
  <div>{{ picUrl }}</div>
</template>

<script setup>
  const props = defineProps(['cameraInfo']);
  const cameraInfo = props.cameraInfo;

  console.log(cameraInfo.picUrl);
</script>

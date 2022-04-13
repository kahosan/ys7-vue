<template>
  <div class="mx-0 mb-30px lg:mx-20 lg:mb-20">
    <n-card :title="cameraName" class="w-100 rounded-xl">
      <template #cover> <img :src="capture" class="rounded-t-xl" /> </template>
      <div id="onlineStatus" class="pb-5">
        {{ cameraStatus }}
      </div>
      <router-link to="/ys7">跳转控制台</router-link>
    </n-card>
  </div>
</template>

<style lang="scss">
  .n-card-header__main {
    font-size: 16px;
  }
</style>

<script setup>
  import { getCameraCapture, getCameraStatus } from '@/components/common/camera/cameraInfo';

  const props = defineProps(['cameraInfo']);
  const cameraInfo = props.cameraInfo;

  const capture = getCameraCapture(cameraInfo.deviceSerial);
  const cameraStatus = getCameraStatus(cameraInfo.status);

  const cameraName = cameraInfo.channelName;
</script>

<template>
  <div class="mx-0 mb-30px lg:mx-20 lg:mb-20">
    <n-card :title="cameraName" class="w-100 rounded-xl">
      <template #cover> <img :src="capture" class="rounded-t-xl" alt="抓拍图片" /> </template>
      <div id="onlineStatus" class="pb-5">
        {{ cameraStatus }}
      </div>
      <router-link :to="{ name: 'deviceIndex', params: { deviceSerial, ...cameraInfo } }" class="">跳转控制台</router-link>
    </n-card>
  </div>
</template>

<script setup>
  import { getCameraCapture, getCameraStatus } from '@/components/common/camera/cameraInfo';
  import { toRefs } from 'vue';

  const props = defineProps({
    cameraInfo: {
      type: Object,
      required: true,
    },
  });

  const { deviceSerial, status, deviceName } = toRefs(props.cameraInfo);

  const capture = getCameraCapture(deviceSerial.value);
  const cameraStatus = getCameraStatus(status.value);

  const cameraName = deviceName.value;
</script>

<style lang="scss">
  .n-card-header__main {
    font-size: 16px;
  }
</style>

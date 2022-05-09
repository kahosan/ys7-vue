<template>
  <h2 class="mt-5 ml-5 sm:ml-20">
    {{ cameraName ?? 'undefined' }}
  </h2>
  <div id="cameraVideo" class="flex ml-5 sm:ml-20 mt-3">
    <div id="video-container"></div>
    <div class="ml-5 mt-2 px-5 rounded-xl bt <sm:hidden">
      <n-button type="primary" @click="changeNameShow = true">更改名称</n-button>
      <n-modal
        v-model:show="changeNameShow"
        preset="dialog"
        title="确认更改名称嘛"
        content=""
        positive-text="确认"
        negative-text="算了"
        @positive-click="
          changeName(deviceSerial, newName).then(res => {
            if (res.data.code === '200') {
              notification.success({
                content: '更改成功',
                meta: '您已成功更改了摄像头名称',
              });

              cameraName = newName;
            } else {
              notification.error({
                content: '更改失败',
                meta: `错误信息: ${res.data.msg}`,
              });
            }
          })
        "
      >
        <n-input v-model:value="newName" type="text" placeholder="请输入要更改的名称"></n-input>
      </n-modal>
      <n-button type="primary" @click="decryptCameraShow = true"> 解密视频 </n-button>
      <n-modal
        v-model:show="decryptCameraShow"
        preset="dialog"
        title="确认解密视频嘛"
        content=""
        positive-text="确认"
        negative-text="算了"
        @positive-click="
          decryptCamera(deviceSerial).then(res => {
            if (res.data.code === '200') {
              notification.success({
                content: '解密成功',
                meta: '您已成功解密了摄像头',
              });
            } else {
              notification.error({
                content: '解密失败',
                meta: `错误信息: ${res.data.msg}`,
              });
            }
          })
        "
      >
      </n-modal>
      <n-button type="primary" @click="encryptCameraShow = true"> 加密视频 </n-button>
      <n-modal
        v-model:show="encryptCameraShow"
        preset="dialog"
        title="确认加密视频嘛"
        content=""
        positive-text="确认"
        negative-text="算了"
        @positive-click="
          encryptCamera(deviceSerial).then(res => {
            if (res.data.code === '200') {
              notification.success({
                content: '加密成功',
                meta: '您已成功加密了摄像头',
              });
            } else {
              notification.error({
                content: '加密失败',
                meta: `错误信息: ${res.data.msg}`,
              });
            }
          })
        "
      >
      </n-modal>
      <n-button type="primary" @click="destroyVideo">销毁视频</n-button>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import { useNotification } from 'naive-ui';
  import { getToken, getCameraLive } from '@components/common/camera/cameraInfo';
  import { createVideo, jumpControl } from '@components/common/camera/cameraVideo';
  import { changeName, encryptCamera, decryptCamera } from '@components/common/camera/cameraControl';
  import { ref } from 'vue';

  const notification = useNotification();
  const cameraInfo = useRoute().query;
  const deviceSerial = cameraInfo.deviceSerial;
  const cameraName = ref(cameraInfo.deviceName);

  const changeNameShow = ref(false);
  const encryptCameraShow = ref(false);
  const decryptCameraShow = ref(false);
  let newName = ref('');

  const promise = Promise.all([getToken(), getCameraLive(deviceSerial)]).then(([token, liveUrl]) => {
    const isMobile = 'ontouchstart' in document.documentElement;

    if (isMobile) {
      jumpControl(deviceSerial);
    } else {
      return createVideo(token, liveUrl);
    }
  });

  const destroyVideo = () => {
    promise.then(p => {
      p.stop();
      p.destroy();
    });
  };
</script>

<style lang="scss">
  .bt button {
    display: block;
    margin-bottom: 10px;
  }
</style>

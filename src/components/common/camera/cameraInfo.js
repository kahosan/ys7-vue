import { request } from '@/utils/request';
import { ref } from 'vue';

function getCameraCapture(deviceSerial) {
  let capture = ref('https://statics.ys7.com/device/assets/imgs/public/homeDevice.jpeg');

  request.post('/api/capture', { deviceSerial }).then(res => {
    const code = res.data?.code;

    if (code === undefined) {
      capture.value = res.data.picUrl;
    }
  });

  return capture;
}

function getCameraStatus(status) {
  const obj = {
    1: '在线',
    0: '不在线',
  };

  return obj[status];
}

export { getCameraCapture, getCameraStatus };

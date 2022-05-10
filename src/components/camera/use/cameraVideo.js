import { request } from '@/utils/request';
import EZUIKit from 'ezuikit-js';

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}

function createVideo(token, liveUrl) {
  return new EZUIKit.EZUIKitPlayer({
    id: 'video-container', // 视频容器ID
    accessToken: token,
    url: liveUrl,
    template: 'pcLive',
    width: getWidth() - 400,
    height: getHeight() - 200,
  });
}

async function jumpControl(deviceSerial) {
  window.location.href = `https://open.ys7.com/jssdk/theme/h5/live.html?deviceSerial=${deviceSerial}&channelNo=1&accessToken=${
    (await request.get('/api/token')).data
  }`;
}

export { createVideo, jumpControl };

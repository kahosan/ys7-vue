import EZUIKit from 'ezuikit-js';

function getWidth() {
  const client = document.getElementsByTagName('body')[0].clientWidth;

  return client >= 1920 ? 1280 : client >= 1280 ? 960 : client >= 960 ? 640 : client >= 640 ? 480 : 320;
}

function getHeight() {
  const client = document.getElementsByTagName('body')[0].clientHeight;

  return client >= 1080 ? 720 : client >= 720 ? 480 : client >= 480 ? 360 : 360;
}

function createVideo(token, liveUrl) {
  return new EZUIKit.EZUIKitPlayer({
    id: 'video-container', // 视频容器ID
    accessToken: token,
    url: liveUrl,
    template: 'pcLive',
    width: getWidth(),
    height: getHeight(),
  });
}

console.log(getWidth());

export { createVideo };

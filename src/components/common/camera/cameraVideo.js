import EZUIKit from 'ezuikit-js';

function createVideo(token, liveUrl) {
  return new EZUIKit.EZUIKitPlayer({
    id: 'video-container', // 视频容器ID
    accessToken: token,
    url: liveUrl,
    template: 'pcLive',
    width: 1280,
    height: 720,
  });
}

export { createVideo };

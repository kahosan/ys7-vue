import { request } from '@utils/request';

function changeName(deviceSerial, deviceName) {
  return request.post('/api/changename', { deviceSerial, deviceName });
}

function encryptCamera(deviceSerial) {
  return request.post('/api/encrypt', { deviceSerial });
}

function decryptCamera(deviceSerial) {
  return request.post('/api/decrypt', { deviceSerial });
}

export { changeName, encryptCamera, decryptCamera };

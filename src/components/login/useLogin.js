import { request } from '@/utils/request';
import { encryptMD5 } from '@/utils/encrypt';

function handleLogin(userInfo) {
  const { userName, password } = userInfo;

  return request.post('/login', { username: encryptMD5(userName), password: encryptMD5(password) });
}

function changeBodyColor() {
  document.body.style.backgroundColor = '#f5f5f5';
}

export { handleLogin, changeBodyColor };

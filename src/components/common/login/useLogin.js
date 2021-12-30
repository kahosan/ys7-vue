import { reactive, toRefs, watch } from 'vue';
import router from '@router';
import { request } from '@/utils/request';
import { encryptMD5 } from '@/utils/encrypt';

const data = reactive({
  username: '',
  password: '',
  usernameTip: '',
  passwordTip: '',
  usernameError: false,
  passwordError: false,
});

const checkoutEmpty = () => {
  data.usernameError = false;
  data.passwordError = false;
  onusernameInput();
  onpasswordInput();
};

const onusernameInput = () => {
  data.usernameTip = data.username ? '' : ((data.usernameError = true), '请输入账号呀');
};

const onpasswordInput = () => {
  data.passwordTip = data.password ? '' : ((data.passwordError = true), '嗯？你没输入密码么？');
};

const clearSpaces = () => {
  data.username = data.username.trim();
  data.password = data.password.trim();
};

const login = () => {
  if ((checkoutEmpty(), clearSpaces(), data.username && data.password)) {
    request
      .post('/login', {
        username: encryptMD5(data.username),
        password: encryptMD5(data.password),
      })
      .then(res => {
        if (res.status === 200) {
          window.localStorage.setItem('userName', data.username);

          router.push('/');
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        if (err.response) {
          data.passwordTip = err.response.data.message;
          data.usernameError = true;
          data.passwordError = true;
        } else {
          console.log('Error', err.message);
        }
      });
  }
};

watch(
  () => data.username,
  () => {
    data.usernameTip = '';
    data.usernameError = false;
    onusernameInput();
  }
);

watch(
  () => data.password,
  () => {
    data.passwordTip = '';
    data.passwordError = false;
    onpasswordInput();
  }
);

const loginData = () => {
  return {
    ...toRefs(data),
    login,
  };
};

export default loginData;

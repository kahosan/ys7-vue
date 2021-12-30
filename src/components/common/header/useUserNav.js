import { h } from 'vue';
import { NIcon } from 'naive-ui';
import { LogOutOutline as LogoutIcon } from '@vicons/ionicons5';
import handleCookie from '@/utils/cookie';
import router from '@router';

const userName = window.localStorage.getItem('userName');

const renderIcon = icon => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
];

const handler = {
  logout() {
    window.localStorage.clear;
    handleCookie.remove('token');
    router.push('/login');
  },
};

function handleSelect(key) {
  handler[key]();
}

function useUserNav() {
  return {
    userName,
    options,
    handleSelect,
  };
}

export default useUserNav;

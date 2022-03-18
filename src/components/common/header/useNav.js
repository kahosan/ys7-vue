import { h } from 'vue';
import { NIcon } from 'naive-ui';
import { LogOutOutline as LogoutIcon } from '@vicons/ionicons5';
import handleCookie from '@/utils/cookie';
import route from '@/router';
import store from '@/store/store';

const userName = store.state.userName;

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
    location.reload();
  },
};

function handleSelect(key) {
  handler[key]();
}

function jumpHome() {
  route.push('/login');
}

function useNav() {
  return {
    userName,
    options,
    handleSelect,
    jumpHome,
  };
}

export default useNav;

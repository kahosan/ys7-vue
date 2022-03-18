import { reactive } from 'vue';
import handleLs from '@/utils/localStorage';

const store = {
  debug: false,
  state: reactive({
    userName: handleLs.get('userName'),
  }),

  setUserName(name) {
    if (this.debug) console.log('setUserNameAction triggered with', name);
    handleLs.set('userName', name);
  },
  clearUserName() {
    if (this.debug) console.log('clearUserNameAction triggered');
    handleLs.remove('userName');
  },
};

export default store;

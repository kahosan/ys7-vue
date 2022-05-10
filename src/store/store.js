import handleLs from '@/utils/localStorage';
import { reactive } from 'vue';

const store = {
  debug: false,
  state: reactive({
    userName: handleLs.get('userName'),
    userPassword: handleLs.get('userPassword'),
  }),

  setuserName(name) {
    if (this.debug) console.log('setuserNameAction triggered with ', name);
    handleLs.set('userName', name);
  },
  clearuserName() {
    if (this.debug) console.log('clearuserNameAction triggered');
    handleLs.remove('userName');
  },
  setuserPassword(password) {
    if (this.debug) console.log('setuserNameAction triggered with ', password);
    handleLs.set('userPassword', password);
  },
  clearuserPassword() {
    if (this.debug) console.log('clearuserNameAction triggered');
    handleLs.remove('userPassword');
  },
};

export default store;

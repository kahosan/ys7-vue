import handleLs from '@/utils/localStorage';

const store = {
  debug: false,
  state: {
    username: handleLs.get('username'),
    userpassword: handleLs.get('userpassword'),
  },

  setUserName(name) {
    if (this.debug) console.log('setUserNameAction triggered with ', name);
    handleLs.set('username', name);
  },
  clearUserName() {
    if (this.debug) console.log('clearUserNameAction triggered');
    handleLs.remove('username');
  },
  setUserPassword(password) {
    if (this.debug) console.log('setUserNameAction triggered with ', password);
    handleLs.set('userpassword', password);
  },
  clearUserPassword() {
    if (this.debug) console.log('clearUserNameAction triggered');
    handleLs.remove('userpassword');
  },
};

export default store;

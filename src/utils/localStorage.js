const handleLs = {
  init() {
    try {
      window.localStorage.clear();
    } catch (e) {
      console.log(e);
    }
  },

  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  },

  set(key, val) {
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      console.log(e);
    }
  },

  remove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  },
};

export default handleLs;

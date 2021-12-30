const handleCookie = {
  remove(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },

  get(key) {
    const cookie = document.cookie;
    const cookieArr = cookie.trim().split('; ');
    let cookieObj = {};

    cookieArr.forEach(item => {
      const arr = item.split('=');
      cookieObj[arr[0]] = arr[1];
    });
    return cookieObj[key];
  },
};

export default handleCookie;

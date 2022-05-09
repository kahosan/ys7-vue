import axios from 'axios'; //引入axios
import qs from 'qs'; //引入qs，用来序列化post类型的数据，否则后端无法接收到数据

// 设置post请求头
// axios.defaults.headers.post['Content-Type'] = '';

//在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie
axios.defaults.withCredentials = true;

// 设置统一请求 URL
axios.defaults.baseURL = 'http://192.167.5.121:8080';

// 创建axios实例，请求超时时间为300秒
const instance = axios.create({
  timeout: 30000,
});

// 请求和响应拦截可以根据实际项目需求进行编写
// 请求发起前拦截
// instance.interceptors.request.use(
//   config => {
//     //这里可以对接口请求头进行操作 如：config.headers['X-Token'] = token
//     console.log('请求拦截', config);
//     return config;
//   },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // 响应拦截（请求返回后拦截）
// instance.interceptors.response.use(
//   response => {
//     console.log('响应拦截', response);
//     return response;
//   },
//   error => {
//     console.log('catch', error);
//     return Promise.reject(error);
//   }
// );

// 按照请求类型对axios进行封装
const request = {
  get(url, data) {
    return instance.get(url, { params: data });
  },
  post(url, data) {
    return instance.post(url, qs.stringify(data));
  },
};
export { request };

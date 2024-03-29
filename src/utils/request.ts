/**
 * @File 请求拦截、相应拦截、错误统一处理
 * @Author author@static.vip
 * @Date 2023/2/23 15:49:47
 */

import axios from 'axios';
import QS from 'qs';
import toast from 'react-hot-toast';

// 环境的切换
if ( process.env.NODE_ENV == 'development' ) {
  axios.defaults.baseURL = 'http://127.0.0.1:7001/api';
}
else if ( process.env.NODE_ENV == 'debug' ) {
  axios.defaults.baseURL = '';
}
else if ( process.env.NODE_ENV == 'production' ) {
  axios.defaults.baseURL = '/api';
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = '';
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if ( response.status === 200 && response.data.code === 200 ) {
      return Promise.resolve(response.data);
    }
    if ( response.data.code === 404 ) {
      window.location.href = '/404';
      return Promise.reject(response);
    }

    if(response.data.code === 502) {
      toast.error('服务器异常，请稍后再试');
      return Promise.reject(response);
    }

    else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    // console.log('error.response.status', error.response.status);
    if ( error.response.status ) {
      switch ( error.response.status ) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          // 跳转逻辑
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          // 清除token
          localStorage.removeItem('token');
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          break;
        // 404请求不存在
        case 404:
          break;
        // 其他错误，直接抛出错误提示
        default:
      }
      return Promise.reject(error.response);
    }
  },
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data)
      })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

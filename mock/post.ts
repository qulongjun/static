/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:37:58
 */
import { MockMethod } from 'vite-plugin-mock';
import posts from './data/post.json';

export default [
  {
    url: '/api/article/top',
    method: 'get',
    response: () => {
      return {
        data: posts,
      };
    },
  },
  {
    url: '/api/article/featured',
    method: 'get',
    response: () => {
      return {
        data: {
          carousel: posts.slice(0, 4),
          list: posts.slice(1, 5),
        },
      };
    },
  },
  {
    url: '/api/article/latest',
    method: 'get',
    response: () => {
      return {
        data: {
          list: posts,
          count: 300,
        },
      };
    },
  },
  {
    url: '/api/article/popular',
    method: 'get',
    response: () => {
      return {
        data: {
          list: posts.slice(0, 5),
        },
      };
    },
  },
] as MockMethod[];

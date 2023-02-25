/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:37:58
 */
import { MockMethod } from 'vite-plugin-mock';
import category from './data/category.json';

export default [
  {
    url: '/api/category',
    method: 'get',
    response: () => {
      return {
        data: category,
      };
    },
  }
] as MockMethod[];

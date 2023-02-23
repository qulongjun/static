/**
 * @File Menu mock
 * @Author author@static.vip
 * @Date 2023/2/23 16:22:40
 */
import { MockMethod } from 'vite-plugin-mock';
import list from './data/menu.json';

export default [
  {
    url: '/api/menu',
    method: 'get',
    response: () => {
      return {
        data: list,
      };
    },
  },
] as MockMethod[];

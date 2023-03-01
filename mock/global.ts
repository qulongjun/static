/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 10:33:34
 */
import { MockMethod } from 'vite-plugin-mock';
import author from './data/author.json';
import footer from './data/footer.json';

export default [
  {
    url: '/api/author',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: author,
      };
    },
  },
  {
    url: '/api/footer',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: footer,
      };
    },
  },
] as MockMethod[];

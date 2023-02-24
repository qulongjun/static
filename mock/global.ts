/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 10:33:34
 */
import { MockMethod } from 'vite-plugin-mock';
import author from './data/author.json';
import footer from './data/footer.json';
import tag from './data/tag.json';

export default [
  {
    url: '/api/author',
    method: 'get',
    response: () => {
      return {
        data: author,
      };
    },
  },
  {
    url: '/api/footer',
    method: 'get',
    response: () => {
      return {
        data: footer,
      };
    },
  },
  {
    url: '/api/hotTag',
    method: 'get',
    response: () => {
      return {
        data: tag.hotTag,
      };
    },
  },
] as MockMethod[];

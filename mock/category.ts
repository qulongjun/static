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
        code: 200,
        msg: 'success',
        data: category,
      };
    },
  },
  {
    url: '/api/category/:categoryId',
    method: 'get',
    response: (data: any) => {
      const categoryId = data.query.categoryId;
      return {
        code: 200,
        msg: 'success',
        data: {
          "label": "Leetcode专辑",
          "link": "leetcode",
          "type": "mega",
          "children": {
            "label": "基本",
            "link": "fundamentals",
            "children": {
              "label": "数组",
              "link": "array",
            },
          },
        },
      };
    },
  },
] as MockMethod[];

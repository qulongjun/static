/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:37:58
 */
import { MockMethod } from 'vite-plugin-mock';
import posts from './data/post.json';
import article from './data/article.json';

export default [
  {
    url: '/api/article/top',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: posts,
      };
    },
  },
  {
    url: '/api/article/featured',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'success',
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
        code: 200,
        msg: 'success',
        data: {
          list: posts.sort(item => Math.random() - 0.5),
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
        code: 200,
        msg: 'success',
        data: {
          list: posts.slice(0, 5),
        },
      };
    },
  },
  {
    url: '/api/article/:id',
    method: 'get',
    response: (data: any) => {
      // const id = data.query.id;
      // if ( id !== '1' ) {
      //   return {
      //     code: 404,
      //     msg: 'article not found',
      //   }
      // }
      return {
        code: 200,
        msg: 'success',
        data: {
          ...article,
          related: [{ ...article, id: 2 }, { ...article, id: 3 }, { ...article, id: 5 }],
        },
      };
    },
  },
  {
    url: '/api/comment',
    method: 'post',
    response: (data: any) => {
      console.info('data', data);
      /* 引用评论不存在 */
      // return {
      //   code: 404,
      //   msg: '您引用的评论不存在',
      // };

      return {
        code: 200,
        msg: 'success',
      }
    },
  },
] as MockMethod[];

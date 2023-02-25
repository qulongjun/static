/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:37:58
 */
import {MockMethod} from 'vite-plugin-mock';
import tag from './data/tag.json';

export default [
    {
        url: '/api/tag',
        method: 'get',
        response: () => {
            return {
                data: tag,
            };
        },
    },
    {
        url: '/api/tag/hot',
        method: 'get',
        response: () => {
            return {
                data: {
                    list: tag.list.slice(0, 3)
                },
            };
        },
    }
] as MockMethod[];

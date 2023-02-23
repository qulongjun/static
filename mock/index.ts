/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 15:39:00
 */
import { MockMethod } from 'vite-plugin-mock';
import menuMock from './menu';

export default [
  ...menuMock,
] as MockMethod[];

/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:48:00
 */

export type MenuType = 'sub' | 'mega' | 'common';

export interface ICategory {
  /* 分类ID */
  id: number;
  /* 分类名称 */
  label: string;
  /* 分类链接 */
  link: string;
  /* 分类图标 */
  icon?: string;
  /* 分类类型 */
  type?: MenuType;
  /* 子分类列表 */
  children?: ICategory[];
  /* 子分类 */
  child?: ICategory;
}

export interface ICategoryConfig {
  list: ICategory[];
}

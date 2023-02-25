/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:48:00
 */

export interface ICategory {
  /* 分类ID */
  id: number;
  /* 分类名称 */
  label: string;
  /* 分类链接 */
  link: string;
  /* 分类封面 */
  cover?: string;
  /* 分类描述 */
  desc?: string;
  /* 分类更新日期 */
  date: string;
  /* 文章数量 */
  articleCount?: number;
}

export interface ICategoryConfig {
  list: ICategory[];
}
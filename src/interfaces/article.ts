/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 14:45:29
 */
import { ICategory } from "./category";
import { IAuthor } from "./author";
import { ITag } from "./tag";

export interface IArticle {
  /* 文章ID */
  id: number;
  /* 文章封面 */
  cover?: string;
  /* 文章分类 */
  category: ICategory
  /* 文章标题 */
  title: string;
  /* 文章作者 */
  author: IAuthor;
  /* 文章更新日期 */
  date: string;
  /* 文章描述 */
  desc?: string;
  /* 文章阅读量 */
  views?: number;
  /* 文章标签 */
  tags?: ITag[];
  /* 文章评论数 */
  comments?: number;
  /* 文章点赞数 */
  likes?: number;
  /* 文章评分 */
  rating?: number;
  /* 阅读耗时 */
  readTime?: number;
}

export interface IFeaturedConfig {
  /* 轮播列表 */
  carousel: IArticle[];
  /* 文章列表 */
  list: IArticle[];
}

export interface ILeastConfig {
  /* 文章列表 */
  list: IArticle[];
  /* 文章数量 */
  count: number;
}

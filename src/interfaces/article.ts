/**
 * @File 接口 - 文章
 * @Author author@static.vip
 * @Date 2023/2/24 14:45:29
 */
import { ICategory } from './category';
import { IAuthor } from './author';
import { ITag } from './tag';

export interface IComment {
  /* 评论ID */
  id: number;
  /* 评论内容 */
  content: string;
  /* 评论名称 */
  name?: string;
  /* 评论时间 */
  date: string;
  /* 回复ID */
  replyId: number;
  /* 头像 */
  avatar: string;
  /* 邮箱 */
  email?: string;
  /* 用户ID */
  userId?: string;
}

export interface IArticle {
  /* 主题ID */
  id: number;
  /* 主题封面 */
  cover?: string;
  /* 主题分类 */
  category: ICategory[]
  /* 主题标题 */
  title: string;
  /* 主题内容 */
  content?: string;
  /* 主题作者 */
  author: IAuthor;
  /* 主题更新日期 */
  date: string;
  /* 主题真实日期 */
  realDate: string;
  /* 主题描述 */
  desc?: string;
  /* 主题阅读量 */
  views?: number;
  /* 主题标签 */
  tag?: ITag[];
  /* 主题点赞数 */
  likes?: number;
  /* 主题评分 */
  rating?: number;
  /* 主题评论数 */
  commentCount?: number;
  /* 主题评论 */
  comments: IComment[];
  /* 相关主题 */
  related: IArticle[];
  /* 文章链接 */
  link: string;
}

export interface IFeaturedConfig {
  /* 轮播列表 */
  carousel: IArticle[];
  /* 主题列表 */
  list: IArticle[];
}

export interface IRecently {
  /* 主题列表 */
  list: IArticle[];
  /* 主题数量 */
  count: number;
}

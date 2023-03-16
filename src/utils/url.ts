/**
 * @File 一些 URL 的计算方式
 * @Author author@static.vip
 * @Date 2023/2/24 15:17:19
 */
const ARTICLE_BASE_URL = `/article`;
const CATEGORY_BASE_URL = `/category`;
const TAG_BASE_PARAM = '/tag';

export const getArticleUrl: (id: number, link: string) => string = (id, link) => `${ARTICLE_BASE_URL}/${id}/${link}`;

export const getCategoryUrl: (category: string) => string = category => `${CATEGORY_BASE_URL}/${category}`;

export const getTagUrl: (tag: string) => string = tag => `${TAG_BASE_PARAM}/${tag}`;

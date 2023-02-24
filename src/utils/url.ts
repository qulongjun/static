/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 15:17:19
 */

const ARTICLE_BASE_URL = `/article`;

export const getArticleUrl: (articleId: number) => string = articleId => `${ARTICLE_BASE_URL}/${articleId}`;

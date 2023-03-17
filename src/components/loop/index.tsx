/**
 * @File 公共组件 - 文章列表
 * @Author author@static.vip
 * @Date 2023/2/27 15:45:13
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Share from '../share';
import Breadcrumb from '../breadCrumb';
import { IArticle } from '../../interfaces/article';
import { getArticleUrl } from '../../utils/url';

interface ILoop {
  /* 文章 */
  article: IArticle[];
}

const Loop: React.FC<ILoop> = ({ article }) => (
  <div className="loop-list loop-list-style-1">
    {Array.isArray(article) && article.length === 0 && <p>当前分类暂无文章</p>}
    {Array.isArray(article) && article.map((item) => (
      <article key={item.id} className="hover-up-2 transition-normal wow fadeInUp animated">
        <div className="row mb-40 list-style-2">
          <div className="col-md-4">
            <div className="post-thumb position-relative border-radius-5">
              <div
                className="img-hover-slide border-radius-5 position-relative"
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <Link to={getArticleUrl(item.id, item.link)} className="img-link" />
              </div>
              <Share shareUrl={location.origin + getArticleUrl(item.id, item.link)} />
            </div>
          </div>
          <div className="col-md-8 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 font-small mb-10">
                <Breadcrumb article={item} />
              </div>
              <h5 className="post-title font-weight-900 mb-20">
                <Link to={getArticleUrl(item.id, item.link)}>{item.title}</Link>
              </h5>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{item.date}</span>
                <span className="time-reading has-dot">{item.likes} 赞</span>
                <span className="post-by has-dot">{item.views} 阅读</span>
                <span className="comment-count has-dot">{item.commentCount} 评论</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Loop;

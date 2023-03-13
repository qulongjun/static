/**
 * @File 首页 - 精选主题
 * @Author author@static.vip
 * @Date 2023/2/24 14:10:43
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from '../../../utils/request';
import { ITag } from '../../../interfaces/tag';
import Carousel from './carousel';
import { IFeaturedConfig } from '../../../interfaces/article';
import { getArticleUrl, getTagUrl } from '../../../utils/url';
import Share from '../../../components/share';
import Breadcrumb from '../../../components/breadCrumb';

const Featured: React.FC = () => {
  const [hotTags, setHotTags] = useState<ITag[]>([]);
  const [featured, setFeatured] = useState<IFeaturedConfig | null>(null);

  const fetchTag = useCallback(async () => {
    const hotTags = await post('tag/hot') as ITag[];
    setHotTags(hotTags);
  }, []);

  const fetchFeaturedArticle = useCallback(async () => {
    const articles = await post('article/featured') as IFeaturedConfig;
    setFeatured(articles);
  }, []);

  useEffect(() => {
    fetchTag().then(() => console.info('hot tagCloud fetched'));
    fetchFeaturedArticle().then(() => console.info('featured article fetched'));
  }, []);

  return (
    <div className="container">
      <div className="hot-tags pt-30 pb-30 font-small align-self-center">
        <div className="widget-header-3">
          <div className="row align-self-center">
            <div className="col-md-4 align-self-center">
              <h5 className="widget-title">每日精选</h5>
            </div>
            <div className="col-md-8 text-md-right font-small align-self-center">
              <p className="d-inline-block mr-5 mb-0">
                <i className="elegant-icon  icon_tag_alt mr-5 text-muted" />热门标签:
              </p>
              <ul className="list-inline d-inline-block tags">
                {
                  hotTags.map((tag) => (
                    <li className="list-inline-item" key={tag.id}>
                      <Link to={getTagUrl(tag.link)}># {tag.label}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="loop-grid mb-30">
        <div className="row">
          <div className="col-lg-8 mb-30">
            <Carousel articles={featured?.carousel ?? null} />
          </div>
          {featured?.list.map((article) => (
            <article key={article.id} className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                     data-wow-delay="0.2s">
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${article.cover})` }}
                >
                  <Link to={getArticleUrl(article.id)} className="img-link" />
                  <Share />
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <Breadcrumb article={article} />
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <Link to={getArticleUrl(article.id)}>{article.title}</Link>
                    </h5>
                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                      <span className="post-on">{article.date}</span>
                      <span className="time-reading has-dot">{article.likes} 赞</span>
                      <span className="post-by has-dot">{article.views} 阅读</span>
                      <span className="comment-count has-dot">{article.commentCount} 评论</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

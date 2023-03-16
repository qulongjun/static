/**
 * @File 公共页 - 热门主题
 * @Author author@static.vip
 * @Date 2023/2/25 07:13:51
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { getArticleUrl } from '../../../utils/url';
import { post } from '../../../utils/request';
import { IArticle } from '../../../interfaces/article';
import Widget from '../../../components/widget';

const Popular: React.FC = () => {
  const [article, setArticle] = useState<IArticle[]>([]);

  const fetchArticle = useCallback(async () => {
    const article = await post('article/popular') as IArticle[];
    setArticle(article);
  }, []);

  useEffect(() => {
    fetchArticle().then(() => console.info('popular fetched'));
  }, [])

  return (
    <Widget header="热门" className={classNames('widget-recently-posts', 'mb-50', 'wow', 'fadeInUp', 'animated')}>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          {
            article.map((article) => (
              <li className="mb-30" key={article.id}>
                <div className="d-flex hover-up-2 transition-normal">
                  <div className="post-content media-body">
                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                      <Link to={getArticleUrl(article.id, article.link)}>{article.title}</Link>
                    </h6>
                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                      <span className="post-on">{article.date}</span>
                      <span className="post-by has-dot">{article.views} 阅读</span>
                    </div>
                  </div>
                  <div
                    className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                    <Link to={getArticleUrl(article.id, article.link)} className="color-white">
                      <img src={article.cover} alt="" />
                    </Link>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </Widget>
  )
}

export default Popular;

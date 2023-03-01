/**
 * @File
 * @Author author@static.vip(瞿龙俊)
 * @Date 2023/2/28 20:11:25
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryUrl } from '../../utils/url';
import { IArticle } from '../../interfaces/article';

interface IBreadcrumb {
  article: IArticle;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ article }) => {

  return <>
    <Link to={getCategoryUrl(article.category.link ?? '')}>
      <span className="post-cat position-relative text-primary">{article.category.label}</span>
    </Link>
    {
      article.category.children?.link && (
        <Link to={getCategoryUrl(article.category.children.link)}>
          <span className="post-cat text-info">{article.category.children.label}</span>
        </Link>
      )
    }

    {
      article.category.children?.children?.link && (
        <Link to={getCategoryUrl(article.category.children.children.link)}>
          <span className="post-cat text-success">{article.category.children.children.label}</span>
        </Link>
      )
    }
  </>;
};

export default Breadcrumb;

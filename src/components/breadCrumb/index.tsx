/**
 * @File 公共组件 - 面包屑导航
 * @Author author@static.vip
 * @Date 2023/2/28 20:11:25
 */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { getCategoryUrl } from '../../utils/url';
import { IArticle } from '../../interfaces/article';

interface IBreadcrumb {
  article: IArticle;
}

const TEXT_TYPES = ['info', 'primary', 'muted'];

const Breadcrumb: React.FC<IBreadcrumb> = ({ article }) => {
  const categories = article.category;

  const renderer = useMemo(() => categories.map((item, index) => (
    <Link to={getCategoryUrl(item.link)} key={item.id}>
      <span
        className={classNames({ 'post-cat': categories.lastIndexOf(item) !== categories.length - 1 }, `text-${TEXT_TYPES[index]}`)}>{item.label}</span>
    </Link>
  )), [categories]);

  return <>{renderer}</>;
};

export default Breadcrumb;

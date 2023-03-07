/**
 * @File 文章页 - 猜你喜欢
 * @Author author@static.vip
 * @Date 2023/2/27 15:39:43
 */
import React from 'react';
import Loop from '../../../components/loop';
import { IArticle } from '../../../interfaces/article';

interface IRelated {
  article: IArticle[];
}

const Related: React.FC<IRelated> = ({ article }) => {

  return (
    <div className="related-posts">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mt-5 mb-30">推荐阅读</h5>
      </div>
      <Loop article={article} />
    </div>
  );
};

export default Related;

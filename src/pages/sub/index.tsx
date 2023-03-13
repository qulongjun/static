/**
 * @File 二级分类页
 * @Author author@static.vip
 * @Date 2023/2/28 14:12:08
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IAuthor } from '../../interfaces/author';
import { post } from '../../utils/request';
import { ICategory } from '../../interfaces/category';
import { ITag } from '../../interfaces/tag';
import { IArticle, IRecently } from '../../interfaces/article';
import { DEFAULT_PAGE_SIZE } from '../../config';
import Loop from '../../components/loop';
import Pagination from '../../components/pagation';
import Author from '../common/author';
import Popular from '../common/popular';
import TagCloud from '../common/tagCloud';
import { getCategoryUrl } from '../../utils/url';

interface ISub {
  author: IAuthor | null;
  scroll2Top: () => void;
}

const Sub: React.FC<ISub> = (props) => {
  const { author, scroll2Top } = props;
  const { menu, subMenu, grandSubMenu, tagId } = useParams();
  const [result, setResult] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [article, setArticle] = useState<IArticle[]>([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    scroll2Top();
  }, [menu, subMenu, grandSubMenu, tagId]);

  const typeLabel = useMemo(() => {
    if ( tagId ) {
      return [{ label: result?.label, link: '' }];
    }
    else {
      const data = [];
      data.push({ label: result?.label, link: getCategoryUrl(result?.link) });
      if ( result?.child?.[0] ) data.push({ label: result.child[0].label, link: getCategoryUrl(result.child[0].link) });
      if ( result?.child?.[0].child?.[0] ) data.push({
        label: result.child[0].child[0].label,
        link: getCategoryUrl(result.child[0].child[0].link),
      });

      return data;
    }
  }, [result, tagId]);

  const fetchType = useCallback(async () => {
    if ( tagId ) {
      const result = await post(`tag/${tagId}`) as ITag[];
      setResult(result[0]);
    }
    else {
      const result = await post(`category/${grandSubMenu || subMenu || menu}`) as ICategory[];
      setResult(result[0])
    }

  }, [menu, subMenu, grandSubMenu, tagId]);

  const fetchArticle = useCallback(async () => {
    const article = await post('article', {
      currentPage: page,
      pageSize,
      type: 'sub',
      ...tagId ? {
        tag: result?.id,
      } : {
        category: result?.child?.[0]?.child?.[0]?.id || result?.child?.[0]?.id || result?.id,
      },
    }) as IRecently;
    setArticle(article.list);
    setTotalPage(Math.ceil(article.count / pageSize));
  }, [page, pageSize, result]);

  const onChangePage = useCallback((curPage: number) => {
    setPage(curPage);
  }, []);

  useEffect(() => {
    // console.info('trigger');
    fetchType();
  }, [menu, subMenu, grandSubMenu, tagId])

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <main>
      <div className="archive-header pt-50">
        <div className="container">
          <h2
            className="font-weight-900">{result?.child?.[0]?.child?.[0]?.label || result?.child?.[0]?.label || result?.label}</h2>
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">首页</Link>
            {typeLabel.map((item, index) => (
              <React.Fragment key={index}><span /><Link to={item.link}>{item.label}</Link></React.Fragment>))}
          </div>
          <div className="bt-1 border-color-1 mt-30 mb-50" />
        </div>
      </div>
      <div className="pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-3">
                <Loop article={article} />
                {Array.isArray(article) && article.length !== 0 &&
                <Pagination curPage={page} numPages={totalPage} numPagesAroundCurrent={1}
                            onChangePage={onChangePage} />}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <Author author={author} />
                <Popular />
                <TagCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sub;

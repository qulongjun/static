/**
 * @File 搜索页
 * @Author author@static.vip
 * @Date 2023/2/28 14:12:08
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IAuthor } from '../../interfaces/author';
import { post } from '../../utils/request'
import { IArticle, IRecently } from '../../interfaces/article';
import { DEFAULT_PAGE_SIZE } from '../../config';
import Loop from '../../components/loop';
import Pagination from '../../components/pagation';
import Author from '../common/author';
import Popular from '../common/popular';
import TagCloud from '../common/tagCloud';

interface ISearch {
  author: IAuthor | null;
  scroll2Top: () => void;
}

const Search: React.FC<ISearch> = (props) => {
  const { author, scroll2Top } = props;
  const { key } = useParams();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [article, setArticle] = useState<IArticle[]>([]);
  const [count, setCount] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    scroll2Top();
  }, [key]);

  const fetchArticle = useCallback(async () => {
    const article = await post(`article/search/${key}`, {
      currentPage: page,
      pageSize,
      key,
    }) as IRecently;
    setArticle(article.list);
    setCount(article.count);
    setTotalPage(Math.ceil(article.count / pageSize));
  }, [page, pageSize, key]);

  const onChangePage = useCallback((curPage: number) => {
    setPage(curPage);
  }, []);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <main>
      <div className="archive-header pt-50">
        <div className="container">
          <h2
            className="font-weight-900">搜索结果</h2>
          <div className="breadcrumb">
            共找到 {count} 篇关于 <strong> "{key}" </strong>的主题
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

export default Search;

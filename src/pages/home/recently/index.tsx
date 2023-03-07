/**
 * @File 首页 - 最新主题
 * @Author author@static.vip
 * @Date 2023/2/24 19:16:51
 */
import React, { useCallback, useEffect, useState } from 'react';
import Pagination from '../../../components/pagation';
import { post } from '../../../utils/request';
import { IArticle, IRecently } from '../../../interfaces/article';
import { DEFAULT_PAGE_SIZE } from '../../../config';
import Loop from '../../../components/loop';

interface IRecentlyProp {
  scroll2Top: () => void;
}

const Recently: React.FC<IRecentlyProp> = ({ scroll2Top }) => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [article, setArticle] = useState<IArticle[]>([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [trigger, setTrigger] = useState<boolean>(false);

  const onChangePage = useCallback((curPage: number) => {
    setPage(curPage);
    scroll2Top();
  }, []);

  const fetchArticle = useCallback(async () => {
    const article = await post('article', {
      currentPage: page,
      pageSize,
    }) as IRecently;
    setArticle(article.list);
    setTotalPage(Math.ceil(article.count / pageSize));
    setTrigger(true);
  }, [page, pageSize]);

  useEffect(() => {
    fetchArticle().then(r => console.info('recently article fetched'));
  }, [fetchArticle])

  return (
    <div>
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">最近更新</h5>
      </div>
      <Loop article={article} />
      {Array.isArray(article) && article.length !== 0 &&
      <Pagination curPage={page} numPages={totalPage} numPagesAroundCurrent={1} onChangePage={onChangePage} />}
    </div>
  );

};

export default Recently;

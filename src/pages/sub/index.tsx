/**
 * @File
 * @Author author@static.vip(瞿龙俊)
 * @Date 2023/2/28 14:12:08
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IAuthor } from '../../interfaces/author';
import { get } from "../../utils/request";
import { ICategory } from "../../interfaces/category";
import { ITag } from "../../interfaces/tag";
import { IArticle, IRecently } from "../../interfaces/article";
import { DEFAULT_PAGE_SIZE } from "../../config";
import Loop from "../../components/loop";
import Pagination from "../../components/pagation";
import Author from "../common/author";
import Popular from "../common/popular";
import Category from "../common/category";
import TagCloud from "../common/tagCloud";

interface ISub {
  author: IAuthor | null;
  scroll2Top: () => void;
}

const Sub: React.FC<ISub> = (props) => {
  const { author, scroll2Top } = props;
  const { menu, subMenu, grandSubMenu, tagId } = useParams();
  const [result, setResult] = useState<ICategory | ITag | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(20);
  const [article, setArticle] = useState<IArticle[]>([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);

  useEffect(() => {
    scroll2Top();
  }, [menu, subMenu, grandSubMenu, tagId]);

  const typeLabel = useMemo(() => {

    if ( tagId ) {
      return ['标签'];
    }
    else {
      const data = [];
      if ( menu ) data.push(menu);
      if ( subMenu ) data.push(subMenu);
      if ( grandSubMenu ) data.push(grandSubMenu);

      return data;
    }
  }, [menu, subMenu, grandSubMenu, tagId]);

  const fetchType = useCallback(async () => {
    if ( tagId ) {
      const result = await get(`tag/${tagId}`) as ITag;
      setResult(result);
    }
    else {
      const result = await get(`category/${grandSubMenu || subMenu || menu}`) as ICategory;
      setResult(result)
    }

  }, [menu, subMenu, grandSubMenu, tagId]);

  const fetchArticle = useCallback(async () => {
    const article = await get('article/latest', {
      currentPage: page,
      pageSize,
    }) as IRecently;
    setArticle(article.list);
    setTotalPage(Math.ceil(article.count / pageSize));
  }, [page, pageSize]);

  const onChangePage = useCallback((curPage: number) => {
    setPage(curPage);
  }, []);

  useEffect(() => {
    fetchType();
    fetchArticle();
  }, [fetchType, fetchArticle]);

  return (
    <main>
      <div className="archive-header pt-50">
        <div className="container">
          <h2 className="font-weight-900">{result?.label}</h2>
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">首页</Link>
            {typeLabel.map((item, index) => (<><span />{item}</>))}
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
                <Pagination curPage={page} numPages={totalPage} numPagesAroundCurrent={1} onChangePage={onChangePage} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <Author author={author} />
                <Popular />
                <Category />
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

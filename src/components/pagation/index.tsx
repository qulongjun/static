/**
 * @File 页码组件
 * @Author author@static.vip
 * @Date 2023/2/24 19:41:51
 */
import React, { useCallback, useMemo } from 'react';
import classNames from "classnames";
// @ts-ignore
import { generateFromObj } from '@bramus/pagination-sequence';


interface IPagination {
  /* 当前页码 */
  curPage: number;
  /* 总页码 */
  numPages: number;
  /* 当前页码左右数量 */
  numPagesAroundCurrent?: number;
  /* 页码变化事件 */
  onChangePage: (pageNum: number) => void;

}

const Pagination: React.FC<IPagination> = (props) => {
  const { curPage, numPages, numPagesAroundCurrent = 2, onChangePage } = props;

  const pageList = useMemo(() => {

    return generateFromObj({
      curPage,
      numPages,
      numPagesAroundCurrent,
    });

  }, [curPage, numPages, numPagesAroundCurrent]);

  const onClick = useCallback((curPage: number | string, prev: number, next: number) => {
    if ( typeof curPage === 'number' ) {
      onChangePage(curPage);
    }
    else onChangePage(Math.floor((next - prev) / 2) + prev);
  }, [onChangePage]);

  return (
    <>
      <div className="pagination-area mb-30 mt-60 wow fadeInUp animated">
        <nav className="pagination-nav" aria-label="Page navigation">
          <ul className="pagination justify-content-start">
            {
              Array.isArray(pageList) && pageList.map((item, index) => {
                return (
                  <li key={(item + index).toString()} className={classNames('page-item', { active: item === curPage })}>
                    <span
                      onClick={() => onClick(item, pageList[index - 1], pageList[index + 1])}
                      className="page-link"
                    >
                      {item}
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;

/**
 * @File 首页 - 最新主题
 * @Author author@static.vip
 * @Date 2023/2/24 19:16:51
 */
import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getArticleUrl, getCategoryUrl} from '../../../utils/url';
import Share from '../../../components/share';
import Pagination from '../../../components/pagation';
import {get} from '../../../utils/request';
import {IArticle, IRecently} from '../../../interfaces/article';
import {DEFAULT_PAGE_SIZE} from '../../../config';

const Recently: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(20);
    const [article, setArticle] = useState<IArticle[]>([]);
    const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);

    const onChangePage = useCallback((curPage: number) => {
        setPage(curPage);
    }, []);

    const fetchArticle = useCallback(async () => {
        const article = await get('article/latest', {
            currentPage: page,
            pageSize,
        }) as IRecently;
        setArticle(article.list);
        setTotalPage(Math.ceil(article.count / pageSize));
    }, [page, pageSize]);

    useEffect(() => {
        fetchArticle().then(() => console.info('recently fetched'));
    }, [fetchArticle])


    return (
        <div>
            <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">最近更新</h5>
            </div>
            <div className="loop-list loop-list-style-1">
                {article.map((item) => (
                    <article key={item.id} className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                            <div className="col-md-4">
                                <div className="post-thumb position-relative border-radius-5">
                                    <div
                                        className="img-hover-slide border-radius-5 position-relative"
                                        style={{backgroundImage: `url(${item.cover})`}}
                                    >
                                        <Link to={getArticleUrl(item.id)} className="img-link"/>
                                    </div>
                                    <Share/>
                                </div>
                            </div>
                            <div className="col-md-8 align-self-center">
                                <div className="post-content">
                                    <div className="entry-meta meta-0 font-small mb-10">
                                        <Link to={getCategoryUrl(item.category.link)}>
                                            <span className="post-cat text-primary">{item.category.label}</span>
                                        </Link>
                                    </div>
                                    <h5 className="post-title font-weight-900 mb-20">
                                        <Link to={getArticleUrl(item.id)}>{item.title}</Link>
                                    </h5>
                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                        <span className="post-on">{item.date}</span>
                                        <span className="time-reading has-dot">{item.likes} 赞</span>
                                        <span className="post-by has-dot">{item.views} 阅读</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <Pagination curPage={page} numPages={totalPage} numPagesAroundCurrent={1} onChangePage={onChangePage}/>
        </div>
    );

};

export default Recently;

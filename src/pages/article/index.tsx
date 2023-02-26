/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/26 12:19:48
 */
import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Author from "../home/author";
import Popular from "../home/popular";
import Category from "../home/category";
import TagCloud from "../home/tagCloud";
import {IAuthor} from "../../interfaces/author";
import {IArticle} from "../../interfaces/article";
import {post} from "../../utils/request";
import {LinkOutlined, QrcodeOutlined, WechatOutlined} from "@ant-design/icons";
import {getCategoryUrl} from "../../utils/url";

interface IArticleProps {
    author: IAuthor | null;
}

const Article: React.FC<IArticleProps> = (props) => {
    const {author} = props;
    const {id} = useParams();
    const [article, setArticle] = useState<IArticle>()

    const fetchArticle = useCallback(async () => {
        console.info('fetch article');
        const article = await post('article', {
            id
        }) as IArticle;
        setArticle(article);
    }, [id]);

    useEffect(() => {
        fetchArticle();
    }, [fetchArticle]);

    return (
        <main className="bg-grey pt-50 pb-50">
            <div className="pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-content2">

                                <div className="entry-header entry-header-style-1 mb-50">
                                    <div className="entry-meta meta-0 mb-15 font-small">
                                        <Link to={getCategoryUrl(article?.category.link ?? '')}>
                                            <span
                                                className="post-cat position-relative text-info">{article?.category.label}</span>
                                        </Link>
                                    </div>
                                    <h1 className="entry-title mb-30 font-weight-900">{article?.title}</h1>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div
                                                className="entry-meta align-items-center meta-2 font-small color-muted">
                                                <p className="mb-5">
                                                    <Link to="/author" className="author-avatar">
                                                        <img className="img-circle" src={author?.avatar} alt=""/>
                                                    </Link>
                                                    <span className="author-name font-weight-bold">{author?.name}</span>
                                                </p>
                                                <span className="mr-10">{article?.date}</span>
                                                <span className="has-dot">
                                                    {article?.views} 阅读
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right d-none d-md-inline">
                                            <ul className="header-social-network d-inline-block list-inline mr-15">
                                                <li className="list-inline-item text-muted">
                                                    <span>分享至:{" "}</span>
                                                </li>

                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-icon wc text-xs-center"
                                                          target="_blank">
                                                        <WechatOutlined/>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-icon pt text-xs-center"
                                                          target="_blank">
                                                        <QrcodeOutlined/>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-icon tw text-xs-center"
                                                          target="_blank">
                                                        <LinkOutlined/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end single header--> */}
                                <figure className="image mb-30 m-auto text-center border-radius-10">
                                    <img
                                        className="border-radius-10"
                                        src="/assets/imgs/news/news-10.jpg"
                                        alt="post-title"
                                    />
                                </figure>
                                {/* <!--figure--> */}
                                <article className="entry-wraper mb-50">
                                    <div className="typo">
                                        <div dangerouslySetInnerHTML={{__html: article?.content ?? ''}}/>
                                    </div>
                                    <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                        <div className="tags">
                                            <span>Tags: </span>
                                            <Link to="/category">
                                                deer
                                            </Link>
                                            <Link to="/category">
                                                nature
                                            </Link>
                                            <Link to="/category">
                                                conserve
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="single-social-share clearfix wow fadeIn animated">
                                        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                                                    <span className="hit-count mr-15">
                                                        <i className="elegant-icon icon_comment_alt mr-5"></i>
                                                        182 comments
                                                    </span>
                                            <span className="hit-count mr-15">
                                                        <i className="elegant-icon icon_like mr-5"></i>
                                                        268 likes
                                                    </span>
                                            <span className="hit-count">
                                                        <i className="elegant-icon icon_star-half_alt mr-5"></i>
                                                        Rate: 9/10
                                                    </span>
                                        </div>
                                        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                            <li className="list-inline-item text-muted">
                                                <span>分享至:{" "}</span>
                                            </li>

                                            <li className="list-inline-item">
                                                <Link to="#" className="social-icon wc text-xs-center" target="_blank">
                                                    <WechatOutlined/>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="#" className="social-icon pt text-xs-center" target="_blank">
                                                    <QrcodeOutlined/>
                                                </Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="#" className="social-icon tw text-xs-center" target="_blank">
                                                    <LinkOutlined/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget-area">
                                <Author author={author}/>
                                <Popular/>
                                <Category/>
                                <TagCloud/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Article;
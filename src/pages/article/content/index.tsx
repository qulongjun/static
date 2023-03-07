/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/27 17:37:05
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { getCategoryUrl, getTagUrl } from "../../../utils/url";
import { HeartFilled, HeartOutlined, LinkOutlined, QrcodeOutlined, WechatOutlined } from "@ant-design/icons";
import { IArticle } from "../../../interfaces/article";
import { IAuthor } from "../../../interfaces/author";
import Breadcrumb from "../../../components/breadCrumb";
import { post } from "../../../utils/request";
import toast from "react-hot-toast";

interface IContent {
  article?: IArticle;
  author: IAuthor | null;
  fetchArticle: () => void;
}

const Content: React.FC<IContent> = ({ article, author, fetchArticle }) => {

  const isStared = useMemo(() => {
    const starMap: string[] = JSON.parse(localStorage.getItem('starList') || '[]');
    return !!starMap.find(item => parseInt(item, 10) === article?.id);
  }, [article]);

  const onStar = useCallback(async () => {
    if ( !isStared ) {
      await post(`/article/star/${article?.id}`);
      const starMap: string[] = JSON.parse(localStorage.getItem('starList') || '[]');
      starMap.push(article?.id + '');
      localStorage.setItem('starList', JSON.stringify(starMap));
      fetchArticle();
      toast.success('点赞成功');
    }
    else toast.error('您点赞过当前文章，请勿重复点赞');
  }, [article, isStared]);

  return <div>
    <div className="entry-header entry-header-style-1 mb-50">
      <div className="entry-meta meta-0 mb-15 font-small">
        {article && <Breadcrumb article={article} />}
      </div>
      <h1 className="entry-title mb-30 font-weight-900">{article?.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="entry-meta align-items-center meta-2 font-small color-muted">
            <p className="mb-5">
              <span className="author-avatar">
                <img className="img-circle" src={author?.avatar} alt="" />
              </span>
              <span className="author-name font-weight-bold">{author?.name}</span>
            </p>
            <span className="mr-10">{article?.realDate}</span>
            <span className="has-dot">{article?.views} 阅读</span>
          </div>
        </div>
        <div className="col-md-6 text-right d-none d-md-inline">
          <ul className="header-social-network d-inline-block list-inline mr-15">
            <li className="list-inline-item text-muted">
              <span>分享至:</span>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="social-icon wc text-xs-center"
                    target="_blank">
                <WechatOutlined />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="social-icon pt text-xs-center"
                    target="_blank">
                <QrcodeOutlined />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="social-icon tw text-xs-center"
                    target="_blank">
                <LinkOutlined />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <figure className="image mb-40 m-auto text-center border-radius-10">
      <img className="border-radius-10" src={article?.cover} alt="post-title" />
    </figure>
    <article className="entry-wraper mb-30">
      <div id="write">
        <div dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} />
      </div>
      <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
        <div className="tags">
          <span>标签: </span>
          {article?.tag?.map((tag, index) => <Link key={index} to={getTagUrl(tag.link)}>{tag.label}</Link>)}
        </div>
      </div>
      <div className="single-social-share clearfix wow fadeIn animated">
        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
          <span className="hit-count mr-15 d-flex align-items-center" onClick={onStar}>
            {
              isStared ? <HeartFilled className="mr-5" style={{ color: '#ffccc7' }} /> :
                <HeartOutlined className="mr-5" />
            }
            {article?.likes} 赞
          </span>
        </div>
        <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
          <li className="list-inline-item text-muted">
            <span>分享至:</span>
          </li>

          <li className="list-inline-item">
            <Link to="#" className="social-icon wc text-xs-center" target="_blank">
              <WechatOutlined />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-icon pt text-xs-center" target="_blank">
              <QrcodeOutlined />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-icon tw text-xs-center" target="_blank">
              <LinkOutlined />
            </Link>
          </li>
        </ul>
      </div>
    </article>
  </div>;
};

export default Content;

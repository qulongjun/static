/**
 * @File
 * @Author author@static.vip(瞿龙俊)
 * @Date 2023/2/27 17:37:05
 */
import React from 'react';
import { Link } from "react-router-dom";
import { getCategoryUrl, getTagUrl } from "../../../utils/url";
import { LinkOutlined, QrcodeOutlined, WechatOutlined } from "@ant-design/icons";
import { IArticle } from "../../../interfaces/article";
import { IAuthor } from "../../../interfaces/author";
import Breadcrumb from "../../../components/breadCrumb";

interface IContent {
  article?: IArticle;
  author: IAuthor | null;
}

const Content: React.FC<IContent> = ({ article, author }) => {

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
              <Link to="/author" className="author-avatar">
                <img className="img-circle" src={author?.avatar} alt="" />
              </Link>
              <span className="author-name font-weight-bold">{author?.name}</span>
            </p>
            <span className="mr-10">{article?.date}</span>
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
          {article?.tags?.map((tag, index) => <Link key={index} to={getTagUrl(tag.link)}>{tag.label}</Link>)}
        </div>
      </div>
      <div className="single-social-share clearfix wow fadeIn animated">
        <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
          <span className="hit-count mr-15">
            <i className="elegant-icon icon_comment_alt mr-5" />{article?.comments?.length ?? 0} 评论
          </span>
          <span className="hit-count mr-15">
            <i className="elegant-icon icon_like mr-5" />{article?.likes} 赞
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

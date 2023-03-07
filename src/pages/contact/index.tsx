/**
 * @File
 * @Author author@static.vip
 * @Date 2023/3/7 19:33:23
 */
import React from 'react';
import { IAuthor } from '../../interfaces/author';
import { GithubOutlined, ZhihuOutlined } from "@ant-design/icons";

interface IContact {
  author: IAuthor | null;
}

const Contact: React.FC<IContact> = ({ author }) => (
  <main className="bg-grey pb-30">
    <div
      className="entry-header entry-header-style-2 pb-80 pt-80 mb-50 text-white"
      style={{ "backgroundImage": "url(assets/imgs/news/news-17.jpg)" }}
    >
      <div className="container entry-header-content">
        <h1 className="entry-title mb-50 font-weight-900">
          联系我们
        </h1>
      </div>
    </div>
    <div className="container single-content">
      <div className="entry-wraper mt-50">
        <div className="row">
          <div className="col-12">
            <div className="author-bio mb-50 bg-white p-30 border-radius-10">
              <div className="author-image mb-30">
                <img src={author?.avatar} alt="" className="avatar" />
              </div>
              <div className="author-info">
                <h3 className="font-weight-900">
                    <span className="vcard author">
                      <span className="fn">{author?.name}</span>
                    </span>
                </h3>
                <div className="author-description text-muted">{author?.description}</div>
                <strong>关注我: &nbsp;</strong>
                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                  <li className="list-inline-item">
                    <a href={author?.shareLink1} target="_blank" className="github" title="关注 Github"><GithubOutlined /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href={author?.shareLink2} target="_blank" className="zh" title="关注 知乎专栏"><ZhihuOutlined /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-30">意见与建议</h3>
        <hr className="wp-block-separator is-style-wide" />
        <p>如果您在浏览本站时遇到任何问题，请随时与我们联系，我们将全力全意为您解决！请发邮件与我们联系，我们将尽快与您取得联系！</p>
        <strong>联系方式： <a href="mailTo: fb@static.vip">fb@static.vip</a></strong>
      </div>
    </div>
  </main>
);

export default Contact;

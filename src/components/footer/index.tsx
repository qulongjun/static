/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 20:27:38
 */
import React from 'react';
import { Link } from 'react-router-dom';

interface IFooter {
}

const Footer: React.FC<IFooter> = () => {

  return (
    <>
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">关于作者</h5>
                </div>
                <div className="textwidget">
                  <p>
                    Jonny，就职于中国某互联网公司，从事前端系统的开发与维护工作。与世界分享自己的知识、经验和见解。
                  </p>
                  <p>
                    <strong className="color-black">地址</strong>
                    <br />
                    田林路 徐汇区
                    <br />
                    上海市, 中华人民共和国
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">友情链接</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <Link to="/#">
                      <a>About me</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to="/#">
                      <a>Help & Support</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link to="/#">
                      <a>​​Licensing Policy</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link to="/#">
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">热门标签</h5>
                </div>
                <div className="tagcloud mt-50">
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      beautiful
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      New York
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      droll
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      intimate
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      loving
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      travel
                    </a>
                  </Link>
                  <Link to="/category">
                    <a
                      className="tag-cloud-link"
                    >
                      fighting{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                data-wow-delay="0.3s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">订阅动态</h5>
                </div>
                <div className="newsletter">
                  <p className="font-medium">
                   如果需要获取作者的最新动态，欢迎订阅。
                  </p>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="输入您的邮箱"
                    />
                    <button
                      className="btn bg-primary text-white"
                      type="submit"
                    >
                      订阅
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © 2022, Static. - 苏ICP备16022318号-13
            </p>
            <p className="float-md-right font-small text-muted">
              Design by Jonny | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

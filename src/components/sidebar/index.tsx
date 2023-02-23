/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 15:15:56
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface ISideBar {
  visible: boolean;
  onToggleSideBar: () => void;
}

const SideBar: React.FC<ISideBar> = (props) => {
  const { visible, onToggleSideBar } = props;

  useEffect(() => {
    document.body.classList[visible ? 'add' : 'remove']('canvas-opened');
  }, [visible]);

  return (
    <>
      <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
        <PerfectScrollbar>
          <button className="off-canvas-close" onClick={onToggleSideBar}>
            <i className="elegant-icon icon_close"></i>
          </button>
          <div className="sidebar-inner">
            <div className="sidebar-widget widget_categories mb-50 mt-30">
              <div className="widget-header-2 position-relative">
                <h5 className="mt-5 mb-15">Hot topics</h5>
              </div>
              <div className="widget_nav_menu">
                <ul>
                  <li className="cat-item cat-item-2">
                    <Link to="/category">
                      Travel tips
                    </Link>
                    <span className="post-count">30</span>
                  </li>
                  <li className="cat-item cat-item-3">
                    <Link to="/category-grid">
                      Book review
                    </Link>
                    <span className="post-count">25</span>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link to="/category-list">
                      Hotel review
                    </Link>
                    <span className="post-count">16</span>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link to="/category-masonry">
                      Destinations
                    </Link>
                    <span className="post-count">22</span>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link to="/category-big">
                      Lifestyle
                    </Link>
                    <span className="post-count">25</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--Latest--> */}
            <div className="sidebar-widget widget-latest-posts mb-50">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Don't miss</h5>
              </div>
              <div className="post-block-list post-module-1 post-module-5">
                <ul className="list-post">
                  {[].slice(1, 4).map((item, i) => (
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div
                          className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <Link to={`/blog`}>
                            <a className="color-white">
                              <img src={`assets/imgs/news/`} alt="" />
                            </a>
                          </Link>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <Link to={`/blog`}>
                              The Life of a Travel Writer with David Farley
                            </Link>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on">{item}</span>
                            <span className="post-by has-dot">{item} views</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <!--Ads--> */}
            <div className="sidebar-widget widget-ads">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Advertise banner</h5>
              </div>

              <Link to="https://themeforest.net/user/alithemes/portfolio">
                <img className="advertise-img border-radius-5" src="/assets/imgs/ads/ads-1.jpg" alt="" />
              </Link>
            </div>
          </div>
        </PerfectScrollbar>
      </aside>
    </>
  );
};

export default SideBar;

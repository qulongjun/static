/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/23 14:03:44
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ISearch {
  visible: boolean;
}

const Search: React.FC<ISearch> = (props) => {
  const { visible } = props;

  useEffect(() => {
    document.body.classList[visible ? 'add' : 'remove']('open-search-form');
  }, [visible]);

  return (
    <>
      <div className="main-search-form">
        <div className="container">
          <div className=" pt-50 pb-50 ">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="搜索文章..."
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-search bg-white"
                        type="submit"
                      >
                        <i className="elegant-icon icon_search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-80 text-center">
              <div className="col-12 font-small suggested-area">
                <h5 className="suggested font-heading mb-20 text-muted">
                  {" "}
                  <strong>热搜 关键词:</strong>
                </h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                    <Link to="/category">World</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">American</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Opinion</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Tech</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Science</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Books</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Travel</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/category">Business</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-80">
              <div className="col-lg-4">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div
                    className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <Link to="/single" className="color-white">
                      <img
                        src="/assets/imgs/news/thumb-2.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      {" "}
                      <Link to="/category">Travel Tips</Link>{" "}
                    </h6>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div
                    className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <Link to="/single" className="color-white">
                      <img
                        src="/assets/imgs/news/thumb-4.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      {" "}
                      <Link to="/category">Lifestyle</Link>{" "}
                    </h6>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6">
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                  <div
                    className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                    <Link to="/single" className="color-white">
                      <img
                        src="/assets/imgs/news/thumb-3.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h6>
                      {" "}
                      <Link to="/category">Hotel Review</Link>{" "}
                    </h6>
                    <p className="text-muted font-small">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

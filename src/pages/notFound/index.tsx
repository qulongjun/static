/**
 * @File
 * @Author author@static.vip
 * @Date 2023/2/24 11:32:22
 */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {

  return (
    <>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="row pt-80">
            <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50">
              <img
                src="/assets/imgs/page-not-found.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
              <h1 className="mb-30 font-weight-900 page-404">
                404
              </h1>
              <form
                action="#"
                method="get"
                className="search-form d-lg-flex open-search mb-30"
              >
                <i className="icon-search" />
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="搜索..."
                />
              </form>
              <p className="">
                你似乎来到了没有知识存在的荒原。
                <br /> 返回{" "}
                <Link to="/">首页</Link> 或者 {" "}
                <Link to="/page-contact">联系我们</Link>{" "}
                以获得帮助。
              </p>
              <div className="form-group">
                <button
                  type="submit"
                  className="button button-contactForm mt-30"
                >
                  <Link to="/" className="text-white">返回首页</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

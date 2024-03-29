/**
 * @File 公共组件 - 页头
 * @Author author@static.vip
 * @Date 2023/2/23 11:15:57
 */
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu';

interface IHeader {
  /* 触发搜索 */
  onToggleSearch: () => void;
}

const Header: React.FC<IHeader> = (props) => {
  const { onToggleSearch } = props;

  const toAdmin = useCallback(() => {
    window.open('https://admin.static.vip');
  }, []);

  return (
    <header className="main-header header-style-1 font-heading">
      <div className="header-top">
        <div className="container">
          <div className="row pt-20 pb-20">
            <div className="col-md-3 col-xs-6">
              <Link to="/">
                <img className="logo" src="/assets/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="col-md-9 col-xs-6 text-right header-top-right ">
              <ul className="list-inline nav-topbar d-none d-md-inline">
                <li className="list-inline-item">
                  <Link to="/contact">联系我们</Link>
                </li>
              </ul>
              <span className="vertical-divider mr-20 ml-20 d-none d-md-inline" />
              <button className="search-icon d-none d-md-inline" onClick={onToggleSearch}>
                  <span className="mr-15 text-muted font-small">
                    <i className="elegant-icon icon_search mr-5" />Search
                  </span>
              </button>
              <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow" onClick={toAdmin}>管理系统</button>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;

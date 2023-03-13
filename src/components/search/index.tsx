/**
 * @File 公共组件 - 搜索
 * @Author author@static.vip
 * @Date 2023/2/23 14:03:44
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ITag } from '../../interfaces/tag';
import { post } from '../../utils/request';
import { getTagUrl } from '../../utils/url';

interface ISearch {
  visible: boolean;
  onClose: () => void;
}

const Search: React.FC<ISearch> = (props) => {
  const { visible, onClose } = props;
  const [searchKey, setSearchKey] = useState<string>('');
  const [recommend, setRecommend] = useState<ITag[]>([]);
  const navigate = useNavigate();

  const fetchRecommend = useCallback(async () => {
    const result = await post('tag/recommend') as ITag[];
    setRecommend(result);
  }, []);

  const onSearch = useCallback(async (e: any) => {
    onClose();
    navigate(`/search/${searchKey}`);
    setSearchKey('');
    e.preventDefault();
  }, [searchKey]);

  useEffect(() => {
    fetchRecommend();
  }, [])

  useEffect(() => {
    document.body.classList[visible ? 'add' : 'remove']('open-search-form');
  }, [visible]);


  return (
    <div className="main-search-form">
      <div className="container">
        <div className=" pt-50 pb-50 ">
          <div className="row mb-20">
            <div className="col-12 align-self-center main-search-form-cover m-auto">
              <p className="text-center">
                <span className="search-text-bg">Search</span>
              </p>
              <form onSubmit={onSearch} className="search-header">
                <div className="input-group w-100">
                  <input
                    type="text"
                    value={searchKey}
                    className="form-control"
                    placeholder="搜索主题关键词..."
                    onChange={e => setSearchKey(e.target.value)}
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
                <strong>推荐搜索</strong>
              </h5>
              <ul className="list-inline d-inline-block">
                {
                  recommend.map(item => (
                    <li className="list-inline-item" onClick={onClose} key={item.id}>
                      <Link to={getTagUrl(item.link)}>{item.label}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
